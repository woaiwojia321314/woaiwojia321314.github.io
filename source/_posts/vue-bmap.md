---
layout: pages
title: Vue2 ：百度地图bmap
date: 2018-05-19 12:22:00
categories:
- Vue2
tags:
- Vue2
- 百度地图
---

百度地图JavaScript API是一套由JavaScript语言编写的应用程序接口，可帮助您在网站中构建功能丰富、交互性强的地图应用，支持PC端和移动端基于浏览器的地图应用开发，且支持HTML5特性的地图开发。

该套API免费对外开放。自v1.5版本起，您需先申请密钥（ak）才可使用，接口无使用次数限制。

地址传送门：[http://lbsyun.baidu.com/index.php?title=jspopular](http://lbsyun.baidu.com/index.php?title=jspopular)
<!-- more -->

## 申请密钥
[点击此处](http://lbsyun.baidu.com/index.php?title=jspopular)申请密钥，然后在首页index.html的head引入下面的js代码：
`<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=密钥"></script>`
**注意：**
建议先写个简单的html确认密钥正确可用后，再讲其引入vue的项目中。因为有些教程这里引入的js的src末尾带有 `&callback=init` ，这个参数导致了报错（见下图），而始终无法正常使用百度地图api。
![vue-map-01.png](https://upload-images.jianshu.io/upload_images/1464420-bddb2b10d74130f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## webpack 配置文件
如果只是第一步，你调用百度地图api时，报错： `Bmap is not defined` ，那么就配置 webpack 配置文件（webpack.base.conf.js）的module.exports中加个externals：
```swift
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: { app: './src/main.js' },
  //百度地图配置20180518
  externals: {
    "BMap": "BMap"
  },
...
}
```
## 调用
```swift
<template>
    <!--地图容器-->
    <div id="fli" class="fli"></div>
</template>
<script>
  export default {
    name:'',
    data () {
      return {
      }
    },
    mounted(){
      var map = new BMap.Map('fli',{enableMapClick:true});    // 创建Map实例
      map.centerAndZoom(new BMap.Point(104.06, 30.67), 11);  // 初始化地图,设置中心点坐标和地图级别

      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes:[
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]}));
      map.setCurrentCity("成都");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  },
}
</script>
<style scoped>
  .fli{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
  }
</style>
```
## 另一种方式：异步加载
跟[百度api官网](http://lbsyun.baidu.com/index.php?title=jspopular/guide/introduction)里的异步加载很像。首先跟入口 js（main.js）一样，新建一个 map.js 。（ak 就是你的密钥）
```swift
export function MP(ak) {  
  return new Promise(function (resolve, reject) {  
    window.onload = function () {  
      resolve(BMap)  
    }  
    var script = document.createElement("script");  
    script.type = "text/javascript";  
    script.src = "http://api.map.baidu.com/api?v=2.0&ak="+ak+"&callback=init";  
    script.onerror = reject;  
    document.head.appendChild(script);  
  })  
}  
```
在页面中调用：
```swift 
import {MP} from '@/map.js'  
export default {
    data () {
      return {
        ak:'', // 这里就是百度地图密钥
      }
    },
    mounted(){
      this.$nextTick(function() {
        var _this = this;
        MP(_this.ak).then(BMap => {
          // 百度地图API功能
          ...
        })
      })
    },
}
```
**注意：**
说到 src 末尾的 callback 参数，是否需要，值又是什么（ init, initialize ），自己去试验，随便写个简单的html，调试通了再引入vue。

*小提示：*
* 使用BMap的时候不需要import了，import反而会报错：BMap is not defined 
* 注意一定要给bmap的div设置高度，否则会看不见

#### 参考
* [前端框架Vue（9）——百度地图使用](https://blog.csdn.net/docallen/article/details/70877925)
* [vue调用百度地图api时Bmap没有定义的解决办法](https://blog.csdn.net/sinat_35515778/article/details/72677390)
