# bus-schedule

![version](https://img.shields.io/badge/version-1.2.5-66c2a5.svg)
![total users](https://img.shields.io/badge/total%20users-17%2C364-fc8d62.svg)
![total adds](https://img.shields.io/badge/total%20adds-4%2C059-red.svg)
![minimum base library version](https://img.shields.io/badge/minimum%20base%20library%20version-2.1.0-blue.svg)

Bus schedule of Fudan University on WeChat Mini Program / 复旦大学校车时刻表微信小程序

![ercode](pic/ercode.png)

## Screen Shot

![screen shot](pic/screenshot.jpg)

## Features

__便捷的复旦校车查询工具__，自动加载常用路线当天的时刻表，可通过选择器查看其他时间或路线的时刻表。`信息查询`
* 网络状态：用户昵称右侧提示网络连接状态，请在有网络连接的情况下使用，否则将无法加载时刻表、加载/更改常用路线
* 常用路线：出发/到达，通过`设为常用`按钮把当前路线设为常用路线
* 当前日期：周几/是否工作日/时间段，自动选择是否工作日，并加载常用路线对应的时刻表
* 选择器：查看其他时间或路线的时刻表
* 时刻表：包括出发/到达地点、下一班次发车时间、发车时间列表
* 校车调整通知：了解最新校车运行调整安排
* 反馈与投诉：功能异常、产品建议、违规举报
* 联系客服：直接咨询客服人员

## Prerequisites

* 如果要修改、增加云函数，要在对应云函数的根目录安装`wx-server-sdk`依赖
```commandline
npm install --save wx-server-sdk@latest
```

## Update Timetable

### generate and upload timetable JSON file to `timetable`

* 修改`data/tojson.py`中的`INPUT_CSV` and `OUTPUT_JSON`文件名
* 修改`PERIOD`为时间段的名字
* 生成时刻表JSON文件
```
python data/tojson.py
```
* 把JSON文件上传到数据库中的`timetable`表

### add a record in `period`

```
begin (date): 时间段的开始时间
end (date): 时间段的结束时间
name (str): 时间段的名字
period (str): 时间段所对应的时刻表的名字
weekday (str): 工作日对应时刻表的工作日/非工作日部分
weekend (str): 非工作日对应时刻表的工作日/非工作日部分
```

## 客服支持

* 客服小助手微信小程序：回复用户消息，编辑快捷回复
* [网页端客服](https://mpkf.weixin.qq.com/)：回复用户消息，设置自动接入、自动问候语，设置自动回复、自动回复内容，编辑快捷回复

## Reference

* [miniprogram-demo](https://github.com/wechat-miniprogram/miniprogram-demo)
* [picker](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html)

## Links

* [微信公众平台](https://mp.weixin.qq.com/)
* [Map of Fudan University](http://map.fudan.edu.cn)

## Author

Zhongyu Chen
