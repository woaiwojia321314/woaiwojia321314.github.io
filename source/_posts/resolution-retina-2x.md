
---
layout: pages
title: 网页高清屏和retina（视网膜）屏的双倍图解决办法
date: 2016-02-06 13:00:00
tags:
- css3
---

通过搜集相关资料，发现一个比较普遍的解决方案：retina.js+CSS Media Queries。

**retina.js**
retina.js下载地址：[retina.js官网下载](http://imulus.github.io/retinajs/)  和 [免费cdn](http://www.bootcdn.cn/retina.js/)。
详细介绍和步骤啥的，看这个[《走向视网膜（Retina）的Web时代》](http://www.w3cplus.com/css/towards-retina-web.html)和[《如何一步步把网站Retina优化》](http://blog.netsh.org/posts/website-retina_1779.netsh.html)文章。
retina.js针对img标签的图片，直接用就行。背景图片还是得用CSS Media Queries 
示例代码：
```swift
<div class="img">
  [站外图片上传中……(3)]
  [站外图片上传中……(4)]
  <div class="logo"></div>
</div>
```

**CSS Media Queries**
css属性：device-pixel-ratio和-webkit-image-set
先看看两者的兼容性：
![](http://upload-images.jianshu.io/upload_images/1464420-698aedeca65baf9d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](http://upload-images.jianshu.io/upload_images/1464420-365dabab4222ff3f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

第二个截图，不是确切。加上私有属性“--webkit-”，Safari 6+和chrome 21+都支持的。这个属性仅是CSS4的一个草案。（**注：第二种方法没法用于img标签。**）
看见上面两种方法的兼容性都不咋地好，你可能会立马否决使用它。其实不然，上面提到我是看了好几个网站的源码才偶然发现第二种方法的，那么久给你看看结果：苹果网站（第一种），华为（第一种，不过由于它使用的jquery fancybox插件，是这个插件带得，可以估计不算在内。），魅族（第二种），小米（第二种），锤子（第二种），腾讯首页（第二种）。
再者你仔细想想，retina屏的用户群，都是些苹果的手机(iphone)和ipad以及笔记本（rmbp）等等设备，也就恰好在该属性兼容范围内。
示例代码：
```wift
.test {
  background-image: url('img/logo.jpg'); 
  background-image: -webkit-image-set(url('img/logo.jpg') 1x,url('img/logo@2x.jpg') 2x);
  background-size: 425px 195px;
  width: 425px;
  height: 195px;
}
@media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
only screen and (-moz-min-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (min-device-pixel-ratio: 1.5),
(min-resolution: 192dpi) {
  .logo {
    background-image: url('img/logo@2x.jpg');
    background-size: 425px 195px;
    width: 425px;
    height: 195px;
   }
 }
```

#####参考
- [走向视网膜（Retina）的Web时代](http://www.w3cplus.com/css/towards-retina-web.html)        
- [如何一步步把网站Retina优化](http://blog.netsh.org/posts/website-retina_1779.netsh.html)
- [image-set实现Retina屏幕下图片显示](http://www.w3cplus.com/css/safari-6-and-chrome-21-add-image-set-to-support-retina-images.html)
- [高清显示屏原理及设计方案](http://www.cnblogs.com/PeunZhang/p/3441110.html)
- [随方逐圆 -- 全面理解 CSS 媒体查询](https://juejin.im/entry/595b6208f265da6c3902041e)
