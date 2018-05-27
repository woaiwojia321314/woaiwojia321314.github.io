---
layout: pages
title: Hexo NexT主题中添加网页音乐播放器功能
date: 2018-05-27 12:15:00
categories:
- Hexo
tags:
- Hexo
- NexT
- Web Music
- Aplayer
---

非原创，文章出处：https://asdfv1929.github.io/2018/05/26/next-add-music/ 。
为博客添加网页音乐播放器功能
<!-- more -->

## download
点击访问 Aplayer 源码：[GitHub Aplayer](https://github.com/MoePlayer/APlayer)。下载到本地，解压后将`dist`文件夹复制到`themes\next\source`文件夹下。

## music.js
新建`themes\next\source\dist\music.js`文件，添加内容：
```swift
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "PDD洪荒之力",
        artist: '徐梦圆',
        url: 'http://up.mcyt.net/?down/39868.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '9420',
        artist: '麦小兜',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});
```

源码中对应的参数解释，这边都有： [Aplayer 中文文档](https://aplayer.js.org/#/zh-Hans/)

audio 对应的便是音频文件，所以音乐播放器需要播放的音乐是需要自己进行相关信息（如歌曲链接、歌词、封面等）的配置。这里放一个mp3音乐外链网站：http://up.mcyt.net/ ，搜索对应的音乐，然后复制 url 和右击封面图片链接粘贴到对应的位置上就行了。

*注：由于该外链网站没有歌词链接，我这边没有进行配置，所以播放器在播放音乐时点击歌词是没有显示的。*

## _layout.swig
打开`themes\next\layout\_layout.swig`文件，将
```swift
<link rel="stylesheet" href="/dist/APlayer.min.css">
<div id="aplayer"></div>
<script type="text/javascript" src="/dist/APlayer.min.js"></script>
<script type="text/javascript" src="/dist/music.js"></script>
```
添加到`<body itemscope ...>`后面就行，即在`<body></body>`里面。

重新生成，访问页面，就能看到左下角的音乐播放器了。