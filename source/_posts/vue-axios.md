---
layout: pages
title: Vue2 ：axios 使用之（一）
date: 2018-05-20 17:22:00
categories:
- Vue2
tags:
- Vue2
- axios
---

据说vuejs2.0已经不在维护vue-resource了，vuejs2.0 已经使用了axios了，并且官方也推荐使用axios 。
<!-- more -->


##  简介
[Axios 官网](https://github.com/axios/axios)。
axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，它本身具有以下特征：
* 浏览器端发起XMLHttpRequests请求
* Node端发起http请求
* 支持Promise API
* 拦截请求和响应
* 转化请求和响应（数据）
* 取消请求
* 自动转化json数据
* 客户端支持抵御XSRF（跨站请求伪造）

浏览器兼容性：
![axios-browser-support.png](https://upload-images.jianshu.io/upload_images/1464420-9af3b5778f6a052e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 安装
Vue项目中使用如下命令安装：
`npm install axios --save`
也可以使用cdn：
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

## 使用
[参考的git代码库](https://github.com/DragonFlyXD/poetryclub-frontend/blob/master/src/api/index.js)
api/index.js 文件：
```swift
import axios from 'axios'
import QS from 'qs'

let api = axios.create({
  baseURL: 'http://www.dragonflyxd.com/api/', //接口前缀（域名）
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  params: {},
  timeout: 10000,
  withCredentials: false,
  responseType: 'json',
  maxContentLength: 2000,
  validateStatus: function (status) {
    return status >= 200 && status < 500
  },
  maxRedirects: 5,
  transformRequest: [data => QS.stringify(data)],
  paramsSerializer: params => QS.stringify(params),
  data: {}
})

// http request 拦截器
api.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http response 拦截器
api.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default api
```

页面上调用：
```swift
import api from '@/api/index'

api.post('/mk_login', data)
          .then(res => {
                console.log(res.data); //后台返回的数据
                //if(res.data.status){
                  // 登录成功
                  //this.setUserInfo2(data);
                 // this.$router.replace('/home');
                //}
              })
              .catch(error => {
                console.log("login异常：")
                console.log(error)
              })
```
## 其他
由于IE9不支持Promise，因此需要在项目入口main.js中打个补丁,否则无法发出请求：
`import 'babel-polyfill'`
如上，已经能在IE9+上发起网络请求，但是IE9上有个问题：response.data为undefined,因此需要对返回的数据针对不同浏览器进行处理，在API.js中加入如下拦截器：
```swift
// 响应拦截
axios.interceptors.response.use(function (response) {
  var data
  // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
  if(response.data == undefined){
    data = response.request.responseText
  } else{
    data = response.data
  }
  // 判断data不是Object时，解析成Object
  if(!(data instanceof Object)){
    data = JSON.parse(data)
  }
  return data
}, function (error) {
  return Promise.reject(error)
});
```
axios跨域请求问题： `No 'Access-Control-Allow-Origin' header is present on the requested resource.`
网上搜了不少资料，很多都说需要前端配置，比如下面2种方式：
1. 代理：config/index.js: proxyTable相关设置
1.  浏览器chrome装个插件：Allow-Control-Allow-Origin 做本地开发

实际上，我这里配置了上面的也没用，只需要后台那边配置就行（后台开发人员知道的，你跟他沟通一下就行），比如下面两种方式：
1. Servlet，MVC都可以，Web.xml
 https://www.cnblogs.com/best/p/8202370.html
 1. Spring MVC，修改Spring 配置文件，低Spring版本不支持
 https://www.cnblogs.com/best/p/8202370.html


#### 参考
* [浅谈 Axios 在 Vue 项目中的使用](http://www.cnblogs.com/coolslider/p/7838309.html)
* [vue axios全攻略](http://www.cnblogs.com/libin-1/p/6607945.html)
* [axios post提交的Content-Type](http://www.cnblogs.com/changzhenan/p/8430760.html)
* [axios —— 极简封装的艺术](https://zhuanlan.zhihu.com/p/28396592)
