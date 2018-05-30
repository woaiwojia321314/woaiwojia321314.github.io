---
layout: pages
title: Hexo NexT：在文章中嵌入 CodePen或 jsFiddle
date: 2018-05-29 00:30:00
categories:
- Hexo
tags:
- Hexo
- CodePen
- jsFiddle
---
建议直接去[博客网站原文](http://www.missfli.com/2018/05/29/github-hexo-next-04.html)看效果，因为简书的markdown不支持此语法的。
搞 IT 技术的人，写博客有时候需要在博文中展示一些实施的 demo 代码效果，这就涉及到需要在博文中嵌入 CodePen 或 jsFiddle，jsFiddle 有个国内版 [jsrun](http://jsrun.net)，我就做了上面两种尝试，也就不讲其他的了。至于这两款需要翻墙，对于搞 IT 技术的你不算事儿吧。

提一句：需要拿出来做嵌入用的代码，你去你的 demo 页面找`Embed `，中文版的好像叫`嵌入`，里面有下面的嵌入代码的语法需要的参数。
<!-- more -->

## 在文章中嵌入 CodePen
去 [Hexo 官方插件页](https://hexo.io/plugins/)搜索`codepen`，然后找到`hexo-codepen`，点过去。
或者直接[点击此处](https://github.com/maliMirkec/hexo-tag-codepen)。
里面有文档和示例，大致讲解一下。

### 1.安装
npm 安装：
`$ npm install hexo-codepen --save`
或 yarn 安装：
`$ yarn add hexo-codepen`

### 2.用法
语法结构：
```swift
{% codepen userId|anonymous|anon slugHash theme [defaultTab [height [width]]] %}
```
deme 链接：

`https://codepen.io/CiTA/pen/bgjKKE`

在 CodePen 里面 Embed 出来的html代码：
```swift
<p data-height="265" data-theme-id="dark" data-slug-hash="bgjKKE" data-default-tab="css,result" data-user="CiTA" data-embed-version="2" data-pen-title="CSS sidebar toggle" class="codepen">See the Pen <a href="https://codepen.io/CiTA/pen/bgjKKE/">CSS sidebar toggle</a> by Silvestar Bistrović (<a href="https://codepen.io/CiTA">@CiTA</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
```

参数对应关系：

| 字段  | 值  |
|:----|:----:|
| userId  | CiTA |
| slugHash | bgjKKE |
| theme | dark |
| defaultTab | css,result |
| height | 265 |
| width | 默认为：100%，此值应根据您的博客主题进行调整 |

示例效果：
```swift
#替换参数后的语法：(*设置宽高时不要用%，会导致编译错误*)
{% codepen CiTA bgjKKE dark [css,result [265]] %}
```
运行后的：
{% codepen CiTA bgjKKE dark [css,result [265]] %}

当然也可以直接嵌入源码（CodePen 中 Embed 出来的代码支持3种格式：WordPress Shortcode、iFrame、HTML） ，也能看到效果，只是这个会带有源码，体验不太好。
效果如下：
<p data-height="265" data-theme-id="dark" data-slug-hash="bgjKKE" data-default-tab="css,result" data-user="CiTA" data-embed-version="2" data-pen-title="CSS sidebar toggle" class="codepen">See the Pen <a href="https://codepen.io/CiTA/pen/bgjKKE/">CSS sidebar toggle</a> by Silvestar Bistrović (<a href="https://codepen.io/CiTA">@CiTA</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## 在文章中嵌入 jsFiddle
这个就省掉了安装依赖包的步骤了，本来官网也提供了语法，只是没有具体的示例，网上找了半天没资料。就自己参考 CodePen 的方式做了一个逆向推理出来的。
### 用法
语法结构（[官网](https://hexo.io/zh-cn/docs/tag-plugins.html#jsFiddle)也就只提供了这个）：(*设置宽高时不要用%，会导致编译错误*)
```swift
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```
demo 链接：

`http://jsfiddle.net/AntBody/138zf8kk/?utm_source=website&utm_medium=embed&utm_campaign=138zf8kk`

在文章中嵌入 jsfiddle 。
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}

然后页面转化后，在浏览器里面开启调试控制台，看到如下图：
![1111.png](https://upload-images.jianshu.io/upload_images/1464420-cb26867760f7368c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后逆推，设置如下：
```swift
{% jsfiddle AntBody/138zf8kk js,html,css,result light %}
```
运行效果：
{% jsfiddle AntBody/138zf8kk js,html,css,result light %}

这些参数怎么对应过去的呢？看下图：
![222.png](https://upload-images.jianshu.io/upload_images/1464420-8199fb368e1040b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

当然同样的，因为 jsfiddle 的Embed code 支持两种方式，也可以引入 iFarme 源码进来，因为本来 Hexo 的语法本来就是编译成 iframe 形式的。
<iframe width="100%" height="300" src="//jsfiddle.net/AntBody/138zf8kk/embedded/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

另外说明一点，jsfiddle 的 demo 例子代码你得找到 `Emebed`才能看到相关需要的参数，如果找不到，可能就不知道怎么设置了。
比如 Element UI 的随便一个例子： `https://jsfiddle.net/api/post/library/pure/`，不知道是不是因为没注册账号的原因引起的。（由于我一直用的codepen，就没去捉摸具体原因了。）

## 总结

1. codepen 嵌入

  * 安装：`$ npm install hexo-codepen --save`

  * 使用语法结构：

  ```swift
  {% codepen userId|anonymous|anon slugHash theme [defaultTab [height [width]]] %}
  ```

  * 找到对应参数，对应过去就行。

2. jsfiddle 嵌入

  * 使用语法结构：

  ```swift
  {% jsfiddle shorttag [tabs] [skin] [width] [height] %}
  ```

  * 找到对应参数，对应过去就行。

3. 至于其他的像 dabbet、jsrun、jsbin、runjs 等等就自己去尝试了。
另外，由于 hexo 解析后都是 iframe 的结果形式，故而可以直接引入 iframe 的代码也行，只是效果体验会差些，毕竟连源码也显示出来了。至于，其他的 js 嵌入或 html+js 嵌入就自己去尝试了。codepen 里面尝试了一下，跟 iframe 引入方式效果一样。