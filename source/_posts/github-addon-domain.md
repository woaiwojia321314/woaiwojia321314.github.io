---
layout: pages
title: Github 域名绑定
date: 2018-05-23 20:38:08
tags:
- Github
- Godaddy
- DNSPod
- 域名
---

利用 Github pages 搭建静态网页项目时，Github 提个一个和用户名有关的免费域名：username.github.io 。当然如果你不满意，而自己又有个常见格式的域名（.com，.cn等等），那么绑定在一起呢。我是去[godaddy](https://sg.godaddy.com/zh/)购买的域名，据说域名服务商解析比较慢，所以采用了国内的[DNSPod](https://www.dnspod.cn/)
来做域名解析，然后把域名的NS服务器指向 DNSPod。
<!-- more -->

## 获得域名 Godaddy 
首先你要注册一个域名，域名注册可以去去[godaddy](https://sg.godaddy.com/zh/)， 也可以去国内的阿里云，万维网等等。我是去 godaddy 购买的域名（www.missfli.com）。可以参考[此文](https://www.jianshu.com/p/05289a4bc8b2)的购买域名步骤。

绑定域名分2种情况：带www和不带www的。
域名解析配置最常见有2种方式，CNAME和A记录，CNAME填写域名，A记录填写IP，由于不带www方式只能采用A记录。
所以，你就有：购买的域名，github 提供的免费域名，和 github 免费域名IP。

## 在 DNSPod 上添加域名
登录进 DNSPod 的控制界面：
**域名解析 -->添加域名-->输入域名-->确定。**
这样就添加了一个域名到 DNSPod 了。
*（注意：输入域名时，不要带www）*
![3.png](https://upload-images.jianshu.io/upload_images/1464420-5bf2b3e12531a1f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

添加好之后，需要为域名设置各种参数，如A记录，NS地址等。
点击刚才添加的这个域名，进入域名设置界面。在这里，你可以看到DNSPOD已经为你提供了2个NS（Name Server）地址，你需要把这2个地址，在GoDaddy后台控制面板中进行设置（后面会讲）。
![4.png](https://upload-images.jianshu.io/upload_images/1464420-34c5262413c2694f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## DNSPod 设置域名参数
然后将 github 提供的域名和 IP 添加进来，注意看它的规则介绍。
域名配置最常见有2种方式，CNAME 和 A 记录，CNAME 填写域名，A记录填写 IP ，由于不带 www 方式只能采用A记录，所以必须先 ping 一下`你的用户名.github.io`的IP，将A记录指向你ping出来的IP，将 CNAME 指向`你的用户名.github.io`，这样可以保证无论是否添加www都可以访问，如下：
![5.png](https://upload-images.jianshu.io/upload_images/1464420-05e8cbfd8c10ddef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后到你的github项目根目录新建一个名为CNAME的文件（无后缀），里面填写你的域名，加不加www看你自己喜好。

## Godaddy 配置
由于配置了有些久了，截图没有了，就用别人的了。
由于你的域名是在GoDaddy上注册的，也就是说，GoDaddy是该域名的托管商。因此，需要到GoDaddy的控制面板，指定域名的NS服务器。
既然我们打算使用DNSPOD来解析域名，因此，在GoDaddy控制面板就需要把域名的NS设置为DNSPOD提供的地址。在上面第二步中，DNSPOD已经提供了2个NS地址，我们只需要把这2个地址添加到GoDaddy域名NS即可。

进入GoDaddy域名控制面板（登录后，在“My Account”模块下面），目光移向“Nameservers”区域，在该区域有一个“Set Nameservers”链接。这里就是设置域名NS的入口了，如图片五所示。

点击“Set Nameservers”链接，GoDaddy会弹出一个Nameservers设置界面，如图片六所示。在这个设置界面，选择“I have specific nameservers for my domains”单选按钮，在下面的文本框中，输入DNSPOD所提供的2个NS地址，设置好之后，点击【OK】，大功告成！

这个时候，你只需要泡上一杯咖啡，等待10-15分钟，域名解析就能够生效啦！
![6.png](https://upload-images.jianshu.io/upload_images/1464420-0dab1206da30d31d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
配置完后，查看域名相关信息：
![2.png](https://upload-images.jianshu.io/upload_images/1464420-765af381a2df0a61.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 总结
大致步骤：
* Godaddy上购买域名：www.missfli.com 。
* github 上的 `woaiwojia321314.github.io` 域名和该域名的  IP，并在该 `xxx.github.io`项目库的根目录，新建个CNAME文件，里面添加上购买的域名 www.missfli.com  。
* DNSPod 上配置：添加购买域名(www.missfli.com)，然后添加`woaiwojia321314.github.io`和该域名IP。
* Godaddy 上配置：DNSPOD提供的2个NS地址配置到 Godaddy 上。


#### 参考
* [怎样将Godaddy域名解析到DNSPOD](https://jingyan.baidu.com/article/39810a23c5a3a3b636fda699.html)
* [github怎么绑定自己的域名？](https://www.zhihu.com/question/31377141)


