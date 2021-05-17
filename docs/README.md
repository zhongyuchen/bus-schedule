# bus-schedule

[![d3 version](https://img.shields.io/badge/d3-5.7.0-66c2a5.svg)](https://d3js.org)
[![Materialize version](https://img.shields.io/badge/Materialize-1.0.0-fc8d62.svg)](http://materializecss.com)
[![MIT license](https://img.shields.io/badge/license-MIT-8da0cb.svg)](https://mit-license.org)

Bus schedule of Fudan University is hosted on GitHub Pages with a few nice features including automatically updated green indicating buses waiting for departure and red indicating buses that have left.

## Website

https://zhongyuchen.github.io/bus-schedule/
Updated on February 20, 2019.

## Features

* __The bus schedule will be updated on time (?)__
* A link to the official notice on bus schedule of Fudan University is provided
* The bus schedule is organized into 2 tabs, one WEEKDAY tab and one WEEKEND tab
* Each tab is divided into a few collapsible rows with different combinations of starting point and destination
* Click on any collapsible row, the timetable for that route will appear
* __Pick up locations are shown at the top of each timetable__
* __Buses that have left are styled in red and those waiting for departure are styled in green, which is automatically updated every second__

## Structure

```
docs
├── data
│   └── ...
├── static
│   ├── css
│   |   └── ...
│   ├── js
│   |   └── ...
│   └── pic
│       └── ...
├── index.html
└── README.md
```

## Links

* [Official notice on bus schedule of Fudan University](http://www.xyfw.fudan.edu.cn/p2049c1954/list.htm)
* [Map of Fudan University](http://map.fudan.edu.cn)

## Author

Zhongyu Chen
