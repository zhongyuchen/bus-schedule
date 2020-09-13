//index.js
//获取应用实例
const app = getApp()

//get local data
var timeTable = require("../../data/timetable.js").data;
var location = require("../../data/location.js").data;
var pyName = require("../../data/pyname.js").data;

//util
var util = require("../../utils/util.js");

//build the page
Page({
  data: {
    // userinfo
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // user route
    departure: "？",
    departTime: "？",
    destination: "？",
    destinTime: "？",
    pickerDepart: "邯郸",
    pickerDestin: "江湾",
    week: "？",
    pickerWeek: "工作日",
    // picker
    multiArray: [['工作日', '非工作日'], ['邯郸', '江湾', '枫林', '张江'], ['江湾', '枫林', '张江']],
    multiIndex: [0, 0, 0],
    // timetable
    timeList: timeTable["weekday"]["handan"]["jiangwan"],
    currentLoca: {
      "left": location["邯郸"]["江湾"],
      "right": location["江湾"]["邯郸"]
    }
  },
  //事件处理函数
  // bindGetUserInfo(e) {
  //   console.log(e.detail.userInfo)
  // },
  bindMultiPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)

    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,

      timeList: this.data.timeList,
      currentLoca: this.data.currentLoca,
      pickerDepart: this.data.pickerDepart,
      pickerDestin: this.data.pickerDestin,
      pickerWeek: this.data.pickerWeek,

      departTime: "",
      destinTime: ""
    };

    // update picker display
    data.pickerWeek = data.multiArray[0][data.multiIndex[0]];
    data.pickerDepart = data.multiArray[1][data.multiIndex[1]];
    data.pickerDestin = data.multiArray[2][data.multiIndex[2]];

    // update timelist
    data.timeList = timeTable[pyName[data.multiArray[0][data.multiIndex[0]]]][pyName[data.multiArray[1][data.multiIndex[1]]]][pyName[data.multiArray[2][data.multiIndex[2]]]];

    let result = util.update_next(data.timeList);
    data.departTime = result.departTime;
    data.destinTime = result.destinTime;

    // update currentLoca
    data.currentLoca = {
      "left": location[data.multiArray[1][data.multiIndex[1]]][data.multiArray[2][data.multiIndex[2]]],
      "right": location[data.multiArray[2][data.multiIndex[2]]][data.multiArray[1][data.multiIndex[1]]]
    };

    data.multiIndex = e.detail.value;

    this.setData(data);
  },
  bindMultiPickerColumnChange: function (e) {
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    // data dic for update
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
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
        break;
    }

    // update data
    this.setData(data);
  },
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    wx.cloud.init()

    wx.getNetworkType({
      success(res) {
        let networkType = res.subtype || res.networkType;
        if (networkType == "none"){
          wx.showToast({
            title: '无网络连接',
            icon: 'loading',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 2000
          })
        }
      }
    })

    // login
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

    // basic update
    let week = util.getDayofweek();
    let pickerWeek;
    let multiIndex = this.data.multiIndex;
    if (week == "周六" || week == "周日") {
      pickerWeek = "非工作日";
      multiIndex[0] = 1;
    } else {
      pickerWeek = "工作日";
      multiIndex[0] = 0;
    }
    let timeList = timeTable[pyName[pickerWeek]][pyName[this.data.pickerDepart]][pyName[this.data.pickerDestin]];
    let result = util.update_next(timeList);
    this.setData({
      week: week,
      pickerWeek: pickerWeek,
      timeList: timeList,
      departTime: result.departTime,
      destinTime: result.destinTime,
      multiIndex: multiIndex
    })

    wx.onNetworkStatusChange(function (res) {
      if (res.isConnected === false) {
        wx.showToast({
          title: '无网络连接',
          icon: 'loading',
          duration: 2000
        })
      } else {
        wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 2000
        })

        // wx.cloud.init()
        wx.cloud.callFunction({
          name: 'get_route'
        }).then(myres => {
          // console.log(res)
          if (myres.result.data[0]) {
            // user route available
            // load user timetable
            let mythis = this;
            let data = util.get_route_data(mythis, myres)

            this.setData(data);
          }

        })
      }
    })

    // load user route
    // wx.cloud.init()
    wx.cloud.callFunction({
      name: 'get_route'
    }).then(res => {
      // console.log(res)
      if (res.result.data[0]) {
        // user route available
        // load user timetable
        let mythis = this;
        let data = util.get_route_data(mythis, res)

        this.setData(data);
      }

    })

    // wx.hideToast()
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   if (e.detail.userInfo) {
  //     app.globalData.userInfo = e.detail.userInfo
  //     this.setData({
  //       userInfo: e.detail.userInfo,
  //       hasUserInfo: true
  //     })
  //   }
  // },
  store_route: function(e){
    let newDepart = this.data.multiArray[1][this.data.multiIndex[1]]
    let newDestin = this.data.multiArray[2][this.data.multiIndex[2]]

    var myThis = this;

    wx.showModal({
      title: '提示',
      content: '设置常用路线为：' + newDepart + "/" + newDestin + "?",
      success(res) {
          if (res.confirm) {
            wx.getNetworkType({
              success(myres) {
                let networkType = myres.subtype || myres.networkType;
                if (networkType == "none") {
                  wx.showToast({
                    title: '无网络连接',
                    icon: 'loading',
                    duration: 2000
                  })
                } else {
                  // set route
                  // wx.cloud.init()
                  wx.cloud.callFunction({
                    name: 'store_route',
                    data: {
                      departure: newDepart,
                      destination: newDestin
                    }
                  }).then(datares => {
                    // result
                  })

                  myThis.setData({
                    departure: newDepart,
                    destination: newDestin
                  })

                  wx.showToast({
                    title: '设置成功',
                    icon: 'success',
                    duration: 2000
                  })
                }
            }})

            }
        }
  
      }
    )

    this.setData(myThis);
  }
})
