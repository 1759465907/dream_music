import config from './config'

// 封装请求功能函数
export default (url,data={},method='GET')=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.host + url,
      data,
      method,
      header:{
        cookie:wx.getStorageSync('cookies')?wx.getStorageSync('cookies').find(item=>item.indexOf('MUSIC_U')!==-1):''
      },
      success:(res)=>{
        resolve(res.data);        
        if(data.isLogin){          
          // wx.setStorageSync('cookies',res.cookies)
          wx.setStorage({
            key:'cookies',
            data:res.cookies
          })
        }
      },
      fail:(err)=>{
        reject('请求失败',err)
      }
    })
  });


}