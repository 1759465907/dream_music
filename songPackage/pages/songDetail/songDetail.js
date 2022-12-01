import requestOwn from '../../../utils/request';
import PubSub from 'pubsub-js';
import moment from 'moment';

const appInstance = getApp(); //获得全局实例数据
// pages/songDetail/songDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, //是否播放
    song: {}, //歌曲信息
    musicId: 0, //歌曲Id
    currentTime:'00:00',//实时时间
    durationTime:'00:00' //总时长
  },

  //设置音乐的播放与暂停
  handleMusicPlay() {
    let {
      isPlay,
      musicId
    } = this.data;
    this.controlMusic(!isPlay, musicId);
  },

  //获取单个歌曲信息详情
  async getSingleMusic(songId) {
    let single = await requestOwn('/song/detail', {
      ids: songId
    });
    
    //利用moment插件格式化时间
    let durationTime=moment(single.songs[0].dt).format('mm:ss');


    this.setData({
      song: single.songs[0],
      musicId: songId,
      durationTime,
      currentWidth:0
    });
  },

  //音乐播放
  async controlMusic(isPlay, musicId) {
    //定义音乐播放对象
    if (isPlay) {      
      if (musicId != this.data.musicId || this.musicLinkData==undefined ) {
        
        this.musicLinkData = await requestOwn('/song/url', {
          id: musicId
        });
      }      
      // //设置播放
      let musicLink = this.musicLinkData.data[0].url;
      this.backgroundAudioManager.src = musicLink;
      this.backgroundAudioManager.title = this.data.song.name;
    } else {
      this.backgroundAudioManager.pause();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取播放音乐的信息
    this.getSingleMusic(options.id);

    // 创建控制音乐播器实例
    this.backgroundAudioManager = wx.getBackgroundAudioManager();

    //判断是否换歌曲了
    if (options.id !== appInstance.musicId) {
      this.controlMusic(false, options.id);
    }

    //判断是否有音乐在播放
    if (appInstance.isPlay && appInstance.musicId) {
      this.setData({
        isPlay: true
      });
    }

    //绑定播放事件
    this.backgroundAudioManager.onPlay(() => {
      this.changePlayState(true);
      appInstance.musicId = options.id;
    });

    //绑定暂停事件
    this.backgroundAudioManager.onPause(() => {
      this.changePlayState(false);
    });

    //绑定停止事件
    this.backgroundAudioManager.onStop(() => {
      this.changePlayState(false);
    });

    //绑定音乐结束
    this.backgroundAudioManager.onEnded(() => {
      PubSub.publish('switchType','next');
      this.setData({
        currentWidth:0,
        currentTime:'00:00'
      });
    });


    //监听音乐实时播放事件
    this.backgroundAudioManager.onTimeUpdate(()=>{
      console.log(this.backgroundAudioManager.currentTime);
      let currentTime=moment(this.backgroundAudioManager.currentTime* 1000).format('mm:ss');
      let currentWidth=(this.backgroundAudioManager.currentTime/this.backgroundAudioManager.duration)*450;
      this.setData({
        currentTime,
        currentWidth,
      });
    });

  },

  //更改音乐状态
  changePlayState(isPlay) {
    this.setData({
      isPlay: isPlay
    });
    appInstance.isPlay = isPlay;
  },


  //切换歌曲
  handleSwitch(event) {
    let switchType = event.currentTarget.id;    
    PubSub.subscribe("musicId", (p1, p2) => {      
      //获取播放音乐的信息
      this.getSingleMusic(p2);
      this.controlMusic(true, p2);

      //解除
      PubSub.unsubscribe('musicId');
    })
    PubSub.publish('switchType', switchType);
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