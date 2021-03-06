// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeTitle: "校车运行调整安排"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    wx.cloud.init()
    wx.cloud.callFunction({
      name: 'get_notice',
      success: res => {
        let data = {
          noticeTitle: res.result.data[0].title
        }
        this.setData(data);
      },
      complete: () => {
        wx.hideToast();
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad(); //重新加载onLoad()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '便捷的复旦校车查询工具',
      path: 'pages/info/info'
    }
  }
})