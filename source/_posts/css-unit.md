---
layout: pages
title: CSS3 Test 之单位
date: 2017-08-02 11:25:00
categories:
- css
tags:
- css3
---

平时或许你用过不少css的单位，相对和绝对单位你都用过，这里将会列出所有的。
<!-- more -->

## css单位

css单位：em，ex， %，px，cm，mm，mozmm，in，pt， pc，ch，rem，vh，vw，vmin，vmax。先看看各单位的浏览器兼容性：
![1.png](http://upload-images.jianshu.io/upload_images/1464420-11747778ffc1d32a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 单位分类

单位分类：相对单位和绝对单位。

### 1. 相对单位

* em 相对于直接父元素的字体大小（font-size）。
* ex 相对于当前字体的小写x字母的高度或者 1/2 的 1em（很少用）。*很多时候，它是字体的中间标志。 大部分用于版式的微调。比如下标，上标等。*
* ch 相对于数字“0”的宽度。*如：将一个等宽字体的字母”N”的宽度设置为40ch，那么在另一种类型的字体里它却可以包含40个字母。这个单位的传统用途主要是盲文的排版。*
* rem 相对于根元素的字体大小（网页中的根元素为html）。*如：大多数浏览器默认字体大小：font-size: 16px。`html{ font-size：62.5%；/* 16×62.5%=10px */}`，那么1rem=10px。*
* vw 相对于视窗（viewport）的宽度的1%。*如：浏览器宽度750px, 1 vw = 750px/100 = 7.5px。*
* vh 相对于视窗（viewport）的高度的1%。*如：浏览器高度1334px, 1 vh = 1334px/100 = 13.34px。*
* vmin 相对于视窗（viewport）的较小尺寸的1％，就是指视窗的宽和高中较小那个。*如：浏览器的宽度750px，高度1334px，1vmin = 750px/100 = 7.5px。*
* vmax 相对于视窗（viewport）的较大尺寸的1％，就是指视窗的宽和高中较大那个。*如：浏览器的宽度750px，高度1334px，1vmax = 1334px/100 = 13.34px。*
* % 百分比。

 **注：em, rem, %常用于自适应处理。Viewport =浏览器窗口大小。**

### 2. 绝对单位

* cm 厘米
* mm 毫米
* in 英寸(1in = 96px = 2.54cm)
* px 像素 (1px = 1/96th of 1in)
* pt 点(1pt = 1in/72)
* pc 排卡(1pc = 12 pt)，相当于我国新四号铅字的尺寸。

**注：1in = 2.54cm = 25.4 mm = 72pt = 6pc *

## 单位对比

这些单位的大小对比，可以看[这里](http://katydecorah.com/css-ruler/)。

#### 参考：
* [CSS Units](https://www.w3schools.com/cssref/css_units.asp)
* [CSS Ruler](http://katydecorah.com/css-ruler/)
* [7个你可能不认识的CSS单位](http://www.iteye.com/news/29797)

