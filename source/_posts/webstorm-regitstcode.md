---
layout: pages
title: webstorm11--激活破解总结
date: 2018-05-29 17:20:00
categories:
- webstorm
tags:
- webstorm11
---

网上的方法很多，什么注册机，输入 server 地址等等，特别是输入地址的，总会出现用了一段时间就会不行了，现在整理了网上了一些靠谱点的方法。
<!-- more -->

##　License server 输入网址
注册时，在打开的　License Activation　窗口中选择　“License server”　，在输入框输入下面的网址：
- [http://hb5.s.osidea.cc:1017](http://hb5.s.osidea.cc:1017/) （2018.4.23日）
- [http://hb5.s.osidea.cc:1017](http://hb5.s.osidea.cc:1017/)(最新 18/05/10)
- [http://im.js.cn:8888](http://im.js.cn:8888/) (新,感谢 [ qq_34394012 ])
- [http://hb5.s.osidea.cc:1017](http://hb5.s.osidea.cc:1017/) ( 新,感谢[ [cometwo](https://blog.csdn.net/libin_1) ] )
- [http://idea.lanyus.com](http://idea.lanyus.com/) ( 新.感谢[ weixin_38627258 ] )

点击：Activate即可。

网友分享 : [感谢 weixin_41405655 ]

```swift
===== LICENSE BEGIN =====
37362-12042010
00000!enirob"h4FBnAgcpdNnIZydA
9AikY7i7Ecn7GW7EvybU"YwuAPkdCw
Qn7Fp!9FpNvujTEghtbTGz1DutM216
===== LICENSE END =====
```

复制 license begin 和 license end 之间的一段代码可以用

##　获取注册码
打开网址（[IntelliJ IDEA 注册码](http://idea.lanyus.com/)），我们能看到下面的界面，直接点击获取激活码，将生成的激活码粘贴到 WebStorm 激活对话框中的 Lisence Code 输入框，点击OK即可破解。

![webstorm-registe-code.png](https://upload-images.jianshu.io/upload_images/1464420-19867659962e83b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 使用破解补丁(推荐)
### 1. 拿到 jar 破解补丁文件
去我的百度网盘下载（2018版）：
链接：https://pan.baidu.com/s/1O8-NW_e9rsoTrQ1u1qjs7w 密码：26mm
或去[官网](http://idea.lanyus.com/)下载，如下图：

![webstorm-registe-code2.png](https://upload-images.jianshu.io/upload_images/1464420-23ce880ac7e7b9b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2. 修改配置文件
将补丁复制到安装目录的bin目录下：
`C:\Program Files\JetBrains\WebStorm 2017.1.3\bin`

修改同目录下的 WebStorm.exe.vmoptions 和WebStorm64.exe.vmoptions，这两个文件一个是32位的，一个是64位的，建议同步修改。
用文本编辑器打开之后，在文件最上面加一行代码 ：
`-javaagent:C:\Program Files\JetBrains\WebStorm 2017.1.3\bin\JetbrainsCrack-2.7-release-str.jar`

![webstorm.png](https://upload-images.jianshu.io/upload_images/1464420-26cdf0414e0319db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

配置好之后，保存文件。在此再次启动 WebStorm ，就会看到下面所示界面，至此补丁激活就成功了。

![webstorm-4.png](https://upload-images.jianshu.io/upload_images/1464420-2ca410f848d0165a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 自己搭建IntelliJ IDEA授权服务器
比较繁琐，自己去折腾，给你个[传送门](http://blog.lanyus.com/archives/174.html)。
