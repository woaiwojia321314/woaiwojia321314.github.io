---
layout: pages
title: node 升级版本
date: 2018-04-27 17:00:00
tags:
- Node
---

个人博客网站用的4.5的node，现在工作需要用element ui，需要node>=6，也就产生了node的升级需求。
<!-- more -->

## 方法一
node有一个模块叫n，是专门用来管理node.js的版本。
```swift
# 查看版本
node -v 
# 清除npm cache
npm cache clean -force
# 安装n模块
npm install -g n 
# 不行就这样：npm install -g n -f
# 升级新版本（稳定版 stable ,最新版 latest ,指定版本号v8.11.1）
n latest
# 查看版本号，确认是否升级成功
node -v 
```

## 方法二
GNVM 是一个简单的 Windows 下 Node.js 多版本管理器，类似的 nvm nvmw nodist 。感谢一下这位哥（kenshin）吧，[点此查看](https://github.com/Kenshin/gnvm)，有详细的操作文档。
注：*不过，我好像运气不太好，方法一没搞定，方法二呢，node是升级成功了，可是npm升级时就不行了，可以看下面的截图。最后用方法三搞定的。*
![node升级成功.png](https://upload-images.jianshu.io/upload_images/1464420-8c9d26b576d51932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![npm升级失败.png](https://upload-images.jianshu.io/upload_images/1464420-760e4e07c6b88200.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 方法三
去[官网](https://nodejs.org/en/)下载个你需要的版本，覆盖安装或先卸载再安装都行。不记得node的安装目录不要紧，`where node` 命令可以看到。everything 搜索工具也可以全盘搜索的。
