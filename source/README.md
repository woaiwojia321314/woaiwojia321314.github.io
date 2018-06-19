# 博客网站使用手册
---

## 目录

- [官网](#官网)
- [日常发文](#日常发文)
  - [日常发博文流程](#日常发博文流程)
  - [常用命令](#常用命令)
- [日程安排](#日程安排)


## 官网

- [Hexo 官网](https://hexo.io/zh-cn/)
- [NexT 主题](http://theme-next.iissnan.com/)

## 日常发文

### 日常发博文流程

1. 打开 typora 写博文
2. //清空静态文件夹 / 生成静态文件 / 浏览器预览效果
3. hexo clean && hexo g && hexo s
5. git命令提交或 github 桌面端提交项目源码（gh-dev 分支）
6. hexo deploy #发布部署（master 分支）

### 常用命令

常见命令：

```swift
hexo new "postName" #新建文章
hexo new page "pageName" #新建页面
hexo generate #生成静态页面至public目录
hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo deploy #部署到GitHub
hexo help  # 查看帮助
hexo version  #查看Hexo的版本
```

缩写：

```swift
hexo n == hexo new
hexo g == hexo generate
hexo s == hexo server
hexo d == hexo deploy
```
组合命令：

```swift
hexo s -g #生成并本地预览
hexo d -g #生成并上传
```

多命令一起执行：

```swift
#本地调试
hexo clean && hexo g && hexo s
#发布代码
hexo clean && hexo g && hexo d
```

## 日程安排

ps：待办事项（带有xxx表示未完成）

* 本地项目基本框架搭建     5/22/2018
   * Hexo 安装，NexT 安装和引入。
   * Hexo ，NexT 的一些基本设置。
   * hexo 重用命令熟悉。
* github 的域名绑定，分支创建（gh-dev，master）    5/23/2018
* 搭建过程、主题优化过程碰到的坑等等整理成博文    5/22/2018--now
* 日常发博文：markdown 文本编辑器（typora）、图床神器（ipic，暂时没windows版本）的筛选xxx  5/24/2018
* 添加菜单项：标签、分类、404、站点地图、关于、日程表、资源API、我的足迹、个人简历等等。    5/23/2018
* 集成三方服务：数据统计与分析（百度统计，腾讯分析、不蒜子统计）、阅读次数统计（LeanCloud）、搜索（Local Search）、评论系统（Valine）、分享服务（百度分享）、打赏（xxx）
* 自定义样式：项目/themes/next/source/css/custom/custom.styl  5/23/2018
  * 文本选中颜色修改（默认选中文本背景为黑色，代码块的也是，代码块选中与否分辨不清，故而修改文本选中颜色为蓝色。当然，另外一种方式就是改变代码块的默认背景色，把黑色改成其他淡色就行。）
  * 代码块的代码颜色（如你不满意官方提供的风格，可自行调整）
  * 头像样式修改，添加动画等等。
  * 底栏的标签列表（#字符换成图标），作者的图标修改
* 博客文章内的代码在线运行（codepend，jsFiddle）    5/28/2018
https://hexo.io/zh-cn/docs/tag-plugins.html#jsFiddle
* NexT主题优化（官网没有文档）一【参考教程：https://www.jianshu.com/p/3ff20be8574c 】  5/24/2018
  * (一)  头像设置、浏览页面的时候显示当前浏览进度
  * (二) 开启版权声明、自定义文章底部版权声明、在右上角或者左上角实现fork me on github、修改文章底部的那个带#号的标签、添加顶部加载条、修改网页底部
  * (三) 博文置顶、统计功能（显示文章字数统计,阅读时长,总字数）、修改文章内文本连接样式、每篇文章末尾统一添加“本文结束”标记、文章顶部显示更新时间、修改访问URL路径、给代码块添加复制功能xxx、新建404界面、xxx静态资源压缩gulp
  * (四) SEO 优化sitemap （google和百度收录）
* NexT主题优化（官网没有文档）二    5/27/2018
  * Hexo NexT主题添加点击爱心效果： https://asdfv1929.github.io/2018/01/26/click-love/
  * Hexo NexT主题中添加网页音乐播放器功能xxx：https://asdfv1929.github.io/2018/05/26/next-add-music/
  * 人体时钟引入：hone hone clock
  * 代码块复制功能clipboardjs    6/19/2018
* 评论系统筛选和配置    5/27/2018  
  * gitalk（没配置成功）：https://asdfv1929.github.io/2018/01/20/gitalk/
  * Valine： https://valine.js.org/
  * HyperComments：收费。后期看情况是否使用
