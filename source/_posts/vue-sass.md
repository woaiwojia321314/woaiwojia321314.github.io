---
layout: pages
title: vue 使用预编译器 sass
date: 2018-06-04 14:30:00
categories:
- vue
tags:
- vue
- sass
---

在基于 webpack 项目模板创建的项目（`vue init webpack my-project`）中使用 sass。
在 webpack 中，所有的预处理器需要匹配对应的 loader。vue-loader 允许你使用其它 webpack loader 处理 Vue 组件的某一部分。它会根据 lang 属性自动推断出要使用的 loader。
<!-- more -->

## sass 相关依赖包安装
相关依赖包安装：

```swift
npm install sass-loader node-sass --save-dev
```

## 使用
sass 和 scss 语法不一样的，可以[参考此文档](http://sass.bootcss.com/docs/scss-for-sass-users/)。 下面列举 scss 版本的，对应的 sass 版本只需要将`lang="scss"`改成`lang="sass"`即可。

页面内样式：

```swift
<style lang="scss" scoped>
  .sign {
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    .tag {
      display: inline-block;
      height: 85%;
      vertical-align: middle;
    }
  }
</style>
```

引入样式文件：

```swift
<style lang="scss" >
  @import './assets/css/base.scss';

  .demo {		
  }
</style>
```

下面提供官方文档供参考和深入的配置：
* [官方一：简单使用](http://vuejs-templates.github.io/webpack/pre-processors.html)
* [官方二：深入的配置](https://vue-loader-v14.vuejs.org/zh-cn/configurations/pre-processors.html)

ps： 基于第二个文档，我配置过`sass-loader 警告`部分，总是报错。不配置这部分也能使用，后续解决了相关问题，再更新此文。
