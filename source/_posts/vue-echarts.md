---
layout: pages
title: Vue2 ：百度图表 Echarts
date: 2018-05-19 12:22:00
categories:
- Vue2
tags:
- Vue2
- Echarts
---

在后台管理系统中，图表是一个很普遍的元素。目前常用的图标插件有 [charts](http://www.chartjs.org/),  [Echarts](http://echarts.baidu.com/index.html), [highcharts](http://www.highcharts.com/)。这次将介绍 Echarts 在 Vue 项目中的应用。
<!-- more -->

## 一、安装插件
npm 安装 Echarts ，进入项目目录：
`npm install echarts -S`
和 axios 类似，echarts 也不能通过 Vue.use() 进行全局调用
通常是在需要使用图表的 .vue 文件中直接引入：
`import echarts from 'echarts' `
**另外一只方式：挂到vue上，再使用：**
在 main.js 中引入，然后修改原型链：
```swift
import echarts from 'echarts' 
Vue.prototype.$echarts = echarts 
```
然后就可以全局使用了
`let myChart = this.$echarts.init(document.getElementById('myChart'))`
## 二、创建图表
需要注意的是，图表的容器必须指定宽高，也就是说 width，height 不能使用百分比，只能用 px。
简单封装：Echarts.vue
```swift
<template>
  <div style="width: 500px;height: 300px" :id="id" :class="className"></div>
</template>
<script>
  import * as echarts from 'echarts';
  export default {
    props: ['options','id','className'],
    data: function () {
      return { }
    },
    mounted: function(){
      var myChart = echarts.init(document.getElementById(this.id));
      myChart.setOption(this.options);
    }
  }
</script>
```
然后使用：
```swift
<template>
  <div class="center">
    <h3>ECharts 入门示例</h3>
    <Echarts id="main" :options='options' class="echarts" style="width: 500px;height: 300px"></Echarts>
    <Echarts id="main2" :options='optionsLine' class="echarts" style="width: 500px;height: 300px"></Echarts>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  import Echarts from '@/components/Echarts/Echarts.vue'; //组件

  export default {
    data: function () {
      return {
        options:{
          title: {
            text: '柱形图Bar'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        },
        optionsLine: {
          title: {
            text: '线状图Line'
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        },
      }
    },
    components: {
      'Echarts': Echarts,
    }
  }
</script>

<style>
  .echarts{
    float: left;
  }
</style>

```

## 三、按需引入
上面引入的 echarts 包含了所有图表，但有时候我们只需要一两个基本图表，这时候完整的 echarts 就显得累赘。
假如只需要创建一个饼图，那么可以这么做：
```swift
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入饼图组件
  require('echarts/lib/chart/pie')
  // 引入提示框和图例组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/legend')
```
可以按需引入的模块列表见 [https://github.com/ecomfe/echarts/blob/master/index.js](https://github.com/ecomfe/echarts/blob/master/index.js)

*其他*
如果在页面加载之后，仍需要图表自适应宽高，就需要用到 echarts 的[媒体查询](http://echarts.baidu.com/tutorial.html#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%87%AA%E9%80%82%E5%BA%94)

#### 参考
* [在Vue上初级使用ECharts](https://blog.csdn.net/u013069892/article/details/70256596)
* [在vue-cli项目中使用echarts](http://www.cnblogs.com/Smiled/p/7686316.html)
*  [Vue 爬坑之路（八）—— 使用 Echarts 创建图表](http://www.cnblogs.com/wisewrong/p/6558001.html)
* [做一个具有异步加载特性的 echarts-vue 组件](https://segmentfault.com/a/1190000011230007)
* [vue 将echarts封装为组件一键使用](https://segmentfault.com/a/1190000011429939)
