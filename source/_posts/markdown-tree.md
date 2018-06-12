---
layout: pages
title: markdown文件的目录树生成
date: 2018-06-12 20:00:00
categories:
- markdown
tags:
- markdown
---
最近看 github 上项目，发现很多都有文档文件（README.md），看见里面有目录树，故而整理了一下。markdown文件的目录树生成的核心在于锚点。
ps：简书这里是不支持的，你要想加，可以参考[简书自动生成目录小工具](https://www.jianshu.com/p/d02157db09d2)。
<!-- more -->

## 工具类生成目录

基本每个编辑器都有【目录生成】的功能。我用的 Typora ，我找了一下，`段落--内容目录`，确实能生成目录树，效果还不错。切换成源码一看，只是加了个`[TOC]`。简书不支持，好像CSDN就支持`[TOC]`。

## 手写目录

**第一种**：[去此处](https://github.com/woaiwojia321314/woaiwojia321314.github.io/tree/master)查看`README.md`文件。

截图如下：
![markdown-tree0.png](https://upload-images.jianshu.io/upload_images/1464420-030e20e279f59edb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**第二种**：[去此处](https://github.com/nieweidong/fetool)查看`README.md`文件。

截图如下：
![markdown-tree.png](https://upload-images.jianshu.io/upload_images/1464420-bf6448d851134225.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

ps：简书这里，都不支持。