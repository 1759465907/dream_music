
import requestOwn from '../../utils/request'

// pages/logo/logo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  handleInput(event){
    // let type=event.currentTarget.id;
    let type=event.currentTarget.dataset.type; //第二种获取方式
    this.setData({
      [type]:event.detail.value
    });
  },

  async login(){
    // 验证用户数据
    let{phone,password}=this.data;
    if(!phone){
      wx.showToast({
        title:'手机号码不能为空',
        icon:'error'
      })
      return;
    }
    let phoneReg=/^1(3|4|5|6|7|8|9)\d{9}$/;
    if(!phoneReg.test(phone)){      
      wx.showToast({
        title:'手机格式错误',
        icon:'error'
      })
      return;
    }
    if(!password){
      wx.showToast({
        title:'密码不能维空',
        icon:'error'
      })
      return;
    }

     let result = await requestOwn('/login/cellphone', {phone, password,isLogin:true})

     if(result.code===200){
       wx.showToast({
         title:'登陆成功'
       });

       wx.setStorageSync('userInfo',JSON.stringify(result.profile));
       wx.switchTab({
        url: '/pages/personal/personal'
      })
     }else if(result.code===400){
        wx.showToast({
          title:'手机号错误',
          icon:'none'
        });
     }else if(result.code===502){
       wx.showToast({
         title:'密码错误',
         icon:'none'
       });
     }else{
       wx.showToast({
         title:'手机号错误',
         icon:'none'
       })
     }
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