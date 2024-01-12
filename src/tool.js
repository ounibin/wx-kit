// 获取微信 openid
export function getOpenId (wxAppId, wxAppSecret) {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        const code = res.code
        wx.request({
          url: `https://api.weixin.qq.com/sns/jscode2session?appid=${wxAppId}&secret=${wxAppSecret}&js_code=${code}&grant_type=authorization_code`,
          success: ({ data }) => {
            const openid = data.openid
            resolve(openid)
          },
          fail: err => {
            reject(err)
          }
        })
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
// 检查应用是否有可用更新的函数
export function checkUpdate () {
  const updateManager = wx.getUpdateManager()

  updateManager.onCheckForUpdate(function (res) {
    console.log('请求完新版本信息的回调', res.hasUpdate)
  })

  updateManager.onUpdateReady(function () {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        }
      }
    })
  })

  updateManager.onUpdateFailed(function () {
    // 新版本下载失败
  })
}
