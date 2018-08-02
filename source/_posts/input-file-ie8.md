---
layout: pages
title: input file选择文件标签美化
date: 2018-08-02 12:00:00
categories:
- js
tags:
- file
- js
---

html中选择文件的标签 input[type=file]，默认样子比较丑，并且在各个浏览器上显示样子还不一样。所以需要手动美化。
<!-- more -->

**思路一：**
input file上传按钮的美化思路： 在原有的file标签上做修改。先把之前的按钮透明度opacity设置为0,然后，外层用div包裹，就实现了美化功能。

**关键代码：**

*dom结构：*
```swift
<a href="javascript:;" class="a-upload">
    <input type="file" name="" id="file1">点击这里上传文件
</a>
<a href="javascript:;" class="file">选择文件
    <input type="file" name="" id="file2">
</a>
```
*css：*
```swift
.file input {
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;/*关键点*/
  filter: alpha(opacity=0);/*兼容ie*/
  font-size: 100px;/* 增大不同浏览器的可点击区域 */
  cursor: pointer;
}
```

**修改后的效果图：**

![input-file.png](http://upload-images.jianshu.io/upload_images/1464420-f45be7e842bf44fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

[代码栗子](http://codepen.io/feili/pen/YqNpxj)

**思路二：**
input file上传按钮给隐藏起来，通过其他标签（div,a等等）来触发input file的click事件，这样就可以任意美化了。此例做了ie8兼容，就不贴代码了。[点此](https://codepen.io/feili/pen/xJYbmg)去codepen里看。效果图如下：
![file-upload.png](https://upload-images.jianshu.io/upload_images/1464420-155b4646a0a8c893.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 参考
* [css input file 样式美化，input上传按钮美化](http://www.haorooms.com/post/css_input_uploadmh)
* [兼容ie8的文件上传](https://github.com/chuanzaizai/img-upload-delete)
