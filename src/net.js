function request (options, showLoading = false) {
  return new Promise((resolve, reject) => {
    // 如果需要显示加载提示，则显示
    showLoading && wx.showLoading({
      title: '请求中...'
    })
    // 发起请求
    wx.request({
      timeout: 15000,
      success (res) {
        resolve(res.data, res.statusCode)
      },
      fail (err) {
        reject(err)
      },
      complete () {
        showLoading && wx.hideLoading()
      },
      ...options
    })
  })
}

function get (url, params, showLoading = false) {
  return request({
    method: 'GET',
    url,
    data: params
  }, showLoading)
}

function post (url, data, showLoading = false) {
  return request({
    method: 'POST',
    url,
    data
  }, showLoading)
}

export default {
  request,
  get,
  post
}
