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