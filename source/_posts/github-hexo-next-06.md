---
layout: pages
title: Hexo NexT主题中添加网页标题崩溃欺骗搞怪特效
date: 2018-05-29 14:45:00
categories:
- Hexo
tags:
- Hexo
- NexT
---
文章出处： https://asdfv1929.github.io/2018/01/25/crash-cheat/  

给网页title添加一些搞怪特效 ，提高页面体验。

<!-- more -->

## 创建js文件crash_cheat.js
在`next\source\js\src`文件夹下创建`crash_cheat.js`，添加代码：
```swift
<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 噫又好了~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
```

## 引用
在`next\layout\_layout.swig`文件中，添加引用（注：在 swig 末尾添加）：
```swift
<!--崩溃欺骗-->
<script type="text/javascript" src="/js/src/crash_cheat.js"></script>
```

## 补充
懂代码的会考虑横向和纵向的兼容性问题。
我先贴个 visibilitychange 事件的桌面端和移动端兼容性图示，或者你直接点击[此处](https://developer.mozilla.org/zh-CN/docs/Web/Events/visibilitychange)过去查看。

![visibilitychange-desktop.png](https://upload-images.jianshu.io/upload_images/1464420-e5867c52b131192b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![visibilitychange-mobile.png](https://upload-images.jianshu.io/upload_images/1464420-a2fe910eb1caae5b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

至少得是ie10，所以你别考虑把 attachEvent 加入进来做 ie6,7,8 的兼容了。Android 不支持的，Safari 浏览器也不支持的。所以在这些设备上没看到效果，不要认为是你的代码问题。

另外，visibilitychange 事件在浏览器tab页面切换时执行，故而不停的切换tab页面也会出现这种假效果。哪怕页面正常加载完成。