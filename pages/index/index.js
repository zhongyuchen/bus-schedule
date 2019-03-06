//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    multiArray: [['工作日', '非工作日'], ['邯郸', '江湾', '枫林', '张江', '上科大'], ['江湾', '枫林', '张江']],
    multiIndex: [0, 0, 0],
    timeTable: {
      "weekday": {
        "handan": {
          "jiangwan": [
            {
              "left": "",
              "right": "07:10 (1)"
            },
            {
              "left": "",
              "right": "07:20 (1)"
            },
            {
              "left": "07:30 (1)",
              "right": "07:30 (1)"
            },
            {
              "left": "07:40 (1)",
              "right": "07:40 (1)"
            },
            {
              "left": "",
              "right": "07:50 (1)"
            },
            {
              "left": "08:00 (1)",
              "right": "08:00 (1)"
            },
            {
              "left": "",
              "right": "08:15 (1)"
            },
            {
              "left": "08:30 (2)",
              "right": "08:30 (1)"
            },
            {
              "left": "",
              "right": "08:45 (1)"
            },
            {
              "left": "09:00 (1)",
              "right": "09:00 (2)"
            },
            {
              "left": "",
              "right": "09:15 (1)"
            },
            {
              "left": "09:30 (1)",
              "right": "09:30 (1)"
            },
            {
              "left": "10:00 (1)",
              "right": "10:00 (1)"
            },
            {
              "left": "10:20 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "10:30 (1)"
            },
            {
              "left": "11:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "11:10 (1)"
            },
            {
              "left": "11:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "11:40 (1)"
            },
            {
              "left": "11:45 (1)",
              "right": ""
            },
            {
              "left": "12:00 (1)",
              "right": "12:00 (1)"
            },
            {
              "left": "",
              "right": "12:15 (1)"
            },
            {
              "left": "12:30 (1)",
              "right": "12:30 (1)"
            },
            {
              "left": "",
              "right": "12:40 (1)"
            },
            {
              "left": "13:00 (1)",
              "right": "13:00 (1)"
            },
            {
              "left": "13:30 (1)",
              "right": "13:30 (1)"
            },
            {
              "left": "14:00 (1)",
              "right": "14:00 (1)"
            },
            {
              "left": "14:30 (1)",
              "right": ""
            },
            {
              "left": "15:00 (1)",
              "right": "15:00 (2)"
            },
            {
              "left": "",
              "right": "15:15 (1)"
            },
            {
              "left": "15:30 (1)",
              "right": "15:30 (1)"
            },
            {
              "left": "16:00 (1)",
              "right": "16:00 (1)"
            },
            {
              "left": "16:15 (1)",
              "right": ""
            },
            {
              "left": "16:20 (1)",
              "right": ""
            },
            {
              "left": "16:30 (1)",
              "right": "16:30 (1)"
            },
            {
              "left": "",
              "right": "16:55 (1)"
            },
            {
              "left": "17:00 (1)",
              "right": "17:00 (1)"
            },
            {
              "left": "",
              "right": "17:10 (1)"
            },
            {
              "left": "17:15 (1)",
              "right": ""
            },
            {
              "left": "17:25 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "17:30 (1)"
            },
            {
              "left": "17:35 (1)",
              "right": ""
            },
            {
              "left": "17:45 (1)",
              "right": ""
            },
            {
              "left": "18:00 (1)",
              "right": "18:00 (2)"
            },
            {
              "left": "18:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "19:00 (1)"
            },
            {
              "left": "20:00 (1)",
              "right": "20:00 (1)"
            },
            {
              "left": "20:20 (1)",
              "right": ""
            },
            {
              "left": "20:30 (1)",
              "right": "20:30 (1)"
            },
            {
              "left": "20:50 (1)",
              "right": ""
            },
            {
              "left": "21:00 (1)",
              "right": "21:00 (1)"
            },
            {
              "left": "21:20 (1)",
              "right": "21:20 (1)"
            },
            {
              "left": "21:40 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "21:45 (1)"
            },
            {
              "left": "22:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "22:10 (1)"
            },
            {
              "left": "22:15 (1)",
              "right": ""
            },
            {
              "left": "22:30 (1)",
              "right": ""
            }
          ],
          "fenglin": [
            {
              "left": "06:55 (1)",
              "right": ""
            },
            {
              "left": "07:10 (1)",
              "right": "07:10 (1)"
            },
            {
              "left": "",
              "right": "07:20 (1)"
            },
            {
              "left": "08:15 (1)",
              "right": "08:15 (1)"
            },
            {
              "left": "09:15 (1)",
              "right": "09:15 (1)"
            },
            {
              "left": "10:15 (1)",
              "right": ""
            },
            {
              "left": "11:00 (1)",
              "right": "11:00 (1)"
            },
            {
              "left": "",
              "right": "11:45 (1)"
            },
            {
              "left": "",
              "right": "12:15 (1)"
            },
            {
              "left": "12:30 (1)",
              "right": ""
            },
            {
              "left": "13:00 (1)",
              "right": "13:00 (1)"
            },
            {
              "left": "14:00 (1)",
              "right": "14:00 (1)"
            },
            {
              "left": "",
              "right": "14:30 (1)"
            },
            {
              "left": "15:30 (1)",
              "right": "15:30 (1)"
            },
            {
              "left": "16:00 (1)",
              "right": "16:00 (1)"
            },
            {
              "left": "16:55 (1)",
              "right": "16:55 (1)"
            },
            {
              "left": "17:10 (1)",
              "right": "17:10 (1)"
            },
            {
              "left": "",
              "right": "17:25 (1)"
            },
            {
              "left": "18:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "18:20 (1)"
            },
            {
              "left": "19:30 (1)",
              "right": ""
            },
            {
              "left": "20:20 (2)",
              "right": "20:20 (1)"
            },
            {
              "left": "",
              "right": "21:15 (1)"
            },
            {
              "left": "21:25 (2)",
              "right": ""
            },
            {
              "left": "",
              "right": "21:50 (1)"
            }
          ],
          "zhangjiang": [
            {
              "left": "07:10 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "07:15 (1)"
            },
            {
              "left": "07:40 (1)",
              "right": ""
            },
            {
              "left": "08:00 (1)",
              "right": "08:00 (1)"
            },
            {
              "left": "08:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "08:40 (1)"
            },
            {
              "left": "09:00 (1)",
              "right": "09:00 (1)"
            },
            {
              "left": "10:00 (1)",
              "right": "10:00 (1)"
            },
            {
              "left": "11:50 (1)",
              "right": "11:50 (2)"
            },
            {
              "left": "",
              "right": "12:15 (1)"
            },
            {
              "left": "12:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "12:40 (1)"
            },
            {
              "left": "12:45 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "14:15 (1)"
            },
            {
              "left": "14:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "15:20 (1)"
            },
            {
              "left": "15:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "16:00 (1)"
            },
            {
              "left": "",
              "right": "16:10 (1)"
            },
            {
              "left": "16:15 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "16:20 (1)"
            },
            {
              "left": "",
              "right": "16:40 (1)"
            },
            {
              "left": "",
              "right": "17:00 (1)"
            },
            {
              "left": "17:20 (2)",
              "right": "17:20 (1)"
            },
            {
              "left": "18:30 (1)",
              "right": "18:30 (1)"
            },
            {
              "left": "20:20 (3)",
              "right": ""
            },
            {
              "left": "20:30 (1)",
              "right": ""
            },
            {
              "left": "21:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "21:10 (1)"
            },
            {
              "left": "21:20 (2)",
              "right": ""
            }
          ]
        },
        "jiangwan": {
          "handan": [
            {
              "left": "07:10 (1)",
              "right": ""
            },
            {
              "left": "07:20 (1)",
              "right": ""
            },
            {
              "left": "07:30 (1)",
              "right": "07:30 (1)"
            },
            {
              "left": "07:40 (1)",
              "right": "07:40 (1)"
            },
            {
              "left": "07:50 (1)",
              "right": ""
            },
            {
              "left": "08:00 (1)",
              "right": "08:00 (1)"
            },
            {
              "left": "08:15 (1)",
              "right": ""
            },
            {
              "left": "08:30 (1)",
              "right": "08:30 (2)"
            },
            {
              "left": "08:45 (1)",
              "right": ""
            },
            {
              "left": "09:00 (2)",
              "right": "09:00 (1)"
            },
            {
              "left": "09:15 (1)",
              "right": ""
            },
            {
              "left": "09:30 (1)",
              "right": "09:30 (1)"
            },
            {
              "left": "10:00 (1)",
              "right": "10:00 (1)"
            },
            {
              "left": "",
              "right": "10:20 (1)"
            },
            {
              "left": "10:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "11:00 (1)"
            },
            {
              "left": "11:10 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "11:30 (1)"
            },
            {
              "left": "11:40 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "11:45 (1)"
            },
            {
              "left": "12:00 (1)",
              "right": "12:00 (1)"
            },
            {
              "left": "12:15 (1)",
              "right": ""
            },
            {
              "left": "12:30 (1)",
              "right": "12:30 (1)"
            },
            {
              "left": "12:40 (1)",
              "right": ""
            },
            {
              "left": "13:00 (1)",
              "right": "13:00 (1)"
            },
            {
              "left": "13:30 (1)",
              "right": "13:30 (1)"
            },
            {
              "left": "14:00 (1)",
              "right": "14:00 (1)"
            },
            {
              "left": "",
              "right": "14:30 (1)"
            },
            {
              "left": "15:00 (2)",
              "right": "15:00 (1)"
            },
            {
              "left": "15:15 (1)",
              "right": ""
            },
            {
              "left": "15:30 (1)",
              "right": "15:30 (1)"
            },
            {
              "left": "16:00 (1)",
              "right": "16:00 (1)"
            },
            {
              "left": "",
              "right": "16:15 (1)"
            },
            {
              "left": "",
              "right": "16:20 (1)"
            },
            {
              "left": "16:30 (1)",
              "right": "16:30 (1)"
            },
            {
              "left": "16:55 (1)",
              "right": ""
            },
            {
              "left": "17:00 (1)",
              "right": "17:00 (1)"
            },
            {
              "left": "17:10 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "17:15 (1)"
            },
            {
              "left": "",
              "right": "17:25 (1)"
            },
            {
              "left": "17:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "17:35 (1)"
            },
            {
              "left": "",
              "right": "17:45 (1)"
            },
            {
              "left": "18:00 (2)",
              "right": "18:00 (1)"
            },
            {
              "left": "",
              "right": "18:30 (1)"
            },
            {
              "left": "19:00 (1)",
              "right": ""
            },
            {
              "left": "20:00 (1)",
              "right": "20:00 (1)"
            },
            {
              "left": "",
              "right": "20:20 (1)"
            },
            {
              "left": "20:30 (1)",
              "right": "20:30 (1)"
            },
            {
              "left": "",
              "right": "20:50 (1)"
            },
            {
              "left": "21:00 (1)",
              "right": "21:00 (1)"
            },
            {
              "left": "21:20 (1)",
              "right": "21:20 (1)"
            },
            {
              "left": "",
              "right": "21:40 (1)"
            },
            {
              "left": "21:45 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "22:00 (1)"
            },
            {
              "left": "22:10 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "22:15 (1)"
            },
            {
              "left": "",
              "right": "22:30 (1)"
            }
          ]
        },
        "fenglin": {
          "handan": [
            {
              "left": "",
              "right": "06:55 (1)"
            },
            {
              "left": "07:10 (1)",
              "right": "07:10 (1)"
            },
            {
              "left": "07:20 (1)",
              "right": ""
            },
            {
              "left": "08:15 (1)",
              "right": "08:15 (1)"
            },
            {
              "left": "09:15 (1)",
              "right": "09:15 (1)"
            },
            {
              "left": "",
              "right": "10:15 (1)"
            },
            {
              "left": "11:00 (1)",
              "right": "11:00 (1)"
            },
            {
              "left": "11:45 (1)",
              "right": ""
            },
            {
              "left": "12:15 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "12:30 (1)"
            },
            {
              "left": "13:00 (1)",
              "right": "13:00 (1)"
            },
            {
              "left": "14:00 (1)",
              "right": "14:00 (1)"
            },
            {
              "left": "14:30 (1)",
              "right": ""
            },
            {
              "left": "15:30 (1)",
              "right": "15:30 (1)"
            },
            {
              "left": "16:00 (1)",
              "right": "16:00 (1)"
            },
            {
              "left": "16:55 (1)",
              "right": "16:55 (1)"
            },
            {
              "left": "17:10 (1)",
              "right": "17:10 (1)"
            },
            {
              "left": "17:25 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "18:00 (1)"
            },
            {
              "left": "18:20 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "19:30 (1)"
            },
            {
              "left": "20:20 (1)",
              "right": "20:20 (2)"
            },
            {
              "left": "21:15 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "21:25 (2)"
            },
            {
              "left": "21:50 (1)",
              "right": ""
            }
          ],
          "zhangjiang": [
            {
              "left": "07:00 (1)",
              "right": ""
            },
            {
              "left": "07:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "07:50 (1)"
            },
            {
              "left": "09:00 (1)",
              "right": ""
            },
            {
              "left": "12:15 (1)",
              "right": "12:15 (1)"
            },
            {
              "left": "13:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "15:00 (1)"
            },
            {
              "left": "16:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "17:00 (1)"
            },
            {
              "left": "19:00 (1)",
              "right": "19:00 (1)"
            }
          ]
        },
        "zhangjiang": {
          "handan": [
            {
              "left": "",
              "right": "07:10 (1)"
            },
            {
              "left": "07:15 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "07:40 (1)"
            },
            {
              "left": "08:00 (1)",
              "right": "08:00 (1)"
            },
            {
              "left": "",
              "right": "08:30 (1)"
            },
            {
              "left": "08:40 (1)",
              "right": ""
            },
            {
              "left": "09:00 (1)",
              "right": "09:00 (1)"
            },
            {
              "left": "10:00 (1)",
              "right": "10:00 (1)"
            },
            {
              "left": "11:50 (2)",
              "right": "11:50 (1)"
            },
            {
              "left": "12:15 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "12:30 (1)"
            },
            {
              "left": "12:40 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "12:45 (1)"
            },
            {
              "left": "14:15 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "14:30 (1)"
            },
            {
              "left": "15:20 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "15:30 (1)"
            },
            {
              "left": "16:00 (1)",
              "right": ""
            },
            {
              "left": "16:10 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "16:15 (1)"
            },
            {
              "left": "16:20 (1)",
              "right": ""
            },
            {
              "left": "16:40 (1)",
              "right": ""
            },
            {
              "left": "17:00 (1)",
              "right": ""
            },
            {
              "left": "17:20 (1)",
              "right": "17:20 (2)"
            },
            {
              "left": "18:30 (1)",
              "right": "18:30 (1)"
            },
            {
              "left": "",
              "right": "20:20 (3)"
            },
            {
              "left": "",
              "right": "20:30 (1)"
            },
            {
              "left": "",
              "right": "21:00 (1)"
            },
            {
              "left": "21:10 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "21:20 (2)"
            }
          ],
          "fenglin": [
            {
              "left": "",
              "right": "07:00 (1)"
            },
            {
              "left": "",
              "right": "07:30 (1)"
            },
            {
              "left": "07:50 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "09:00 (1)"
            },
            {
              "left": "12:15 (1)",
              "right": "12:15 (1)"
            },
            {
              "left": "",
              "right": "13:30 (1)"
            },
            {
              "left": "15:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "16:30 (1)"
            },
            {
              "left": "17:00 (1)",
              "right": ""
            },
            {
              "left": "19:00 (1)",
              "right": "19:00 (1)"
            }
          ],
          "stu": [
            {
              "left": "",
              "right": "07:30 (1)"
            },
            {
              "left": "",
              "right": "08:00 (1)"
            },
            {
              "left": "",
              "right": "08:30 (1)"
            },
            {
              "left": "",
              "right": "09:00 (1)"
            },
            {
              "left": "12:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "13:00 (1)"
            },
            {
              "left": "",
              "right": "14:15 (1)"
            },
            {
              "left": "",
              "right": "17:30 (1)"
            },
            {
              "left": "18:00 (1)",
              "right": ""
            },
            {
              "left": "21:30 (1)",
              "right": ""
            },
            {
              "left": "22:00 (1)",
              "right": ""
            }
          ]
        },
        "stu": {
          "zhangjiang": [
            {
              "left": "07:30 (1)",
              "right": ""
            },
            {
              "left": "08:00 (1)",
              "right": ""
            },
            {
              "left": "08:30 (1)",
              "right": ""
            },
            {
              "left": "09:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "12:30 (1)"
            },
            {
              "left": "13:00 (1)",
              "right": ""
            },
            {
              "left": "14:15 (1)",
              "right": ""
            },
            {
              "left": "17:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "18:00 (1)"
            },
            {
              "left": "",
              "right": "21:30 (1)"
            },
            {
              "left": "",
              "right": "22:00 (1)"
            }
          ]
        }
      },
      "weekend": {
        "handan": {
          "jiangwan": [
            {
              "left": "",
              "right": "07:40 (1)"
            },
            {
              "left": "",
              "right": "08:00 (1)"
            },
            {
              "left": "08:20 (1)",
              "right": "08:20 (1)"
            },
            {
              "left": "08:40 (1)",
              "right": "08:40 (1)"
            },
            {
              "left": "09:00 (1)",
              "right": "09:00 (1)"
            },
            {
              "left": "09:20 (1)",
              "right": "09:20 (1)"
            },
            {
              "left": "09:40 (1)",
              "right": "09:40 (1)"
            },
            {
              "left": "",
              "right": "10:20 (1)"
            },
            {
              "left": "17:00 (2)",
              "right": ""
            },
            {
              "left": "",
              "right": "17:30 (2)"
            },
            {
              "left": "20:15 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "20:40 (1)"
            },
            {
              "left": "21:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "21:20 (1)"
            },
            {
              "left": "21:45 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "22:10 (1)"
            },
            {
              "left": "22:30 (1)",
              "right": ""
            }
          ],
          "fenglin": [
            {
              "left": "08:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "09:00 (1)"
            },
            {
              "left": "16:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "17:30 (1)"
            }
          ],
          "zhangjiang": [
            {
              "left": "08:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "09:20 (1)"
            },
            {
              "left": "16:30 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "17:30 (1)"
            }
          ]
        },
        "jiangwan": {
          "handan": [
            {
              "left": "07:40 (1)",
              "right": ""
            },
            {
              "left": "08:00 (1)",
              "right": ""
            },
            {
              "left": "08:20 (1)",
              "right": "08:20 (1)"
            },
            {
              "left": "08:40 (1)",
              "right": "08:40 (1)"
            },
            {
              "left": "09:00 (1)",
              "right": "09:00 (1)"
            },
            {
              "left": "09:20 (1)",
              "right": "09:20 (1)"
            },
            {
              "left": "09:40 (1)",
              "right": "09:40 (1)"
            },
            {
              "left": "10:20 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "17:00 (2)"
            },
            {
              "left": "17:30 (2)",
              "right": ""
            },
            {
              "left": "",
              "right": "20:15 (1)"
            },
            {
              "left": "20:40 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "21:00 (1)"
            },
            {
              "left": "21:20 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "21:45 (1)"
            },
            {
              "left": "22:10 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "22:30 (1)"
            }
          ]
        },
        "fenglin": {
          "handan": [
            {
              "left": "",
              "right": "08:00 (1)"
            },
            {
              "left": "09:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "16:30 (1)"
            },
            {
              "left": "17:30 (1)",
              "right": ""
            }
          ]
        },
        "zhangjiang": {
          "handan": [
            {
              "left": "",
              "right": "08:30 (1)"
            },
            {
              "left": "09:20 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "16:30 (1)"
            },
            {
              "left": "17:30 (1)",
              "right": ""
            }
          ],
          "stu": [
            {
              "left": "",
              "right": "09:00 (1)"
            },
            {
              "left": "",
              "right": "12:00 (1)"
            },
            {
              "left": "",
              "right": "17:00 (1)"
            },
            {
              "left": "17:20 (1)",
              "right": ""
            },
            {
              "left": "21:00 (1)",
              "right": ""
            }
          ]
        },
        "stu": {
          "zhangjiang": [
            {
              "left": "09:00 (1)",
              "right": ""
            },
            {
              "left": "12:00 (1)",
              "right": ""
            },
            {
              "left": "17:00 (1)",
              "right": ""
            },
            {
              "left": "",
              "right": "17:20 (1)"
            },
            {
              "left": "",
              "right": "21:00 (1)"
            }
          ]
        }
      }
    },
    timeList: [
      {
        "left": "",
        "right": "07:10 (1)"
      },
      {
        "left": "",
        "right": "07:20 (1)"
      },
      {
        "left": "07:30 (1)",
        "right": "07:30 (1)"
      },
      {
        "left": "07:40 (1)",
        "right": "07:40 (1)"
      },
      {
        "left": "",
        "right": "07:50 (1)"
      },
      {
        "left": "08:00 (1)",
        "right": "08:00 (1)"
      },
      {
        "left": "",
        "right": "08:15 (1)"
      },
      {
        "left": "08:30 (2)",
        "right": "08:30 (1)"
      },
      {
        "left": "",
        "right": "08:45 (1)"
      },
      {
        "left": "09:00 (1)",
        "right": "09:00 (2)"
      },
      {
        "left": "",
        "right": "09:15 (1)"
      },
      {
        "left": "09:30 (1)",
        "right": "09:30 (1)"
      },
      {
        "left": "10:00 (1)",
        "right": "10:00 (1)"
      },
      {
        "left": "10:20 (1)",
        "right": ""
      },
      {
        "left": "",
        "right": "10:30 (1)"
      },
      {
        "left": "11:00 (1)",
        "right": ""
      },
      {
        "left": "",
        "right": "11:10 (1)"
      },
      {
        "left": "11:30 (1)",
        "right": ""
      },
      {
        "left": "",
        "right": "11:40 (1)"
      },
      {
        "left": "11:45 (1)",
        "right": ""
      },
      {
        "left": "12:00 (1)",
        "right": "12:00 (1)"
      },
      {
        "left": "",
        "right": "12:15 (1)"
      },
      {
        "left": "12:30 (1)",
        "right": "12:30 (1)"
      },
      {
        "left": "",
        "right": "12:40 (1)"
      },
      {
        "left": "13:00 (1)",
        "right": "13:00 (1)"
      },
      {
        "left": "13:30 (1)",
        "right": "13:30 (1)"
      },
      {
        "left": "14:00 (1)",
        "right": "14:00 (1)"
      },
      {
        "left": "14:30 (1)",
        "right": ""
      },
      {
        "left": "15:00 (1)",
        "right": "15:00 (2)"
      },
      {
        "left": "",
        "right": "15:15 (1)"
      },
      {
        "left": "15:30 (1)",
        "right": "15:30 (1)"
      },
      {
        "left": "16:00 (1)",
        "right": "16:00 (1)"
      },
      {
        "left": "16:15 (1)",
        "right": ""
      },
      {
        "left": "16:20 (1)",
        "right": ""
      },
      {
        "left": "16:30 (1)",
        "right": "16:30 (1)"
      },
      {
        "left": "",
        "right": "16:55 (1)"
      },
      {
        "left": "17:00 (1)",
        "right": "17:00 (1)"
      },
      {
        "left": "",
        "right": "17:10 (1)"
      },
      {
        "left": "17:15 (1)",
        "right": ""
      },
      {
        "left": "17:25 (1)",
        "right": ""
      },
      {
        "left": "",
        "right": "17:30 (1)"
      },
      {
        "left": "17:35 (1)",
        "right": ""
      },
      {
        "left": "17:45 (1)",
        "right": ""
      },
      {
        "left": "18:00 (1)",
        "right": "18:00 (2)"
      },
      {
        "left": "18:30 (1)",
        "right": ""
      },
      {
        "left": "",
        "right": "19:00 (1)"
      },
      {
        "left": "20:00 (1)",
        "right": "20:00 (1)"
      },
      {
        "left": "20:20 (1)",
        "right": ""
      },
      {
        "left": "20:30 (1)",
        "right": "20:30 (1)"
      },
      {
        "left": "20:50 (1)",
        "right": ""
      },
      {
        "left": "21:00 (1)",
        "right": "21:00 (1)"
      },
      {
        "left": "21:20 (1)",
        "right": "21:20 (1)"
      },
      {
        "left": "21:40 (1)",
        "right": ""
      },
      {
        "left": "",
        "right": "21:45 (1)"
      },
      {
        "left": "22:00 (1)",
        "right": ""
      },
      {
        "left": "",
        "right": "22:10 (1)"
      },
      {
        "left": "22:15 (1)",
        "right": ""
      },
      {
        "left": "22:30 (1)",
        "right": ""
      }
    ],
    location: {
      "邯郸": "理科图书馆东侧",
      "江湾": "校区宣传栏",
      "枫林": "西苑（近8号楼）",
      "张江": "II期1号门卫室东侧", 
      "上科大": "学生宿舍区内"
    }, 
    currentLoca: {
      "left": "理科图书馆东侧",
      "right": "校区宣传栏"
    },
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
      multiIndex: this.data.multiIndex,
      timeTable: this.data.timeTable,
      location: this.data.location,
      timeList: this.data.timeList,
      currentLoca: this.data.currentLoca
    };
    var pyName = {
      "邯郸": "handan",
      "江湾": "jiangwan",
      "枫林": "fenglin",
      "张江": "zhangjiang",
      "上科大": "stu",
      "工作日": "weekday",
      "非工作日": "weekend"
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

    // table data
    data.timeList = data.timeTable[pyName[data.multiArray[0][data.multiIndex[0]]]][pyName[data.multiArray[1][data.multiIndex[1]]]][pyName[data.multiArray[2][data.multiIndex[2]]]]
    data.currentLoca = {
      "left": data.location[data.multiArray[1][data.multiIndex[1]]],
      "right": data.location[data.multiArray[2][data.multiIndex[2]]]
    }
    this.setData(data);
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
