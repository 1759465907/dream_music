// pages/search/search.js
import requestOwn from '../../utils/request'
let isSend=false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholderContent:'',//搜索字符串
    hotList:[],// 热搜榜数据
    searchContent:'',//搜索的关键字
    searchList:[],//搜索结果
    historyList:[],//搜索的历史记录集合
  },

  //表单内容发生改变的回调
  handleInputChange(event){
    this.setData({
      searchContent:event.detail.value.trim()
    });
    if(isSend)return;
    isSend=true;

    this.getSearchList();

    setTimeout(async ()=>{
      isSend=false;
    },300);
  },
  //初始化数据
  async getInitData(){
    let placeholderData=await requestOwn('/search/default');
    let hotListData = await requestOwn('/search/hot/detail');
    console.log(placeholderData);
    console.log(hotListData);
    this.setData({
      placeholderContent:placeholderData.data.showKeyword,
      hotList:hotListData.data
    });
  },

  //搜索函数
  async getSearchList(){
    if(!this.data.searchContent){
      this.setData({
        searchList: []
      })
      return;
    }
    let {searchContent, historyList} = this.data;
    // 发请求获取关键字模糊匹配数据
    let searchListData = await requestOwn('/search', {keywords: searchContent, limit: 10});
    this.setData({
      searchList: searchListData.result.songs
    })
    
    // 将搜索的关键字添加到搜索历史记录中
    if(historyList.indexOf(searchContent) !== -1){
      historyList.splice(historyList.indexOf(searchContent), 1)
    }
    //放到前面 
    historyList.unshift(searchContent);
    this.setData({
      historyList
    })
    
    wx.setStorageSync('searchHistory', historyList)
  },

  //获取本地历史记录的功能函数
  getSearchHistory(){
    let historyList = wx.getStorageSync('searchHistory');
    if(historyList){
      this.setData({
        historyList
      });
    }
  },

  //清空搜索内容
  clearSearchContent(){
    this.setData({
      searchContent:'',
      searchList:[],
    });
  },

  //清除历史记录
  deleteSearchHistory(){
    wx.showModal({
      content:'确认删除吗?',
      success:(res)=>{
        if(res.confirm){
          this.setData({
            historyList:[]
          });
        }
        wx.removeStorageSync('searchHistory')
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getInitData();
    //获取搜索的历史记录
    this.getSearchHistory();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})