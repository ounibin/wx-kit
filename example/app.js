// app.js
import { net } from './lib/wx-kit'
App({
  onLaunch () {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log('wx.login res===', res)
    //   }
    // })

    wx.showLoading({
      title: '加载中...',
      mask: false,
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    })
  },
  globalData: {
    userInfo: null
  }
})
