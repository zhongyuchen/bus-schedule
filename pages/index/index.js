//index.js
//获取应用实例
const app = getApp()

//get local data
var timeTable = require("../../data/timetable.js").data;
var location = require("../../data/location.js").data;
var pyName = require("../../data/pyname.js").data;

//build the page
Page({
  data: {
    // userinfo
    userInfo: {
      nickName: "未登录",
      avatarUrl: "https://raw.githubusercontent.com/czhongyu/busschedule-wx/master/files/xiaohui.jpg"
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    route: "？/？",
    // picker
    multiArray: [['工作日', '非工作日'], ['邯郸', '江湾', '枫林', '张江', '上科大'], ['江湾', '枫林', '张江']],
    multiIndex: [0, 0, 0],
    // timetable
    timeList: timeTable["weekday"]["handan"]["jiangwan"],
    currentLoca: {
      "left": location["邯郸"]["江湾"],
      "right": location["江湾"]["邯郸"]
    }
  },
  //事件处理函数
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    // data dic for update
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,
      timeList: this.data.timeList,
      currentLoca: this.data.currentLoca
    };

    // update multiIndex
    data.multiIndex[e.detail.column] = e.detail.value;

    // update multiArray
    switch (e.detail.column) {
      case 0:
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
            data.multiArray[2] = ['邯郸', '张江'];
            break;
          case 3:
            data.multiArray[2] = ['邯郸', '枫林'];
            break;
          case 4:
            data.multiArray[2] = ['张江'];
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }

    // update timelist
    data.timeList = timeTable[pyName[data.multiArray[0][data.multiIndex[0]]]][pyName[data.multiArray[1][data.multiIndex[1]]]][pyName[data.multiArray[2][data.multiIndex[2]]]];

    // update currentLoca
    data.currentLoca = {
      "left": location[data.multiArray[1][data.multiIndex[1]]][data.multiArray[2][data.multiIndex[2]]],
      "right": location[data.multiArray[2][data.multiIndex[2]]][data.multiArray[1][data.multiIndex[1]]]
    };

    // update data
    this.setData(data);
  },
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     }
    //   }
    // })

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
