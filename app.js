//app.js
App({
  onLaunch: function () {

    // 登录
    wx.login({
      success: res => {
        this.getOpenId(res.code)
      }
    })
  },
  globalData: {
    openId: '',
  },
  getOpenId(code) {
    let _this = this;
    wx.request({
      url: '$you_api',
      data: {
        code: code,
        type: 'openid'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'GET',
      success: function (res) {
        let openId = res.data.data.openid;
        _this.globalData.openId = openId;
        _this.endLoding();
      },
      fail: function () {
        console.log("获取openid失败")
      }
    });
  }
})