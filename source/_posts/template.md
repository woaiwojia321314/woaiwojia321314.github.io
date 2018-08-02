---
layout: pages
title: markdown 常用语法（Hexo）
date: 2018-08-01 12:00:00
categories:
- class
- 分类2
tags:
- tag1
- 标签2
---

摘要：Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).
<!-- more -->

## 引用 >

> 引用的一段话。

## 标题 #

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 列表(-或+或*或1.)

* 无序列表*
- 无序列表-
  + 无序列表+
  + 无序列表+
- 无序列表-
* 无序列表

1. 有序列表1.
1. 有序列表1.
1. 有序列表1.

##链接（文本链接，图片链接）
自动链接：<http://example.com/>
文本链接：[baidu](http://www.baidu.com)
图片链接：
![like-img](http://upload-images.jianshu.io/upload_images/1464420-0d591f73288641ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 强调

**粗体**
*斜体*
~~文字删除线~~
*single asterisks*
_斜体_
**double asterisks**
__粗体double__

## 代码块

行内代码：`inline code`
代码块：
```swift
$(function(){
alert("This is a test js !!!!")
});
```
代码块2： 
``` bash
# 代码块
$ hexo new "My New Post"
```
### codepen 和 jsfiddle 代码引入，相关设置见此文[]()。

1. 在文章中嵌入codepen代码：

```swift
{% codepen userId|anonymous|anon slugHash theme [defaultTab [height [width]]] %}
```

{% codepen CiTA bgjKKE dark [css,result [265]] %}

原链接：
<p data-height="265" data-theme-id="dark" data-slug-hash="bgjKKE" data-default-tab="css,result" data-user="CiTA" data-embed-version="2" data-pen-title="CSS sidebar toggle" class="codepen">See the Pen <a href="https://codepen.io/CiTA/pen/bgjKKE/">CSS sidebar toggle</a> by Silvestar Bistrović (<a href="https://codepen.io/CiTA">@CiTA</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

2. 在文章中嵌入 jsFiddle 代码：

```swift
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```


## 分割线

* * *
***
*****
- - -
---------------------------------------

## 表格
表格（:在两边， 文本居中；在左边，文本居中；在右边，文本居右）：

| 姓名  | 年龄 | 身高| 其他 |
|:----|:----:|:----:|----:|
| fli | 27 | 175 | 无 |
| wdy | 22 | 180 | 无 |
| kiyei | 19 | 170 | 有 |



## 参考
* [参考1](http://www.missfli.com)
* [参考2](http://www.missfli.com)
