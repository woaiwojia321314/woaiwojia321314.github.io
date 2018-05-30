---
layout: pages
title: vue+element ui 之二：开发配置 webstorm
date: 2018-05-06 15:22:00
categories:
- Vue2
tags:
- Vue2
- Element
- webstorm
---

## 浏览器插件安装
chrome浏览器：Vue.js devtools插件，去应用商店装上此插件。然后找到此插件对应的 manifest.json（用everything搜或磁盘搜索，当搜出多个目录下的 manifest.json 文件时，根据插件的标签签名（如nhdogjmejiglipccpnnnanhbledajbpd）或安装时间（如2018/4/27）可以找到），将`"persistent": false,`改为`"persistent": true,`。如下图：
![manifest.json.png](https://upload-images.jianshu.io/upload_images/1464420-4dbf647ae5e49f3f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## webstorm相关配置
* 添加vue插件: vue.js
![1.png](https://upload-images.jianshu.io/upload_images/1464420-652fd98934d1dd5c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* 设置js版本：es6
![2.png](https://upload-images.jianshu.io/upload_images/1464420-4b2304cf931c3152.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* 添加vue.js文件模版
![3.png](https://upload-images.jianshu.io/upload_images/1464420-00d5ec6c639a353c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* 配置babel（类似sass）：es6 转 es5
安装：`$ npm install -g babel`
配置：
![4.png](https://upload-images.jianshu.io/upload_images/1464420-ccd019fc8fcac030.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* webstorm内存配置：bin目录下WebStorm.exe.vmoptions和WebStorm64.exe.vmoptions两个文件，修改如下(-Xms和-Xmx配置)：
```swift
-server
-Xms512m
-Xmx1024m
-XX:ReservedCodeCacheSize=240m
-XX:+UseConcMarkSweepGC
-XX:SoftRefLRUPolicyMSPerMB=50
-ea
-Dsun.io.useCanonCaches=false
-Djava.net.preferIPv4Stack=true
-XX:+HeapDumpOnOutOfMemoryError
-XX:-OmitStackTraceInFastThrow
```
（ps：这里-Xms最大值不能超过1024，否则webstorm将无法打开）
* 开发调试配置npm（或者node或[JavaScript debug](http://www.jb51.net/article/115478.htm)）
![5.png](https://upload-images.jianshu.io/upload_images/1464420-a6c5681baa9c08f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 参考
* [利用webstrom调试Vue.js单页面程序的方法教程](http://www.jb51.net/article/115478.htm)
* [webstorm创建和调试vue项目](https://blog.csdn.net/wm5920/article/details/78872548)
* [解决webstorm卡顿问题](https://blog.csdn.net/qq673318522/article/details/50583831/)
* [vue开发环境搭建（WebStorm）](https://blog.csdn.net/nero__a/article/details/62228646)
* [webstorm 设置ES6语法支持以及添加vuejs开发配置](https://blog.csdn.net/diligentkong/article/details/75040651)
* [webstorm开发vue，进行一些配置](https://blog.csdn.net/s8460049/article/details/53856534)
* [Vue.js devtools：调试vue.js应用的浏览器扩展 Chrome插件图文教程](http://www.cnplugins.com/devtool/vuejs-devtools/)
