import requestOwn from '../../../utils/request'
import PubSub from 'pubsub-js';
// pages/recommendSong/recommendSong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day:'',
    month:'',
    recommendList:{},
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  //判断用户是否登录
  verifyUserState(){
    let userInfo=wx.getStorageSync('userInfo');
    if(!userInfo){
      wx.showToast({
        title: '请先登录',
        icon:'none',
        success:()=>{
          wx.reLaunch({
            url: '/pages/login/login',
          })
        }
      })
    }    
  },

  //初始化时间
  initDate(){  
    this.setData({
      day:new Date().getDate(),
      month:new Date().getMonth()+1
    });
  },
  
  //跳转详情页
  toSongDetail(event){
    let songId = event.currentTarget.dataset.song.id;
    this.setData({
      index:event.currentTarget.dataset.index
    });
    wx.navigateTo({
      url: '/songPackage/pages/songDetail/songDetail?id='+ JSON.stringify(songId),
    });
  },

  //获取详细列表 
  async getrecommendSongList(){
    let remoteResult =await requestOwn('/recommend/songs');    
    this.setData({
      recommendList:remoteResult.data.dailySongs
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //查看是否登录，如果没有登录则跳转到login页面
    this.verifyUserState()
    //初始化时间
    this.initDate();
    //获取信息
    this.getrecommendSongList();

    //pubsub订阅
    PubSub.subscribe('switchType',(p1,p2)=>{      
      let {index,recommendList} =this.data;
      switch(p2){
        case "pre":
          index--;
        break;
        case "next":
          index++;
          break;
      }
      //判断歌曲数组是否会越界
      if (index < 0) {
        index = recommendList.length - 1;
      }
      if (index > recommendList.length - 1) {
        index = 0;
      }

      this.setData({
        index
      });
      let musicId = recommendList[index].id;
      // 将musicId回传给songDetail页面
      PubSub.publish('musicId', musicId);      
    });
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