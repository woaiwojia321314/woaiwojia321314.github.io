---
layout: pages
title: IP 定位查询
date: 2018-05-23 20:10:08
tags:
- IP
---

有时候需要访客位置信息，这时你如果拿到访客的ip，那么通过下面的ip定位的方法就能做到了。搜集了不少资料，大致罗列了网上的方法，希望对你有用。国内国外大致就这些：淘宝，腾讯，新浪，百度，IP2Location,DB-IP,纯真IP数据库，MaxMind GeoLite2，当然还有其他的。
<!-- more -->

## 调用三方的接口
推荐新浪接口，我用了一些常用和非常用ip（根据国内外大网站的域名查询出来的ip,文章末尾会将ip列举出来）做了个大致的查询比较。
* 新浪接口：http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=54.239.25.200
* 淘宝接口：http://ip.taobao.com/service/getIpInfo.php?ip=123.123.123.123
* IP查询：http://www.ipip.net/ip.html

## 调用自己本地数据库
这种方法就要你去网上下载相应的纯真IP数据库了。
* [http://www.ipip.net/](http://www.ipip.net/)
* [http://lite.ip2location.com/](http://lite.ip2location.com/)
* [https://www.maxmind.com/zh/geoip2-services-and-databases](https://www.maxmind.com/zh/geoip2-services-and-databases)

## 在线查询

* [https://www.ipip.net/](https://www.ipip.net/)免费版有1000次/天限制
* [http://www.haoweichi.com/Index/iplocate](http://www.haoweichi.com/Index/iplocate)
* [http://www.ip138.com/ips1388.asp](http://www.ip138.com/ips1388.asp)
* [http://ip.lockview.cn/default.aspx](http://ip.lockview.cn/default.aspx)
* [http://www.123cha.com/](http://www.123cha.com/)

**IP列表**

* 这几个比较偏：31.13.79.220，103.235.46.212，31.13.79.220，23.15.152.48，182.215.11.168，208.111.59.15
* www.google.com ：208.111.59.15/19/23/27/29/30/34/38/42/44/45/49/53/57/59,93.46.8.89
* www.microsoft.com ：118.215.11.168,182.215.11.168
* www.apple.com/cn ：23.15.152.48,17.142.160.11,17.172.224.30,17.178.96.11
* www.focebook.com ：31.13.79.220,179.60.192.3
* www.twitter.com ：104.244.42.193/65
* www.youtube.com ：74.125.200.136/190/91/93,216.58.211.46
* www.philips.com ：118.215.81.147
* www.linkedin.com ：103.20.94.1
* www.amazon.com ：54.239.25.200,54.239.29.3
* www.baidu.com ：14.215.177.37/38,103.235.46.212
* www.alibaba.com ：205.204.101.42,110.75.112.20,140.205.94.148
* www.qq.com ：101.226.103.106

