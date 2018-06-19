---
layout: pages
title: Hexo NexT主题代码块添加复制功能
date: 2018-06-19 17:10:00
categories:
- Hexo
tags:
- Hexo
- NexT
---

为了提高博客代码块的用户体验，仅仅代码高亮还不行，最好还能一键复制代码。故此文将讲述Hexo NexT主题博客的代码块复制功能配置。
<!-- more -->

## 下载 clipboard.js

三方插件 clipboardjs ，相关介绍和兼容性我就不赘述了，去它[主页](https://clipboardjs.com/)或[github](https://github.com/zenorocha/clipboard.js)上看。

**下载地址：**
- [clipboard.js](https://raw.githubusercontent.com/zenorocha/clipboard.js/master/dist/clipboard.js)
- [clipboard.min.js](https://raw.githubusercontent.com/zenorocha/clipboard.js/master/dist/clipboard.min.js) **推荐**

保存文件`clipboard.js / clipboard.min.js` ，目录如下：
`.\themes\next\source\js\src`

## clipboardjs 使用

也是在`.\themes\next\source\js\src`目录下，创建`clipboard-use.js`，文件内容如下：

```swift
/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
  /* code */
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <i class="fa fa-globe"></i><span>copy</span>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
    new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
  }
  initCopyCode();
}(window, document);
```

在`.\themes\next\source\css\_custom\custom.styl`样式文件中添加下面代码：

```swift
//代码块复制按钮
.highlight{
  //方便copy代码按钮（btn-copy）的定位
  position: relative;
}
.btn-copy {
    display: inline-block;
    cursor: pointer;
    background-color: #eee;
    background-image: linear-gradient(#fcfcfc,#eee);
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    font-size: 13px;
    font-weight: 700;
    line-height: 20px;
    color: #333;
    -webkit-transition: opacity .3s ease-in-out;
    -o-transition: opacity .3s ease-in-out;
    transition: opacity .3s ease-in-out;
    padding: 2px 6px;
    position: absolute;
    right: 5px;
    top: 5px;
    opacity: 0;
}
.btn-copy span {
    margin-left: 5px;
}
.highlight:hover .btn-copy{
  opacity: 1;
}
```

## 引用

在`.\themes\next\layout\_layout.swig`文件中，添加引用（注：在 swig 末尾或 body 结束标签（`</body>`）之前添加）：
```swift
  <!-- 代码块复制功能 -->
  <script type="text/javascript" src="/js/src/clipboard.min.js"></script>  
  <script type="text/javascript" src="/js/src/clipboard-use.js"></script>
```

想看效果的可以去[我博客](http://www.missfli.com/)看，截图如下:
![copycode-btn.png](https://upload-images.jianshu.io/upload_images/1464420-6f9f4305c4a35056.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 补充
懂代码的也可以将`clipboard.min.js`和`clipboard-use.js`合并为一个文件，再在`.\themes\next\layout\_layout.swig`文件中使用。当然`clipboard.min.js`也可以直接用三方cdn的方式引入也行。

