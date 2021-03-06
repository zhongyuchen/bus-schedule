// pages/info/pages/usage/usage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    htmlSnipUsage:
      `<div class="div_class">
        <ul>
          <li>网络状态：用户昵称右侧提示网络连接状态，请在有网络连接的情况下使用，否则将无法加载时刻表、加载/更改常用路线</li>
          <li>常用路线：<b>出发/到达</b>，通过“设为常用”按钮把当前路线设为常用路线</li>
          <li>当前日期：<b>周几/是否工作日/时间段</b>，自动选择是否工作日，并加载常用路线对应的时刻表<li>
          <li>选择器：查看其他时间或路线的时刻表</li>
          <li>时刻表：包括<b>出发/到达地点</b>、<b>下一班次发车时间</b>、<b>发车时间列表</b></li>
          <li>校车调整通知：了解最新校车运行调整安排</li>
          <li>反馈与投诉：功能异常、产品建议、违规举报</li>
          <li>联系客服：直接咨询客服人员</li>
        </ul>
      </div>
      `
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    return {
      title: '便捷的复旦校车查询工具',
      path: 'pages/info/pages/usage/usage'
    }
  }
})