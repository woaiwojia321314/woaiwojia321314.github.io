---
layout: pages
title: js ==和===以及Object.is区别
date: 2018-06-22 17:30:00
categories:
- js
tags:
- js
---

平时经常用到数据比较，会用到不少特殊值（`NaN, '', null, undefined, 0, +0, -0,`），这里整理一下数据比较方式（`==和===以及Object.is`）的区别。
<!-- more -->

## ==和===以及Object.is区别

JavasSript 是弱类型。==比较时，是值比较；===比较时，是类型和值比较；Object.is()比较时，跟===一样，但又有些区别。下面会一一介绍。

首先，`==`因为是值比较，故而在一些情况下会自动做类型转换再比较。也就是常说的js隐式转换。这里啰嗦一下，大致讲一下隐式转换。大多数情况下，大致遵守下面的规律：
![js隐式转换.png](https://upload-images.jianshu.io/upload_images/1464420-6e0c14072d7465f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
代码：
```swift
0 == ' ' //true
null == undefined //true
[1] == true //true
```
特例：
```swift
[] == false  //true
![] == false //true
```
其次，`===`比较时，就是类型和值的比较了。大多数情况下我们会用===而不是==，至少在es5的版本里是这样的。
```swift
''===0 //false
'0'===0 //false
```
ps：最特殊的就是NaN了，在ES5的版本里，无论是==还是===，不管谁更NaN比较都是false，包括跟它自己比较。
```swift
NaN==NaN //false
NaN=='' //false
NaN==0 //false
NaN==null //false
NaN==undefined //false
```

最后，ES6 中提供了新的 [Object.is() ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)方法，它具有 === 的一些特点，而且更好、更精确，在一些特殊案例中表现的很好：
```swift
Object.is(0 , ' '); //false
Object.is(null, undefined); //false
Object.is([1], true); //false
Object.is(NaN, NaN); //true，特别是这个
```
ps: Object.is()方法不兼容ie。

总结，来看看这三者的对比表：
![pCyqkLc.png](https://upload-images.jianshu.io/upload_images/1464420-81cb4cda76004182.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 参考
- [js中的隐式转换](https://www.cnblogs.com/chenmeng0818/p/5954215.html)
- [为什么你应该在相等比较中使用 Object.is()](http://www.jstips.co/zh_cn/javascript/why-you-should-use-Object.is()-in-equality-comparison/)
-  [Object.is() ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
