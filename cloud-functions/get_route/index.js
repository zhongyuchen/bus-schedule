// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const wxContext = cloud.getWXContext()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => await db.collection('routes').where({
  openId: wxContext.OPENID
  })
    .limit(1)
    .get()