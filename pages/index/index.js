import requestOwn from '../../utils/request'

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true, //是否显示面板指示点
    vertical: false, //滑动方向是否为纵向
    autoplay: false, //是否自动切换
    interval: 2000, //自动切换时间间隔
    duration: 500, //	滑动动画时长
    bannerList: {}, //轮播集合
    recommendList: {}, //推荐歌单
    rankingList: [], //排行榜数据
  },

  toRecommendSong(){
    wx.navigateTo({
      url: '/songPackage/pages/recommendSong/recommendSong'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let result = await requestOwn('/banner', {
      type: 2
    });
    // let recommendList=await requestOwn('/personalized?limit=10');
    let recommendList = await requestOwn('/personalized', {
      limit: 20
    });

    this.setData({
      bannerList: result.banners,
      recommendList: recommendList.result      
    });
    let index = 0;
    let rankingList = [];
    while (index <= 5) {
      let data = await requestOwn('/toplist', {
        idx: index++
      });      
      let tempList={name:data.artistToplist.name,tracks:data.list.slice(0,3)};
      rankingList.push(tempList);
      this.setData({
        rankingList:rankingList
      });
    };
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