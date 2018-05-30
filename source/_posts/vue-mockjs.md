---
layout: pages
title: Vue2 ：Mockjs 前端模拟假数据
date: 2018-05-19 12:22:00
categories:
- Vue2
tags:
- Vue2
- Mockjs
---

在前后端分离的大环境下，前端需要后端的接口去完成页面的渲染，但是大部分的情况下,前后端需要同时进行开发，这种情况下,后端还没完成数据输出，前端只好写静态模拟数据。面临一些问题：数据太长了，将数据写在js文件里，完成后挨个改url；某些逻辑复杂的代码，加入或去除模拟数据时得小心翼翼；想要尽可能还原真实的数据，要么编写更多代码，要么手动修改模拟数据；特殊的格式，例如IP,随机数，图片，地址，需要去收集等等。
Mock.js 正是这样一款类库，可以帮我们模拟生成一堆数据，也能解决那些问题。
<!-- more -->

## 安装
[mock官网](https://link.jianshu.com/?t=http://mockjs.com/)
npm安装：`npm install mockjs`
package文件中显示当前mockjs版本说明安装成功。
*(也可以引入cdn：`<script src="http://mockjs.com/dist/mock.js"></script>`)*

## mockjs 文件
在main.js同级下建立mock.js文件：
```swift
// 引入mockjs
const Mock = require('mockjs');
const qs = require('qs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// 登录
const login = function() {
  let status = false;//登录状态：ture--成功，false--失败
  status = true;
  return {
    status: status
  }
}
// 表格分页
const tblList = function(param) {
  param = param.body || '';//获取传过来的参数
  // console.log(qs.parse(param));//因为axios的post带参数被qs.stringfy()转换了，需要转回来。
	if(param == ''){
	  //无查询条件
    let bookdata = Mock.mock({
      'books|1-10': [{
        'sid|+1': 1,
        'date': '@date("yyyy-MM-dd")',
        'name': '@csentence()',
        'address': '@county(true)',
        'region': '双流区'
      }]
    });
    // console.log(bookdata);
    return bookdata;

  }else{
	  //带查询条件
    let paramObj = qs.parse(param);
    console.log('input parameter：...');
    console.log(paramObj);
    let books = [];
    for (let i = 0; i < 10; i++) {
      let newBook = {
        // thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
        date: Random.date(),
        name: paramObj.name+Random.csentence(),
        address: Random.county(true),
        region: paramObj.region
      }
      books.push(newBook)
    }
    return {
      books: books
    }
  }

}
//图书列表
const bookList = function(param) {
  param = param.body || '';//获取传过来的参数
  // console.log(qs.parse(param));
  // 因为axios的post带参数被qs.stringfy()转换了，需要转回来。
  let paramObj = qs.parse(param);
  console.log(paramObj);
  let nameInput = paramObj.name || '';
  let books = [];
  for (let i = 0; i < 10; i++) {
    let temp = i+1;
    let newBook = {
      sid: temp,
      // thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author: Random.name(2,4),
      name: '《'+nameInput+Random.csentence()+"》",
      publishAt: Random.date(),
      description: Random.cparagraph()
    }
    books.push(newBook)
  }
  return {
    books: books
  }
}
//获取文件列表
const fileList = function (param) {
  param = param.body || '';//获取传过来的参数
  // console.log(qs.parse(param));
  // 因为axios的post带参数被qs.stringfy()转换了，需要转回来。
  let paramObj = qs.parse(param);
  console.log(paramObj);
  let files = [];
  for (let i = 0; i < 3; i++) {
    let newFile = {
      name: paramObj.username + i +'.png',
      url: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    }
    files.push(newFile)
  }
  return {
    fileList: files
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/mk_login', 'post', login);// 登录
Mock.mock('/mk_tbllist', 'post', tblList);// 表格分页
Mock.mock('/mk_booklist', 'post',bookList);// 图书列表
Mock.mock('/mk_fileupload', 'post',{});// 文件上传
Mock.mock('/mk_fetchFiles', 'post',fileList);// 获取文件列表
```
## main.js 引入mock
在main.js中引入mock文件：
` require('./mock'); `

## 使用
vue文件中访问该接口mock：
*(调用的url接口和mock.js文件的Mock.mock( url, post/get , 返回的数据)的url接口一致，就能被mock拦截。)*
```swift
api.post('/mk_login', data)
              .then(res => {
                console.log(res.data);
                if(res.data.status){
                  // 登录成功
                  this.setUserInfo2(data);
                  this.$router.replace('/home');
                }
              })
              .catch(error => {
                console.log("login异常：")
                console.log(error)
              })
```

#### 参考
* [vue中mock.js使用](https://blog.csdn.net/hello_mujinhua/article/details/78426937)
* [【Mock.js】前端模拟假数据，不用在手拼了](https://www.jianshu.com/p/8579b703a4c1)
* [Mockjs,再也不用追着后端小伙伴要接口了](https://www.jianshu.com/p/dd23a6547114)
* [使用Mock.js进行独立于后端的前端开发](https://segmentfault.com/a/1190000003087224)
