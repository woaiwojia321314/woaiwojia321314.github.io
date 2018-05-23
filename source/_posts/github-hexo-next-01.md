
---
layout: pages
title: GitHub Pages + Hexo（NexT主题）搭建博客
date: 2018-05-23 15:39:04
categories:
- Hexo
tags:
- Github
- Hexo
- NexT
---

由于曾经搭建过，但是不小心删掉了本地电脑上的源码，而 github 上也只有生成后的html页面代码，导致了没法继续发布新文章。并且那会儿倒腾的有些久，断断续续的弄得，也没写博文记录。现在重新搭建一次，并且记录一下。
<!-- more -->

## 准备工作
### 域名
我的域名：www.missfli.com ，不愿意花钱就跳过此步骤。
去[godaddy](https://sg.godaddy.com/zh/)购买域名，英文，中文的话选择新加坡或台湾香港都行，基本都能懂。购买的教程，可以参考[此文](https://www.jianshu.com/p/05289a4bc8b2)的 **购买域名** 步骤。
### 环境技术
[GitHub Pages](https://pages.github.com/) 用到了github，那就来个github桌面版，图形化界面，好用，你要喜欢命令模式也行。 
[Hexo](https://hexo.io/zh-cn/) 的安装前提就是得有 Node.js 和 Git 。
这里，我们要区分清楚git与github。git是一个版本控制的工具，而github有点类似于远程仓库，用于存放用git管理的各种项目。
下面提供相关的官方版本地址，安装教程去网上搜一下就很多。
* Node 官方版本安装：https://nodejs.org/en/
* Git 官方版本安装：https://git-scm.com/download/win
* Github桌面版安装：https://desktop.github.com/
### Git 配置
当安装完Git应该做的第一件事情就是设置用户名称和邮件地址。这样做很重要，因为每一个Git的提交都会使用这些信息，并且它会写入你的每一次提交中，不可更改：
```swift
$ git config --global user.name "username"
$ git config --global user.email "username@example.com"
```
对于user.email，因为在GitHub的commits信息上是可见的，所以如果你不想让人知道你的email，可以Keeping your email address private:
1. 在GitHub右上方点击你的头像，选择”Settings”；
1. 在右边的”Personal settings”侧边栏选择”Emails”；
1. 选择”Keep my email address private”。

这样，你就可以使用如下格式的email进行配置：
`$ git config --global user.email "username@users.noreply.github.com"`

## Github 配置
### 创建仓库 new repository
在自己的GitHub账号下创建一个新的仓库，命名为username.github.io（username 是你的账号名)。

在这里，要知道，GitHub Pages有两种类型：User/Organization Pages 和 Project Pages，而我所使用的是User Pages。

简单来说，User Pages 与 Project Pages的区别是：

1. User Pages 是用来展示用户的，而 Project Pages 是用来展示项目的。
1. 用于存放 User Pages 的仓库必须使用username.github.io的命名规则，而 Project Pages 则没有特殊的要求。
1. User Pages 将使用仓库的 master 分支，而 Project Pages 将使用 gh-pages 分支。
1. User Pages 通过 http(s)://username.github.io 进行访问，而 Projects Pages通过 http(s)://username.github.io/projectname 进行访问。

另外注意：
*  注册的邮箱一定要验证，否则不会成功；
* 仓库名字必须是：username.github.io，其中username是你的用户名；
* 仓库创建成功不会立即生效，需要过一段时间，大概10-30分钟，或者更久，我的等了半个小时才生效；

**创建仓库** 借用别人的图：
![new-repository.png](https://upload-images.jianshu.io/upload_images/1464420-ec89ff7605fb8739.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 绑定域名
如果你没购买域名，就用github提供的默认的 xxx.github.io 来访问，可忽略此步骤。
具体的绑定步骤，参考此文[Github 域名绑定](https://www.jianshu.com/p/be3ca7841484)


## 配置SSH key
为什么要配置这个呢？因为你提交代码肯定要拥有你的github权限才可以，但是直接使用用户名和密码太不安全了，所以我们使用ssh key来解决本地和服务器的连接问题。
1. 检查电脑是否已经有SSH KEYS。
`$ ls -al ~/.ssh`
默认情况下，public keys的文件名是以下的格式之一：id_dsa.pub、id_ecdsa.pub、id_ed25519.pub、id_rsa.pub。因此，如果列出的文件有public和private钥匙对（例如id_ras.pub和id_rsa），证明已存在SSH keys。如果提示：No such file or directory 说明你是第一次使用git。

2. 如果没有SSH KEY，则生成新的SSH KEY。
`ssh-keygen -t rsa -C "your_email@example.com"`
然后连续3次回车，最终会生成一个文件在用户目录下，打开用户目录，找到`.ssh\id_rsa.pub`文件，记事本打开并复制里面的内容，打开你的github主页，进入个人设置 -> SSH and GPG keys -> New SSH key：

![image](http://upload-images.jianshu.io/upload_images/1464420-c0db2cf48e955749.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

将刚复制的内容粘贴到key那里，title随便填，保存。

3. 测试是否成功
`$ ssh -T git@github.com`

如果提示`Are you sure you want to continue connecting (yes/no)?`，输入yes，然后会看到：

> Hi liuxianan! You've successfully authenticated, but GitHub does not provide shell access.

看到这个信息说明SSH已配置成功！

此时你还需要配置：
```
$ git config --global user.name "liuxianan"// 你的github用户名，非昵称
$ git config --global user.email  "xxx@qq.com"// 填写你的github注册邮箱
```
具体这个配置是干嘛的我没仔细深究。

以上的配置流程，我是用的别人的，给你看个我运行的命令截图：
![ssh-key.png](https://upload-images.jianshu.io/upload_images/1464420-f9ad654379dc006f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 安装Hexo

[Hexo](https://hexo.io/zh-cn/) 官网有详细步骤。

注意事项：
1. 很多命令既可以用Windows的cmd来完成，也可以使用git bash来完成，但是部分命令会有一些问题，为避免不必要的问题，建议全部使用git bash来执行；
1. hexo不同版本差别比较大，网上很多文章的配置信息都是基于2.x的，所以注意不要被误导；
1. hexo有2种_config.yml文件，一个是根目录下的全局的_config.yml，一个是各个theme下的，在配置文件中修改时，冒号后面必须有一个空格，否则可能会出问题；

### Hexo 创建项目
打开你 Git Bash ，进入到你项目所在目录：
```swift
#Hexo 的安装
$ npm install hexo-cli -g
#查看版本，确认是否安装成功
$ hexo -version 
#建站
$ hexo init <project-name>
$ cd <project-name>
$ npm install
#生成静态页面（markdown文件转化为html文件）
$ hexo generate
#网站预览（默认的主题风格landscape）
$ hexo server
```

## NexT 安装
你要是愿意用自带的 langscape 主题，可忽略此步骤。
[NexT ](http://theme-next.iissnan.com/) 官网也有详细的步骤，文档也很详细，按照文档一步一步的设置一些基本和常用功能。
网址：http://theme-next.iissnan.com/getting-started.html

#### 安装 NexT
* 下载主题
在终端窗口下，定位到 Hexo 站点目录下。使用 Git checkout 代码：
```swift
$ cd your-hexo-site
$ git clone https://github.com/iissnan/hexo-theme-next themes/next
```
* 启用主题
打开站点配置文件_config.yml
`theme: next`
* 验证主题
验证相关配置是否正确：
`hexo s --debug`
提示：
INFO  Hexo is running at http://0.0.0.0:4000/. Press Ctrl+C to stop.
此时即可使用浏览器访问 http://localhost:4000，检查站点是否正确运行。

#### NexT 主题设定
* 选择风格 Scheme
* 设置 界面语言
* 设置 菜单
* 设置 侧边栏
* 设置 头像
* 设置 作者昵称
* 设置 站点描述

### NexT 集成常用的第三方服务
* 百度统计
* 阅读次数统计（LeanCloud）
* Algolia 搜索

### 其他的设置和三方插件服务引入
其他的设置和三方插件服务引入，官方没有或遇到了一些坑，后面再单独写博文记录。

## 常用hexo命令
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

## 发布到 github

首先，ssh key肯定要配置好。
其次，配置_config.yml中有关deploy的部分。
默认生成的_config.yml：
```swift
# Deployment
## Docs: http://hexo.io/docs/deployment.html
deploy:
  type:
```
修改后的_config.yml：
```swift
deploy:
  type: git
  repo: 对应仓库的SSH地址（可以在GitHub对应的仓库中复制）
  branch: 分支（User Pages为master，Project Pages为gh-pages）
```
为了能够使Hexo部署到GitHub上，需要安装一个插件：
`$ npm install hexo-deployer-git --save`
然后，执行下列指令即可完成部署：
```swift
$ hexo generate
$ hexo deploy
```
之后，可以通过在浏览器键入：username.github.io进行浏览，开心吧~

## 优化部署与管理
常规方式是将生成后的 html 代码发布到 github 上，源码在本地，但是这种方式有个缺点，就像我之前那样不小心删掉后就悲剧了，而且如果换个电脑也没法发文 了。所以想将源码和转换化后的html代码都保留在github上。

## 保留CNAME、README.md等文件??
CNAME、README.md等文件放在source目录下。

## 404页面??
GitHub Pages有提供制作404页面的指引：[Custom 404 Pages](https://help.GitHub.com/articles/custom-404-Pages)。
直接在根目录下创建自己的 404.html 或者 404.md 就可以。但是自定义404页面仅对绑定顶级域名的项目才起作用。
推荐使用[腾讯公益404](http://www.qq.com/404)。

## 图床??
可用七牛（10G空间，免费）。

#### 参考
* [GitHub Pages + Hexo搭建博客](http://crazymilk.github.io/2015/12/28/GitHub-Pages-Hexo%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/#more)
* [如何搭建一个独立博客——简明Github Pages与Hexo教程](https://www.jianshu.com/p/05289a4bc8b2)
* [使用hexo+github搭建免费个人博客详细教程](http://www.cnblogs.com/liuxianan/p/build-blog-website-by-hexo-github.html)
* [搭建个人博客-hexo+github详细完整步骤](https://www.jianshu.com/p/189fd945f38f)