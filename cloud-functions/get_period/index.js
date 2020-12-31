// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command
let date = new Date()

// 云函数入口函数
exports.main = async (event, context) => await db.collection('period')
  .where({
    begin: _.lte(date),
    end: _.gte(date)
  })
  .orderBy('begin', 'desc')
  .limit(1)
  .get()