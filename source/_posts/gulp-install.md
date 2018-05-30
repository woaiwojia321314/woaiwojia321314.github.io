---
layout: pages
title: gulp 安装使用步骤
date: 2016-09-24 11:00:00
categories:
- gulp
tags:
- gulp
---

以 gulp-less 的使用为例讲解gulp的基本安装使用。
<!-- more -->

## 安装nodejs

进入[nodejs官网](https://nodejs.org/en/)，点击硕大的绿色Download按钮，它会根据系统信息选择对应版本（.msi文件）。然后像安装QQ一样安装它就可以了（安装路径随意）。
进入命令行模式，输入`node -v`命令，查看node版本号，有版本号表示安装完成；node里带有npm的，所以也能查看npm版本号（`npm -v`）

## 全局安装gulp

输入`npm install gulp -g`命令，然后用 `gulp -v`查看是否安装完成；
![gulp-install-01.png](http://upload-images.jianshu.io/upload_images/1464420-36f34313d6f4704a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 新建package.json文件

 进入你的本地项目（我的是testgulp），输入`npm init`命令，其中 name, version, description必填，其他无所谓，填完后保存，在testgulp项目下就会生成package.json文件；
```swift
{  "name": "test", //必填
 "version": "1.0.0",  //必填
 "description": "This is for study gulp project !",  //必填
 "main": "index.js", 
 "scripts": {    
    "test": "echo \"Error: no test specified\" && exit 1" 
 },  
"author": "fli",  
"license": "ISC"
}
```
![gulp-install-02.jpg](http://upload-images.jianshu.io/upload_images/1464420-6eb22f459b0b100b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 项目内安装gulp

 用`npm install gulp --save-dev`或 `npm install --save-dev gulp`命令（卸载的话将前面的命令中install换成uninstall即可）；安装完后，在package.json里能看到具体版本信息。

![gulp-install-03.png](http://upload-images.jianshu.io/upload_images/1464420-c10cda7715e20176.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 项目内安装gulp插件

命令格式：`npm install 插件名称 --save-dev`或`npm install --save-dev 插件名称`；

![gulp-install-04.png](http://upload-images.jianshu.io/upload_images/1464420-198f327a97062c24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

安装完后，在package.json里能看到具体版本信息。此时的文件：
```swift
{  
"name": "test", 
 "version": "1.0.0",  
 "description": "This is for study gulp project !",  
 "main": "index.js", 
 "scripts": {    
    "test": "echo \"Error: no test specified\" && exit 1" 
 },  
"author": "fli",  
"license": "ISC",  
"devDependencies": {    
    "gulp": "^3.9.1",    
    "gulp-less": "^3.1.0"  
}
}
```

## 新建gulpfile.js文件

文件如下：
```swift
/*** Created by feili on 2016/9/24. */
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方    
less = require('gulp-less');//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {    
    gulp.src('less/index.less') //该任务针对的文件        
    .pipe(less()) //该任务调用的模块        
    .pipe(gulp.dest('css')); //将会在src/css下生成index.css
});

gulp.task('default',['testLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
```

## 通过命令提示符运行gulp任务

`gulp default`或`gulp 任务名称`。

![gulp-install-05.png](http://upload-images.jianshu.io/upload_images/1464420-e99dd2c98257b652.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
