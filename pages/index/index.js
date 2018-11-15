
//获取应用实例
const app = getApp()

Page({
  data: {
    loading: true
  },
  onLoad: function () {
    app.endLoding = () => {
      this.setData({
        loading: false
      })
    }
  }, formSubmit(e) {
    this.requestNotification(e, 0)
  },
  imageSubmit(e) {
    this.requestNotification(e, 1)
  },
  requestNotification(e, templateType) {
    const formId = e.detail.formId;
    const _this = this
    wx.request({
      url: '$you_api',
      data: {
        type: 'pushnews',
        openid: app.globalData.openId,
        formid: formId,
        templateType
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'GET',
      success: function (res) {
        wx.showToast({
          title: '请查看微信消息',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      },
      fail: function () {
        wx.showToast({
          title: '发送失败',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      }
    });
  }
})
