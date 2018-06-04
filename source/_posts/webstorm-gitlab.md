---
layout: pages
title: webstorm+gitlab 项目开发流程
date: 2018-06-04 11:00:00
tags:
- webstorm
- gitlab
---

以前都是作为一个 三方开发者 clone 别人的项目下来修改，现在需要自己作为项目的初始创建者发项目，碰到了不少坑。
<!-- more -->

## gitlab 创建项目和分支

### 创建项目
登录账号，找到自己的项目分组，new project 。（找管理员或领导给你分配对应的创建项目权限）
![gitlab-01.png](https://upload-images.jianshu.io/upload_images/1464420-49461240e9930a9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 创建分支
这里跟 github 有点不太一样，github 创建一个项目后，有个默认的 master 分支。而 gitlab 没有，你注意上图中左边的目录，没有`Files`，也就是说看不到项目目录。
当然，gitlab 提供了创建详细的步骤和命令。

**ps：按照它给的步骤和命令一步一步执行完即可，此步骤不需要提交代码那部分，故而截图都没截。中间别漏掉一些命令，我试过，反正各种报错。**

去 gitlab 上，进入到你创建的项目，可以看到`Files`，点进去后，能看到分支，就表示创建分支成功。
![gitlab-02.png](https://upload-images.jianshu.io/upload_images/1464420-56940686abe6008d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## webstorm 提交项目代码
当然，此步骤也可以直接用之前的 gitlab 创建项目步骤的命令方式提交。也可以用 webstorm 图形界面提交代码。看个人偏好了，我是实用主义者，图形界面省事。出现问题时，再开启命令模式。
右键项目 --> Git --> Add --> Commit Directory... --> Push 。去 gitlab 确认代码是否提交成功。
*（首次提交代码时会要求你输入账号和密码，就是你 gitlab 的账号和密码，然后勾上记住密码就行。）*
![webstorm-pushcode.png](https://upload-images.jianshu.io/upload_images/1464420-39fb9ce497fdfa3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 总结
上面是项目首次创建和代码提交的流程。
如果你是三方开发者，你只需要clone 下来项目，然后修改提交代码就行。
clone 项目：
VCS --> Checkout from Version Control --> Git ，

![webstorm-git0.png](https://upload-images.jianshu.io/upload_images/1464420-0a6ddf5c6704e80d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

输入相应的远程代码库 url ，本地代码库目录，项目名字。

![webstorm-git1.png](https://upload-images.jianshu.io/upload_images/1464420-004fe94998dcfd76.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

点击 test ，测试与远程代码库是否连接成功。输入相应的账号和密码，勾上记住密码。

![webstorm-git2.png](https://upload-images.jianshu.io/upload_images/1464420-87fe58900786d2ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

项目 clone 下来后，本地修改调试代码。需要提交代码时，右键项目或修改的文件目录或文件，然后 Git --> Add --> Commit Directory... --> Push 。

![webstorm-pushcode.png](https://upload-images.jianshu.io/upload_images/1464420-7169ea0520c44ff4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





