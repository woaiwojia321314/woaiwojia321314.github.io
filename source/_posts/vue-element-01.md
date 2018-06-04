---
layout: pages
title: vue+element ui 之一：环境搭建和项目创建
date: 2018-05-06 13:22:00
categories:
- Vue2
tags:
- Vue2
- Element
---

替换老技术ext.js，故而用[Element UI](http://element-cn.eleme.io/#/zh-CN/component/installation)。

node安装（npm跟node是配套的，无须单独安装），去[官网](https://nodejs.org/en/)下载安装就行。如果你已经有了，但是版本低了，需要升级，可以参考[此文](https://www.jianshu.com/p/c46a45d177cb)。
**Vue + Element UI 的项目搭建有两种方式：**
<!-- more -->

## 一、直接用 Element 的项目模板
Element 脚手架方式，[点此去](https://github.com/ElementUI/element-starter)：
```swift
# 克隆项目 
$ git clone https://github.com/ElementUI/element-starter.git
# 查看目录
$ ls
# 进入项目目录
$ cd element-starter
# 安装相关依赖包
$ yarn
# 运行
$ npm run dev
# 打包压缩
$ npm run build
```

## 二、先搭建Vue项目，再引入Element UI
注：
1、查看 node,npm,vue,webpack 版本：`xx -v`，命令不对是，用`xx -help`查看相关命令。比如：`node -v`，`node -help`。（特例：vue 查看版本 `vue -V`）
2、需要再多个项目用的的用全局安装   `npm install xx -g 或 --global`，只是某个项目里用到的，进入该项目目录，再安装 `npm install xx   --save-dev 或 -D`。

```swift
# 安装node和npm（直接用的官网的安装文件安装的），查看一下版本号可以确认安装成功
$ node -v
$ npm -v
# 安装vue，查看版本 vue -V
$ npm install vue@2.5.2 -g
# 全局安装 vue-cli
$ npm install vue-cli -g
# 安装webpack
$ npm install webpack -g
# 创建一个基于 webpack 模板的新项目my-project
$ vue init webpack my-project
# 进入项目目录
$ cd my-project
# 安装依赖，走你
$ npm install XX
# 运行项目
$ npm run dev
# 打包项目
$ npm run build
# 到此，vue的脚手架项目创建完成
# 再引入element ui相关东西（i: install, -D: --save -dev）：
$ npm i element-ui@2.3.6 -D
```
## 相关目录情况
项目创建完后的相关目录介绍如下图：
![20180227145151434.png](https://upload-images.jianshu.io/upload_images/1464420-7036af73aa0a1ea9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**注意：**
### assets和static目录：
assets存相对路径用的图片，会打包进js里，不方便更换图片，如logo,导航的背景图和icon等等。
static存绝对路径用的图片，可随时更换，如商品图片和产品图片等等。
做了一个小测试：同时在两个目录下,放入同名的css和图片。在打包后，css不会有影响，因为命令不同，图片最终会被static覆盖。看下图：
![assets-static.png](https://upload-images.jianshu.io/upload_images/1464420-7641e610d28c2900.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### index.js配置文件比较重要，需要熟悉里面的每项配置。
```swift
// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')//使用Node自带的文件路径插件
module.exports = {
  //生产环境配置
  build: {
     //http://vuejs-templates.github.io/webpack/backend.html
    // 使用 config/prod.env.js 中定义的编译环境
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),   // 编译注入的 index.html 文件,必须是本地的绝对路径
    assetsRoot: path.resolve(__dirname, '../dist'),   // 编译输出的静态资源根路径
    assetsSubDirectory: 'static',    // 编译输出的二级目录
    assetsPublicPath: '/',    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    productionSourceMap: true,    //生成用于生产构建的源映射
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,    // 是否开启 gzip
    productionGzipExtensions: ['js', 'css'],    // 需要使用 gzip 压缩的文件扩展名
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report    //一个实用工具,用于分析项目的依赖关系https://www.npmjs.com/package/webpack-bundle-analyzer
  },
  //开发环境
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    env: require('./dev.env'),    // 使用 config/dev.env.js 中定义的编译环境
    port: 8081,    // 运行测试页面的端口
    autoOpenBrowser: true,    //是否自动打开浏览器
    assetsSubDirectory: 'static',    // 编译输出的二级目录
    assetsPublicPath: '/',    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    proxyTable: {
        //https://github.com/chimurai/http-proxy-middleware,配置方式
    },    // 需要 proxyTable 代理的接口（可跨域）http://vuejs-templates.github.io/webpack/proxy.html
    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',
    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: true   // 是否开启 cssSourceMap
  }
}
```

#### 参考：
* [Element UI](http://element-cn.eleme.io/#/zh-CN)
* [Vue项目目录结构注解附assets与static目录的区别](https://blog.csdn.net/Fabulous1111/article/details/79388403)
* [Vue-webpack项目配置详解](https://blog.csdn.net/air_hjj/article/details/77374920)


