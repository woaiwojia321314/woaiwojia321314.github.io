---
layout: pages
title: 文本溢出显示省略号(单行和多行)
date: 2017-09-05 11:15:00
categories:
- css
tags:
- css3
---

平时用的较多的事单行文本溢出显示省略号，做微信端发现移动端不少效果都是多行文本溢出显示省略号，故而总结一下，方便今后使用。
<!-- more -->

## 单行文本的溢出

```swift
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```
效果：

![0.png](http://upload-images.jianshu.io/upload_images/1464420-5f5088a716a64b40.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 多行文本的溢出

```swift
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;/*行数*/
overflow: hidden;
text-overflow: ellipsis;
```
效果：
![111.png](https://upload-images.jianshu.io/upload_images/1464420-8796e9c88136bd41.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#### 适用范围：
因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；
注：
1. -webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
1. display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
1. -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

### 另外还有一些解决方法：

* 利用伪类:after
* 利用绝对定位和padding;(跨浏览器解决方案)(跟第一种用伪类的方案类似)
* 利用js插件来实现该功能，如[Clamp.js](https://github.com/bigdots/Clamp.js),[jQuery.dotdotdot](https://github.com/bigdots/jQuery.dotdotdot)

#### 利用伪类:after
```swift
<div id="con">
  <span id="txt">文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略</span>
  <span class="t"></span>
</div>
<style>
#txt{
  display: inline-block;
  height: 40px;
  width: 250px;
  line-height: 20px;
  overflow: hidden;
  font-size: 16px;
}
.t:after{
  display: inline;
  content: "...";
  font-size: 16px;
    
}
</style>
```
效果：

![2.png](http://upload-images.jianshu.io/upload_images/1464420-14250539db66aa3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

注：
该方法适用范围广，但文字未超出行的情况下也会出现省略号,可结合[js](http://lib.csdn.net/base/javascript)优化该方法。

该方法改良版：
```swift
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"></script>
    <style>
    #txt{
      display: inline-block;
      height: 40px;
      width: 15em;
      line-height: 20px;
      overflow: hidden;
      font-size: 16px;
      border: 1px solid #f00;
      position: relative;
    }
    #txt:after{
        display: block;
        content: "...";
        font-size: inherit;
        width: 2em;
        position: absolute;
        bottom: 0;
        right: 0;
        background: #fff;
        
    }
    </style>
<body>
<span id="txt">简书是一个优质的创作社区,在这里,你可以任性地创作,一篇短文、一张照片、一首诗、一幅画……我们相信,每个人都是生活中的艺术家,有着无穷的创造力。</span>
</body>
</html>
```
效果图：
![111.png](https://upload-images.jianshu.io/upload_images/1464420-b96164416284e148.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

注：当文字不满2行时，省略号和文本最后一个字有空白区，还是加js判断才能完美达到效果。


#### 利用绝对定位和padding;(跨浏览器解决方案)
```swift
<p id="con2">
  文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略<span class="t2">...</span>
</p>
<style>
#con2{
  position: relative;
  height: 40px;
  width: 250px;
  line-height: 20px;
  overflow: hidden;
  padding-right: 12px;
}  
.t2{
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
```
效果：

![3.png](http://upload-images.jianshu.io/upload_images/1464420-ca0069c21847f750.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 参考：
* [CSS文本溢出显示省略号](http://www.cnblogs.com/yzg1/p/5089534.html)
* [CSS实现单行、多行文本溢出显示省略号（…）](http://blog.csdn.net/zhiyuanfl/article/details/55190770)
