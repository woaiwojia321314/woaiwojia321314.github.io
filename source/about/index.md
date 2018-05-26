---
title: 关于日常发文
date: 2018-05-23 09:25:47
---

[Hexo 官网](https://hexo.io/zh-cn/)
[NexT 主题](http://theme-next.iissnan.com/)

## 日常发文

### 日常发博文流程
1. 打开 typora 写博文
2. hexo clean #清空静态文件夹
3. hexo generate #生成静态文件
4. hexo server #浏览器预览效果
5. git命令提交或 github 桌面端提交项目源码（gh-dev 分支）
6. hexo deploy #发布部署（master 分支）

### Hexo 常用命令
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

## 在线API文档
* [ ES6 ](http://es6.ruanyifeng.com/)
* [ Node.js ](https://nodejs.org/en/)
* [ Vue.js 2.x ](https://vuefe.cn/)
* [ vue-router ](https://router.vuejs.org/zh-cn/) 
* [ Vuex ](https://vuex.vuejs.org/zh-cn/) 
* [ webpack ](https://webpack.js.org/)
* [ Element ui ](http://element.eleme.io/#/zh-CN)
* [ axios ](https://github.com/axios/axios)
* [ Mock.js ](http://mockjs.com/)
* [ Echarts ](http://echarts.baidu.com/) 
* [ 百度地图 ](http://lbsyun.baidu.com/index.php?title=jspopular)
* [ UEditor ](http://ueditor.baidu.com/website/)

## 日常安排

### 待办事项
* [x] 本地项目基本框架搭建
* [x] github 的域名绑定，分支创建（gh-dev，master）
* [x] 搭建过程，碰到的坑等等整理成博文
* [] markdown 文本编辑器、图床神器的筛选
* [x] 添加菜单项：标签、分类、404、站点地图、关于、日程表、资源API、我的足迹等等。
* [x] 集成三方服务：数据统计与分析（百度统计，腾讯统计）、阅读次数统计（LeanCloud）、搜索（Local Search）、评论系统（xx）、分享服务（百度分享）、打赏（暂时不用）
* [x]自定义样式：项目/themes/next/source/css/custom/custom.styl
* []博客文章内的代码在线运行：https://hexo.io/zh-cn/docs/tag-plugins.html#jsFiddle

### 任务完成情况
* 5/22/2018 
  1. 本地项目基本框架搭建：Hexo 安装，NexT 安装和引入。
  2. Hexo ，NexT 的一些基本设置。
  3. hexo 重用命令熟悉。
* 5/23/2018 
  1. 添加菜单分类页面：默认自带：首页，归档；其他需要手动添加，比如：标签，分类，关于，404，资源API。
  2. Github 的域名绑定。
  3. Github 的项目代码库 woaiwojia321314.github.io 的分支创建：gh-dev 存放项目源码；master 分支存放转化后的html静态网页代码（就是发布代码）。
* 5/24/2018  
  1. 将个人博客网站搭建的流程整理成博文。
  2. 在线 markdown 编辑可以直接用简书，语法差不多，所以可以赋值过来形成博文。
  3. 为了方便日后写md文件，准备采用typora（markdown文本编辑器），图床神器 ipic（暂时没找到windows版本），先用着，后续再处理，因为项目的必需的一些插件服务还未加上。
* 5/26/2018  
  1. xxx