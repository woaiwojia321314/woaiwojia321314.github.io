---
layout: pages
title: Github 创建分支
date: 2018-05-24 10:23:00
categories:
- Git
tags:
- Git
- Github
---

[文章出处](https://blog.csdn.net/top_code/article/details/51931916)    
git 管理分钟的相关命令。

<!-- more -->

## clone 项目代码库

clone Github 上的Repository，如下：
`git clone git@github.com:xxx/xxxx.git`

## 管理分支

### 查看分支
* 查看本地分支
使用 git branch命令，如下：
```swift
$ git branch
* master
```
*标识的是你当前所在的分支。

* 查看远程分支：`git branch -r`
* 查看所有分支：`git branch -a`

### 本地创建新的分支
命令：`git branch [branch name]`
栗子：`git branch gh-dev`

### 切换到新分支
命令：`git checkout [branch name]`
栗子：
```swift
Ricky@DESKTOP-1QPASTR MINGW64 /f/Git_Studio/design-patterns (master)
$ git checkout gh-dev
Switched to branch 'gh-dev'

Ricky@DESKTOP-1QPASTR MINGW64 /f/Git_Studio/design-patterns (gh-dev)
```
### 创建+切换分支
创建分支的同时切换到该分支上：`git checkout -b [branch name]`
git checkout -b [branch name] 的效果相当于以下两步操作：
```swift
git branch [branch name]
git checkout [branch name]
```
### 将新分支推送到github
命令：`git push origin [branch name]`
例如：`git push origin gh-dev`

### 删除本地分支
命令：`git branch -d [branch name]`
例如：`git branch -d gh-dev`

### 删除github远程分支
命令：`git push origin :[branch name]`
分支名前的冒号代表删除。 
例如：`git push origin :gh-dev`

