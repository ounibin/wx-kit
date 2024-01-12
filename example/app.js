// app.js
import { net, common } from './lib/wx-kit'
App({
  onLaunch () {
    common.getOpenId('wx23516bd221490d76', '24598cb1e0b8ed7fa3bce2cb792dbb83').then((res) => {
      this.globalData.openId = res
    })
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null,
    openId: ''
  }
})
