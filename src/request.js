/**
 * 发起网络请求
 * @param {Object} options - 请求参数对象
 * @param {string} options.method - 请求方法，默认为GET
 * @param {string} options.url - 请求地址
 * @param {Object} options.data - 请求数据
 * @param {boolean} showLoading - 是否显示加载提示，默认为false
 * @returns {Promise} 返回一个Promise对象，resolve时返回请求结果，reject时返回错误信息
 */
function request ({
  method = 'GET',
  url,
  data
}, showLoading = false) {
  return new Promise((resolve, reject) => {
    showLoading && wx.showLoading({
      title: '加载中...'
    })
    wx.request({
      url,
      data,
      method,
      success (res) {
        resolve(res.data)
      },
      fail (err) {
        reject(err)
      },
      complete () {
        showLoading && wx.hideLoading()
      }
    })
  })
}

function get (url, data, showLoading = false) {
  return request({
    method: 'GET',
    url,
    data
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
  get,
  post
}
