// pages/info/pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeTitle: "关于2019年国庆节校车停运的通知",
    noticeContent: ["各位师生：", "", "根据学校办公室《关于2019年国庆节放假的通知》，学校校车运行相应调整如下：9月29日（星期日）、10月12日（星期六）上班，执行工作日时刻表。10月1日（星期二）至10月7日（星期一）放假调休，校车停运七天。10月8日（星期二）起所有校车回复正常运行。", "请师生们相互转告。", "特此通知。"],
    noticeSigniture: "总务处",
    noticeDate: "2019年9月24日"
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
          noticeTitle: res.result.data[0].title,
          noticeContent: res.result.data[0].content.join("<br>"),
          noticeSigniture: res.result.data[0].signiture,
          noticeDate: res.result.data[0].date
        }
        this.setData(data);
      },
      complete: () => {
        wx.hideToast();
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

  }
})