
---
layout: pages
title: apache tomcat6.0 支持sthml
date: 2017-06-26 21:05:00
tags:
- tomcat6
---

* ####1.修改web.xml文件
把<!-- URL pattern "*.shtml". This servlet supports the following -->后面的<servlet>相关注释去掉。

![](http://upload-images.jianshu.io/upload_images/1464420-5d02ab3035c8c2bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

去掉<!-- The mapping for the SSI servlet --> 后面<servlet-mapping>的注释

![3.png](http://upload-images.jianshu.io/upload_images/1464420-daa70acb74151eaf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* ####2.修改context.xml
给Context加一个`privileged="true"`，重启动tomcat ,如果发现网页是乱码则在ssi servlet 中加如下代码
```swift
<init-param>
    <param-name>inputEncoding</param-name>
    <param-value>utf-8</param-value>
    </init-param>
    <init-param>
    <param-name>outputEncoding</param-name>
    <param-value>utf-8</param-value>
</init-param>
 ```

![4.png](http://upload-images.jianshu.io/upload_images/1464420-73d0e2b796c2f2a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

修改完后重新启动服务器即可！
