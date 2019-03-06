//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    multiArray: [['工作日', '非工作日'], ['邯郸', '江湾', '枫林', '张江', '上科大'], ['江湾', '枫林', '张江']],
    multiIndex: [0, 0, 0],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    nameId = {
      "邯郸": 0,
      "江湾": 1,
      "枫林": 2,
      "张江": 3,
      "上科大": 4
    }
    namePlace = {
      "邯郸": "h",
      "江湾": "j",
      "枫林": "f",
      "张江": "z",
      "上科大": "s"
    }
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        data.multiArray[1] = ['邯郸', '江湾', '枫林', '张江', '上科大'];
        data.multiArray[2] = ['江湾', '枫林', '张江'];
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['江湾', '枫林', '张江'];
                break;
              case 1:
                data.multiArray[2] = ['邯郸'];
                break;
              case 2:
                data.multiArray[2] = ['邯郸', '张江'];
                break;
              case 3:
                data.multiArray[2] = ['邯郸', '枫林'];
                break;
              case 4:
                data.multiArray[2] = ['张江'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['江湾', '枫林', '张江'];
                break;
              case 1:
                data.multiArray[2] = ['邯郸'];
                break;
              case 2:
                data.multiArray[2] = ['邯郸'];
                break;
              case 3:
                data.multiArray[2] = ['邯郸'];
                break;
              case 4:
                data.multiArray[2] = ['张江'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);

    // table data
    timetable = {
      "left": namePlace[data.multiArray[1][data.multiIndex[1]]],
      "right": namePlace[data.multiArray[2][data.multiIndex[2]]],
      "leftTime": [],
      "rightTime": []
    };
    this.setData(timetable);
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
