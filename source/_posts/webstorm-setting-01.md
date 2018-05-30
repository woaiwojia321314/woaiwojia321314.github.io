---
layout: pages
title: webstorm11--常见配置（二）
date: 2016-03-15 12:00:00
tags:
- webstorm
---

如果你用过IDE类工具，脑海里都会出现一下常规配置项。比如主题配色，打开多个项目，配置端口（方便其他ip设备访问），文件编码（常规utf-8）,快捷键配置，字体大小颜色风格，插件配置，配置的导入导出（一次配置，到处用）等等。注：File -> Settings，进入配置界面后，尽量用搜索框来快速定位配置项位置。
<!-- more -->

##一、主题配色
主题设置
方法：File -> Settings -> Appearance & Behavior -> Appearance  ->Theme.
![webstorm-setting-02.jpg](http://upload-images.jianshu.io/upload_images/1464420-64cd004473db254c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
配色设置
方法：File -> Settings -> Editor -> Colors & Fonts->Scheme.（*注：如果你是从从Sublime text3转过来的朋友，比较偏好monokia配色的，可以参见此文 [webstorm入门1-主题和配色](http://frontenddev.org/article/webstorm-portal-1-subject-and-match-colors.html)*）
![webstorm-setting-04.jpg](http://upload-images.jianshu.io/upload_images/1464420-904e1eddfec8658d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##二、打开多个项目
WebStorm默认情况下一次只能打开一个项目，这点很不爽，其实是可以设置的。（*注：如果你一开始就建了项目再来配置，记得要把左边显示的根路径移除，不然可能点击Add Content Root配置后也不一定能生效*）
方法：File -> Settings -> Directories -> Add Content Root 中添加你当前的工程目录。

![webstorm-setting-01.jpg](http://upload-images.jianshu.io/upload_images/1464420-27e6ba145c3b70b0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##三、配置webserver选项（端口）
方便其他ip设备访问(如手机等测试效果）
方法：File -> Settings -> Build,Execution,Development -> Debugger ->port

![webstorm-setting-05.jpg](http://upload-images.jianshu.io/upload_images/1464420-bb5a3b9981e70002.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##四、设置文件的默认编码
方法：File -> Settings -> Editor -> File Encodings -> IDE Encoding,Project Encoding.
(*注：配置前和配置后都可以打开页面，在页面的右下角显示有编码，下面截图右下角就有*)

![webstorm-setting-06.jpg](http://upload-images.jianshu.io/upload_images/1464420-77406cc11b2fbc19.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##五、快捷键配置
你可以使用默认快捷键配置，也可以根据自己的风格选择配置。习惯eclipse和myeclipse开发的可以配置成eclipse快捷键。
方法：File -> Settings -> Keymap-> Keymaps

![webstorm-setting-07.jpg](http://upload-images.jianshu.io/upload_images/1464420-973c0099130c94b3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##六、emmet配置，语法等等
上面提到了快捷键，webstorm自带emmet插件。用过zen coding的人应该都知道，emmet就是zen coding的升级版。当然，webstorm也不是支持所有的[emmet语法](http://emmet.evget.com/)，不过够用了。可以参考此文[Enabling Emmet Support](http://www.jetbrains.com/webstorm/help/enabling-emmet-support.html)看看具体情况。
如下图，可以看到css自动加浏览器厂商前缀。

![webstorm-setting-08.png](http://upload-images.jianshu.io/upload_images/1464420-b8b994a6f1f54964.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##七、行号，换行，参考线
打开页面后，右击页面左边边界，弹窗选项，根据自己需要勾选就是，如下图：

![webstorm-setting-09.png](http://upload-images.jianshu.io/upload_images/1464420-4a5e0d02296d1a71.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##八、导入导出配置
当你需要在其他电脑的webstorm上也想用自己编码风格时，将配置文件导入重启webstorm即可生效。
导出方法：File -> Export Settings... ->自己选择选项和路径。用默认也可以。
导入方法：File -> Import Settings... ->选择.jar文件路径。
##九、插件配置
webstorm自带很多插件，你可以根据自己需要配置。我暂时未使用，如果你用到了，可以参考下面的一些文章。
1. SVN、Git插件配置，CSS预处理语言的预编译、JS 实时压缩等等可以参考此文[webstorm入门2-配置](http://frontenddev.org/article/webstorm-portal-2-configuration.html)
2. 使用css预编译器（sass,less）的朋友,可以省掉gulp、grunt类前端辅助工具,参考此文[webstorm入门5-sass、scss、less监听编译](http://frontenddev.org/article/4-sass-webstorm-primer-scss-less-to-monitor-compilation.html)

####参考：
- [webstorm入门1-主题和配色](http://frontenddev.org/article/webstorm-portal-1-subject-and-match-colors.html)
- [webstorm入门5-sass、scss、less监听编译](http://frontenddev.org/article/4-sass-webstorm-primer-scss-less-to-monitor-compilation.html)
- [webstorm入门2-配置](http://frontenddev.org/article/webstorm-portal-2-configuration.html)
- [Enabling Emmet Support](http://www.jetbrains.com/webstorm/help/enabling-emmet-support.html)
- [WebStorm 自定义字体+颜色+语法高亮+导入导出用户设置](http://www.cnblogs.com/dc10101/archive/2013/01/03/2842590.html)
- [Emmet：HTML/CSS代码快速编写神器](http://www.iteye.com/news/27580)
- [emmet语法](http://emmet.evget.com/)
- [Webstorm10.0.3破解程序及汉化包下载、Webstorm配置入门指南](http://www.designlinks.cn/downloads/widget/47.html)
- [webstorm 配置webserver选项，让其他ip设备可访问(如手机等测试效果）](http://www.ithao123.cn/content-36530.html)
- [WebStorm 打开多个项目的方法](http://liuxiaofan.com/2013/12/19/1624.html)
