// pages/personal/personal.js
let startY=0; //起始坐标
let moveY=0;//手指移动的坐标
let moveDistance=0;//手指移动的距离

import requestOwn from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform:"translateY(0)",
    coverTransition:"",
    userInfo:{},
    recentPlayList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  toLogin(){
    wx.reLaunch({
      url:'/pages/login/login'      
    })
  },

  handleTouchStart(event){
    this.setData({
      coverTransition:""
    });
    startY=event.touches[0].clientY;
  },

  handleTouchMove(event){
    moveY=event.touches[0].clientY;
    moveDistance=moveY-startY;    
    if(moveDistance>0 && moveDistance<80){
      this.setData({
        coverTransform:`translateY(${moveDistance}rpx)`
      });
    }
  },

  handleTouchEnd(event){
    this.setData({
      coverTransform:"translateY(0)",
      coverTransition:"transform 1s linear"
    });
  },
  async getUserRecentPlayList(userId){ 
    let userRecord=await requestOwn('/user/record',{uid:userId,type:0});
    //splice(0,10) 截取10条数据
    let index=1;
    //为数组加唯一有索引 
  
    let recentPlayList = userRecord.allData.slice(0,10).map(item=>{
      item.id=index++;
      return item;
    });
    this.setData({
      recentPlayList:recentPlayList
    });        
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    let userInfoStr = wx.getStorageSync('userInfo');
    if(userInfoStr){
     let userInfo = JSON.parse(userInfoStr);
     this.setData({
       userInfo:userInfo
     });           
     this.getUserRecentPlayList(userInfo.userId);
    }
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