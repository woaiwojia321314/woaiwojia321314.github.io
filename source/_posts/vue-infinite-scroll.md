---
layout: pages
title: 用vue实现无限滚动
date: 2018-06-24 10:30:00
categories:
- vue
tags:
- vue
- scroll
---

译文：https://alligator.io/vuejs/implementing-infinite-scroll/
无限滚动在网络上占有一席之地，但它不适用于每个网站或应用程序。当用户需要加载大量数据或图像时，但又不想一次性加载完所有数据和图像时，它们特别有用。 Twitter，Facebook和Instagram等社交媒体多年来一直在推广。在您的网站或应用程序中集成自己的无限滚动比您想象的要容易。
<!-- more -->

本文将使用 [Random User API](https://randomuser.me/)(模拟后端返回数据)。该API将自己形容为“像Lorem Ipsum，但是对于人”。它不仅适用于此实现，而且对于模仿未来项目的用户配置文件也非常有用。 

在你开始前，用 [Vue CLI](https://alligator.io/vuejs/using-new-vue-cli-3/) `webpack-simple`项目模板创建一个新的 Vue.js 项目。此例子将分别用 [Axios](https://alligator.io/vuejs/rest-api-axios/) 和[MomentJS](https://momentjs.com/docs/) 来获取数据和日期格式。

`$ vue init webpack-simple infinite-scroll-vuejs `



## 获取初始用户数据

有各种实现无限滚动的 npm 包，你可以使用你的 Vue 应用程序，但其中一些可能是太繁琐了。此文中，我们将不用那些插件或包，仅仅编写一个简单的 JavaScript 函数来实现无限滚动功能（当滚动到浏览器窗口底部时，获取一组新数据）。

在我们开始集成无限滚动之前，让我们在页面加载中获取并设置一些初始数据： 

App.vue

```swift
data () {
  return {
    persons: []
  }
},
methods: {
  getInitialUsers () {
    for (var i = 0; i < 5; i++) {
      axios.get(`https://randomuser.me/api/`)
        .then(response => {
          this.persons.push(response.data.results[0]);
        });
    }
  }
},
beforeMount() {
  this.getInitialUsers();
}
```

 **注意：**

**Random User API 一次只会返回一个随机用户数据，为了获得5个用户数据，需要发起五次请求。**

如果您在 console 看到了五个用户数据，那就OK了！让我们通过模板中的这些数据进行迭代，然后继续：

App.vue

```swift
<template>
  <div id="app">
    <h1>Random User</h1>
    <div class="person" v-for="person in persons">
      <div class="left">
        <img :src="person.picture.large">
      </div>
      <div class="right">
        <p>{{ person.name.first }} {{ person.name.last }}</p>
        <ul>
          <li>
            <strong>Birthday:</strong> {{ formatDate(person.dob) }}
          </li>
          <li class="text-capitalize">
            <strong>Location:</strong> {{ person.location.city }},
            {{ person.location.state }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
...
</script>

<style lang="scss">
 /* Optional Styles */
 .person {
    background: #ccc;
    border-radius: 2px;
    width: 20%;
    margin: 0 auto 15px auto;
    padding: 15px;

    img {
      width: 100%;
      height: auto;
      border-radius: 2px;
    }

    p:first-child {
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 900;
    }

    .text-capitalize {
      text-transform: capitalize;
    }
  }
</style>
```

 

## 实现无限滚动逻辑 

现在你在此的目的......无限的滚动！ 在组件的方法中，您需要创建一个名为`scroll() `的新函数，并将其加载到`mounted() `生命周期方法中。

这个`scroll() `方法应该有一个简单的条件来计算页面的底部，判断它为true或false，并执行一些操作。我们将利用文档对象的`documentElement.scrollTop`，`documentElement.offsetHeight`属性和窗口的`innerHeight`属性来确定是否滚动到底部： 

```swift
window.onscroll = () => {
  let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

  if (bottomOfWindow) {
    // Do something, anything!
  }
};
```

在这种情况下，让我们添加一个GET方法，使用Axios从随机用户API中获取另一个随机用户。 

```swift
methods: {
  ...,
  scroll (person) {
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        axios.get(`https://randomuser.me/api/`)
          .then(response => {
            person.push(response.data.results[0]);
          });
      }
    };
  },
},
mounted() {
  this.scroll(this.person);
}
```

此功能只会在用户滚动到页面底部时发起服务请求，并向人员数组添加一个新的随机“用户”。此时，您应该可以无限滚动...并每次看到新的“用户”。 

## 结尾

无限滚动听起来吓人，但如所证明的那样，它非常简单。每次滚动到页面的底部时，我们都会使用 Axios 获取新数据，然后将这些数据推送到数组中。要延迟加载图像，只需将图像源推送到数据数组，在模板中遍历它，然后将`<img：src ="">`绑定到数组。 

ps： 此文核心就在【判断是否滚动到页面底部的逻辑上】，在此提供一个兼容性更好的写法，参考此文[滚动到底部加载更多](https://www.jianshu.com/p/7dd126a7dc77)。