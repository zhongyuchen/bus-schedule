// pages/info/pages/usage/usage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    htmlSnipFunction:
      `<div class="div_class">
<ul>
<li>常用路线以及当天日期在用户昵称下显示，格式为<b>出发地点/当天日期/目的地点，通过<b>设为常用</b>按钮可以把当前路线设为常用路线</b></li>
<li><b>自动选择工作日/非工作日，并加载常用路线对应的时刻表</b></li>
<li>通过<b>选择器</b>可以查看其他时间或路线的时刻表</li>
<li>时刻表中粗体字的是<b>发车/下车地点</b>，红色字的是<b>下一班次发车时间和数量</b></li>
</ul>
</div>
`,
    htmlSnipAttention:
      `<div class="div_class">
<ul>
<li>请在<b>有网络连接</b>的情况下使用，否则将无法自动加载/更改常用路线</li>
<li>请留意<b>校车调整通知</b>页面，了解最新校车运行信息</li>
</ul>
</div>
`,
    htmlSnipShare:
      `<div class="div_class">
<ul>
<li>如果你喜欢的话可以分享给其他人哟</li>
<li>项目代码在GitHub上开源，请搜索<b>czhongyu/busschedule-wx</b></li>
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

  }
})