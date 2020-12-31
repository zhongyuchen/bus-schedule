//index.js
//获取应用实例
const app = getApp()

//get local data
var timeTable = require("../../static/js/timetable.js").data;
var location = require("../../static/js/location.js").data;
var translate = require("../../static/js/translate.js").data;

//util
var util = require("../../static/js/util.js");

//build the page
Page({
  data: {
    // userinfo
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // user route
    departure: "?",
    departTime: "?",
    destination: "?",
    destinTime: "?",
    pickerDepart: "邯郸",
    pickerDestin: "江湾",
    week: "?",
    weekType: "?",
    pickerWeek: "工作日",
    // picker
    multiArray: [['工作日', '非工作日'], ['邯郸', '江湾', '枫林', '张江'], ['江湾', '枫林', '张江']],
    multiIndex: [0, 0, 0],
    // timetable
    timeList: timeTable["weekday"]["handan"]["jiangwan"],
    currentLoca: {
      "left": location["邯郸"]["江湾"],
      "right": location["江湾"]["邯郸"]
    },
    period: {
      name: "?",
      period: "semester",
      weekday: "weekday",
      weekend: "weekend"
    },
    networkType: "无网络连接"
  },
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
    data.timeList = timeTable[translate[data.multiArray[0][data.multiIndex[0]]]][translate[data.multiArray[1][data.multiIndex[1]]]][translate[data.multiArray[2][data.multiIndex[2]]]];

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
  networkStatus: function() {
    let networkThis = this;
    wx.getNetworkType({
      success(res) {
        let networkType = res.subtype || res.networkType;
        if (networkType == "none"){
          wx.showToast({
            title: '无网络连接',
            icon: 'loading',
            duration: 2000
          })
          networkThis.setData({
            networkType: "无网络连接"
          })
        } else {
          wx.showToast({
            title: '加载中',
            icon: 'loading'
          })
          networkThis.setData({
            networkType: ""
          })
        }
      }
    })
  },
  userInfo: function() {
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
  },
  networkStatusChange: function() {
    let networkChangeThis = this;
    wx.onNetworkStatusChange(function (status) {
      if (status.isConnected === false) {
        wx.showToast({
          title: '无网络连接',
          icon: 'loading',
          duration: 2000
        })
        networkChangeThis.setData({
          networkType: "无网络连接"
        })
      } else {
        wx.showToast({
          title: '加载中',
          icon: 'loading'
        })
        networkChangeThis.setData({
          networkType: ""
        })
        networkChangeThis.loadPeriod();
      }
    })
  },
  get_route_data: function(departure, destination) {
    let data = {
      week: this.data.week,
      departure: departure,
      destination: destination,
  
      pickerWeek: this.data.pickerWeek,
      pickerDepart: departure,
      pickerDestin: destination,
  
      timeList: [],
      currentLoca: {},
  
      departTime: "",
      destinTime: "",
  
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
  
    data.multiIndex[1] = util.place2number(data.departure);
    let setdepartResult = util.setDepart(data.multiIndex, data.multiArray, data.destination);
    data.multiIndex = setdepartResult.multiIndex;
    data.multiArray = setdepartResult.multiArray;
  
    // update timelist
    data.timeList = timeTable[translate[data.pickerWeek]][translate[data.pickerDepart]][translate[data.pickerDestin]];
  
    let result = util.update_next(data.timeList);
    data.departTime = result.departTime;
    data.destinTime = result.destinTime;
  
    // update currentLoca
    data.currentLoca = {
      "left": location[data.departure][data.destination],
      "right": location[data.destination][data.departure]
    };
  
    this.setData(data);
  },
  userRoute: function() {
    // load user route
    wx.cloud.callFunction({
      name: 'get_route',
      success: res => {
        let departure = '邯郸';
        let destination = '江湾';
        if ('data' in res.result && res.result.data != null && res.result.data.length > 0) {
          departure = res.result.data[0].departure;
          destination = res.result.data[0].destination;
        }
        let data = this.get_route_data(departure, destination);
        this.setData(data);
      },
      fail: err => {
        let departure = '邯郸';
        let destination = '江湾';
        let data = this.get_route_data(departure, destination);
        this.setData(data);
      },
      complete: () => {
        wx.hideToast();
      }
    })
  },
  getWeekType: function() {
    // get week & weekType
    // 周几
    let week = util.getDayofweek();
    // 工作日/非工作日
    let weekType;
    if (week == "周六" || week == "周日") {
      weekType = "非工作日";
    } else {
      weekType = "工作日";
    }
    // update weekType based on period
    weekType = this.data.period[weekType];

    return {
      week: week,
      weekType: weekType
    }
  },
  loadTimetable: function() {
    // get timetable
    wx.cloud.callFunction({
      name: 'get_timetable',
      data: {
        period: this.data.period.period
      },
      success: res => {
        // update global timeTable
        timeTable = res.result.data[0];
      },
      complete: () => {
        let week = this.getWeekType();
        // update picker weekType index
        let multiIndex = this.data.multiIndex;
        if (week.weekType == "非工作日") {
          multiIndex[0] = 1;
        }
        else {
          multiIndex[0] = 0;
        }

        // basic update
        let timeList = timeTable[translate[week.weekType]][translate[this.data.pickerDepart]][translate[this.data.pickerDestin]];
        let result = util.update_next(timeList);
        this.setData({
          week: week.week,
          weekType: week.weekType,
          pickerWeek: week.weekType,
          timeList: timeList,
          departTime: result.departTime,
          destinTime: result.destinTime,
          multiIndex: multiIndex
        })
        this.userRoute();
      }
    })
  },
  loadPeriod: function() { 
    // get period
    wx.cloud.callFunction({
      name: 'get_period',
      success: res => {
        this.setData({
          period: {
            name: res.result.data[0].name,
            period: res.result.data[0].period,
            "工作日": translate[res.result.data[0].weekday],
            "非工作日": translate[res.result.data[0].weekend]
          }
        })
      },
      complete: () => {
        this.loadTimetable();
      }
    })
  },
  onLoad: function () {
    wx.cloud.init()

    this.networkStatus();
    this.userInfo();
    this.networkStatusChange();
    this.loadPeriod();
  },
  store_route: function(e){
    let newDepart = this.data.multiArray[1][this.data.multiIndex[1]]
    let newDestin = this.data.multiArray[2][this.data.multiIndex[2]]

    let storeRouteThis = this;

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
                wx.cloud.callFunction({
                  name: 'store_route',
                  data: {
                    departure: newDepart,
                    destination: newDestin
                  }
                }).then(datares => {
                  // result
                })

                storeRouteThis.setData({
                  departure: newDepart,
                  destination: newDestin
                })

                wx.showToast({
                  title: '设置成功',
                  icon: 'success',
                  duration: 2000
                })
              }
            }
          })
        }
      }
    })
  }
})
