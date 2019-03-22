const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('/')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDayofweek() {
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date();
  let day = date.getDay();
  let week = show_day[day];
  return week;
}

module.exports = {
  formatTime: formatTime,
  getDayofweek: getDayofweek
}