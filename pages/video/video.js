import requestOwn from '../../utils/request'
import user from '../../utils/user'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList:[],
    navId:0,
    videoList:[],    
    videoId:0,
    videoUpdateTime:[],//记录视频播放时长
    isTriggered:false
  },

  //获取视频标签列表
  async getVideoTypeList(takeCount=15){
    let videoResult = await  requestOwn('/video/group/list');
    if(videoResult.code===200){
      let videoGroupList=videoResult.data.splice(0,takeCount);
      this.setData({
        videoGroupList, 
        navId:videoGroupList[0].id        
      });      
      this.getVideoList(this.data.navId);
    }    
  },

  //视频播放
  handlePlay(event){
    let id = event.currentTarget.id;        
    this.videoContext = wx.createVideoContext(id);

    let {videoUpdateTime}=this.data;
    let videoItem=videoUpdateTime.find(item=>item.vid===id);
    if(videoItem){
      this.videoContext.seek(videoItem.currentTime);
    }
    this.setData({
      videoId:id
    })
    this.videoContext.play();
  },

  //获取视频信息
  async getVideoList(id){
    if(!id) return;    
    let videoData = await requestOwn('/video/group',{id:id});        
    this.setData({      
      videoList:videoData.datas,      
    });
    wx.hideLoading();    
  },

  //却换标签
  changeNav(event){      
    let navId = Number(event.currentTarget.id);
    wx.showLoading({
      title: '加载中',
    });
    this.setData({
      navId:navId
    });
    this.getVideoList(navId)
  },

  //记录视频播放时长的方法
  handleTimeUpdate(event){    
    let videoTimeObj={vid:event.currentTarget.id,currentTime:event.detail.currentTime};
    let {videoUpdateTime}=this.data;
    let videoItem =videoUpdateTime.find(item=>item.vid===videoTimeObj.vid);
    if(videoItem){
      videoItem.currentTime=event.detail.currentTime;
    }else{
      videoUpdateTime.push(videoTimeObj);
    }    
    this.setData({
      videoUpdateTime
    });
  },

  //视频结束时触发
  handleEnded(event){
    let {videoUpdateTime}=this.data;
    videoUpdateTime.splice(videoUpdateTime.findIndex(item=>item.vid===event.currentTarget.id),1);
    this.setData({
      videoUpdateTime
    });
  },

  //下拉触顶
  handleRefresher(event){    
    this.getVideoList(event.currentTarget.id);
    this.setData({
      isTriggered:false
    });
  },

  //下拉触底
  async handleToLower(){
    console.log("自定义上拉触底");
    let newVideoList=await requestOwn('/mock/getVideoData');;
    let videoList=this.data.videoList;
    videoList.push(...newVideoList);
    this.setData({
      videoList
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {        
  //   wx.request({
  //     url:'http://localhost:3000/mock/getVideoData',
  //     success:function(res) {
  //           console.log(res)
  //     }
  //  })
  },

  //跳转搜索界面
  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {    
    this.getVideoTypeList(30);
    this.getVideoList(58100);
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
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(s) {
    return {
      title: '自定义转发标题',
      path: '/pages/video/video', 
      imageUrl:'/static/images/nvsheng.jpg'    
    }
  }
  
})