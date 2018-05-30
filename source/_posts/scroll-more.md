---
layout: pages
title: 滚动到底部加载更多
date: 2018-04-25 17:00:00
categories:
- js
tags:
- js
---

移动端加载数据时，由于数据太多，不会一次性全部加载出来。有些会采用pc端那样用分页码的形式，但是更多的确实滑动滚动条到内容最后，加载更多内容出来。一般引入了三方的前端框架和插件，基本都会有此功能。偶尔会需要采用原生js实现，故而此处就介绍下原生js的实现方式。另外附上jquery的实现方式。
<!-- more -->

## 原生js实现思路
需要三个高度：scrollHeight（文档内容实际高度，*包括超出视窗的溢出部分*）、scrollTop（滚动条滚动距离）、clientHeight（窗口可视范围高度）。当 `clientHeight + scrollTop >= scrollHeight` 时，表示已经抵达内容的底部了，可以加载更多内容。 

*  scrollHeight：通过 `document.documentElement.scrollHeight` 、`document.body.scrollHeight` 可以获取;
* scrollTop：通过`window.pageYOffset` 、 `document.documentElement.scrollTop` 、 `document.body.scrollTop` 可以获取;（*window.scrollY也可以，只是ie根本不支持。[点此查看](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)*）
* clientHeight：通过`window.innerHeight` 、 `document.documentElement.clientHeight` 、 `document.body.clientHeight` 可以获取;

下面我先附上我的大致测试结果图（页面代码和测试表格数据最后附上）
![123.png](https://upload-images.jianshu.io/upload_images/1464420-7e31f2e6b4aa8591.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

从第一行数据可以看出来，2000(content)+2*2(border)+20(margin-top)=2024才是全部内容。故`var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);` 。
第二行数据，`window.pageYOffset` 不支持ie8；另外查询其他文档得知，`document.documentElement.scrollTop` 和 `document.body.scrollTop` 只会生效一个；window.scrollY也是一样的功能，但是兼容性比第一个还差（[点此查看](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)）。故`var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;`。
第三行数据：显而易见，数字小的那个才是窗口可是区域高度。故`var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);`。
### 所以最后的js代码如下：
```swift
    window.onscroll= function(){
        //文档内容实际高度（包括超出视窗的溢出部分）
        var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        //滚动条滚动距离
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //窗口可视范围高度
        var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
        
        if(clientHeight + scrollTop >= scrollHeight){
            console.log("===加载更多内容……===");
        }

    }
```
## jquery的实现方式
代码如下：
```swift
<script>
    $(window).on("resize scroll",function(){
             
        var windowHeight = $(window).height();//当前窗口的高度             
        var scrollTop = $(window).scrollTop();//当前滚动条从上往下滚动的距离            
        var docHeight = $(document).height(); //当前文档的高度 
        console.log(scrollTop, windowHeight, docHeight);
        //当 滚动条距底部的距离 + 滚动条滚动的距离 >= 文档的高度 - 窗口的高度  
        //换句话说：（滚动条滚动的距离 + 窗口的高度 = 文档的高度）  这个是基本的公式  
        if (scrollTop + windowHeight >= docHeight) { 
            console.log("===加载更多数据===");
        }
    });
</script>
```

#### 测试页面代码：
```swift
<!-- <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<style>
* {
    margin: 0;
    padding: 0;
}
.scroll{
    margin-top:  20px;
    border: 2px solid #00f;
    height: 2000px;
}
</style>
</head>
<body>
<div class="scroll">
    <br><br><br><br><br><br><br>
    sdhfiahdifashdifhid
    <span id="js_con"></span>
</div>
<script>
    window.onscroll= function(){
        var str = '';
        // str += window.scrollY+",";//ie不支持。
        str += "("+document.documentElement.scrollHeight+","+document.body.scrollHeight+"),";
        str += "("+window.pageYOffset+","+document.documentElement.scrollTop+","+document.body.scrollTop+"),";
        str += "("+window.innerHeight+","+document.documentElement.clientHeight+","+document.body.clientHeight+"),";
        document.getElementById('js_con').innerHTML = str;
        console.log(str);
    }
</script>
</body>
</html>
```

####测试结果：

| 获取方式  | chrome 66  | firefox59  | edge | ie8 |
|:------------- |:-------------:|:-------------:|:----------:|  ------------:|
| document.documentElement.scrollHeight，document.body.scrollHeight     | (2024,2004) |  (2024,2004) | (2024,2004) | (2024,2004)|
| window.pageYoffset，document.documentElement.scrollTop，document.body.scrollTop   | (100,100,0) |  (132,132,0) | (94,94,0) | (undefined,94,0)  |
| window.innerHeight，document.documentElement.clientHeight，document.body.clientHeight | (636,636,2004) | (619,619,2004) | (628,628,2004) | (undefined,624,2004) |

#### 参考：
* [滚动条 clientHeight、offsetHeight、scrollTop。](http://hbiao68.iteye.com/blog/2213198)
* [JavaScript滚动到底部触发加载数据](https://blog.csdn.net/lovetea99/article/details/52025891)
* [Window pageXOffset 和 pageYOffset 属性](http://www.runoob.com/jsref/prop-win-pagexoffset.html)
* [HTML DOM innerheight、innerwidth 属性](http://www.w3school.com.cn/jsref/prop_win_innerheight_innerwidth.asp)
* [Window.scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)
