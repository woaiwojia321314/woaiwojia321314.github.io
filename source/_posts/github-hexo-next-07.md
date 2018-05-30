---
layout: pages
title: Hexo NexT主题中添加人体时钟 hone hone clock
date: 2018-05-29 16:10:00
categories:
- Hexo
tags:
- Hexo
- NexT
---

给网站添加人体时钟 hone hone clock ，人体时钟是日本的出品，[点此处去](http://chabudai.org/blog/?p=59)。

<!-- more -->

## 创建 js 文件 hone_hone_clock.js
在`next\source\js\src`文件夹下创建`hone_hone_clock.js`，添加代码：
```swift
/*hone-hone-clock*/
!function (e, t, a) { 
  /* code */
  var initClock = function(){
    var sHtml = '';
    sHtml += '<div style="position: fixed;right: 10px;top: 20px;width: 160px;height: 70px;">';
    sHtml += '  <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="160" height="70" id="honehoneclock" align="middle">';
    sHtml += '    <param name="allowScriptAccess" value="always">';
    sHtml += '    <param name="movie" value="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_tr.swf">';
    sHtml += '    <param name="quality" value="high">';
    sHtml += '    <param name="bgcolor" value="#ffffff">';
    sHtml += '    <param name="wmode" value="transparent">';
    sHtml += '    <embed wmode="transparent" src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_tr.swf" quality="high" bgcolor="#ffffff" width="160" height="70" name="honehoneclock" align="middle" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">';
    sHtml += '    </object>';
    sHtml += '</div>';
    
    t = t || document;    
    t.write(sHtml);
  }
  initClock();
}(window, document);
```

## 引用
在`next\layout\_layout.swig`文件中，添加引用（注：在 swig 末尾添加）：
```swift
<!--崩溃欺骗-->
<script type="text/javascript" src="/js/src/hone_hone_clock.js"></script>
```

## 其他
其实稍微懂点代码的可以自行封装 js ，然后按照一样的引入方式引入就行。

你可以直接下载别人写好的 js 文件，然后引入你的项目。比如下面的：
```swift
<script charset="Shift_JIS" src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_tr.js"></script>  
<script charset="Shift_JIS" src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_wh.js"></script>
```

或拿到人体时钟的[swf文件](http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_tr.swf)，自行写代码封装也可以滴。

我的百度网盘有swf文件：
链接：https://pan.baidu.com/s/16cNNaaFDsi1G_3g8YKF7fA 密码：7yob
