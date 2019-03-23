const formatTime = date => {
  // const year = date.getFullYear()
  // const month = date.getMonth() + 1
  // const day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  // var second = date.getSeconds()

  // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  return [hour, minute].map(formatNumber).join(':')
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

function compare(s1, s2) {
  for (let i = 0; i < 5; i++) {
    if (s1[i] > s2[i]){
      return 1
    }
  }

  return 0
}

function update_next(timeList) {
  let time = formatTime(new Date());
  let departTime = "无";
  let destinTime = "无";

  for (let i = 0; i < timeList.length; i++) {
    if (timeList[i]["left"] != "" && compare(timeList[i]["left"], time)) {
      departTime = timeList[i]["left"];
      break;
    }
  }
  for (let i = 0; i < timeList.length; i++) {
    if (timeList[i]["right"] != "" && compare(timeList[i]["right"], time)) {
      destinTime = timeList[i]["right"];
      break;
    }
  }

  return {
    departTime: departTime,
    destinTime: destinTime
  }
}

module.exports = {
  formatTime: formatTime,
  getDayofweek: getDayofweek,
  compare: compare,
  update_next: update_next
}