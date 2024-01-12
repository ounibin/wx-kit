import { net, common } from '../../lib/wx-kit'

Component({
  data: {
    openId: getApp().globalData.openId
  },
  methods: {
    getGlobalData () {
      const globalData = getApp().globalData
      console.log('wk-log: globalData===', globalData)
    },
    getDeviceId () {
      wx.getSystemInfo({
        success: function (res) {
          console.log(res)
          console.log('wk-log: 设备信息===', `${res.model}_${res.system}`)
        }
      })
    },

    // 登录
    getOpenId () {
      common.getOpenId('wx23516bd221490d76', '24598cb1e0b8ed7fa3bce2cb792dbb83').then((res) => {
        console.log('wk-log: openid===', res)
        this.setData({
          openId: res
        })
      })
    }
  }
})
