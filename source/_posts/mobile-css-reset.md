---
layout: pages
title: 移动端web网页的 css 设置
date: 2016-05-06 11:00:00
tags:
- css
---

做网页自适应或移动端web页面开发时，总是被浏览器默认自带的样式折腾的死去活来，然后你就想将他们重置成常规默认设置，然后自定义样式。
<!-- more -->

### css样式
1. **-webkit-tap-highlight-color**
*-webkit-tap-highlight-color: rgba(0,0,0,0);*  //透明度设置为0，去掉点击链接和文本框对象时默认的灰色半透明覆盖层(iOS)或者虚框(Android)   
*-webkit-tap-highlight-color: rgba(255,0,0,0.5);*  //利用此属性，设置touch时链接区域高亮为50%的透明红，只在ios上起作用。android上只要使用了此属性就表现为边框。在body上加此属性，这样就保证body的点击区域效果一致了

2. **outline：none**   
(1)在pc端为a标签定义这个样式的目的是为了取消ie浏览器下点击a标签时出现的虚线。ie7及以下浏览器还不识别此属性，需要在a标签上添加hidefocus="true"   
(2)input，textarea{outline:none} 取消chrome下默认的文本框聚焦样式   
(3)在移动端是不起作用的，想要去除文本框的默认样式可以使用-webkit-appearance，聚焦时候默认样式的取消是-webkit-tap-highlight-color。看到一些移动端reset文件加了此属性，其实是多余。  
 比如：   
/*防止获取焦点时，出现边框*/   
*:focus {   outline: 0;   -webkit-tap-highlight-color: transparent   }*

3. **-webkit-appearance**   
*-webkit-appearance: none; * //消除输入框和按钮的原生外观，在iOS上加上这个属性才能给按钮和输入框自定义样式   
不同type的input使用这个属性之后表现不一。text、button无样式，radio、checkbox直接消失、   
另外，select加上这个属性后，select的高度就可以改变了。如：*select{-webkit-appearance:none;}*

4. **-webkit-user-select**   
*-webkit-user-select: none;*  // 禁止页面文字选择 ，此属性不继承，一般加在body上规定整个body的文字都不会自动调整

5. **-webkit-text-size-adjust**   
*-webkit-text-size-adjust: none;*  //禁止文字自动调整大小(默认情况下旋转设备的时候文字大小会发生变化)，此属性也不继承，一般加在body上规定整个body的文字都不会自动调整

6. **-webkit-touch-callout**   
*-webkit-touch-callout:none;*  //禁用长按页面时的弹出菜单(iOS下有效) ,img和a标签都要加

7. **-webkit-overflow-scrolling**  
*-webkit-overflow-scrolling: touch;*  //局部滚动(仅iOS 5以上支持)

8. **-webkit-box-sizing**  
*-webkit-box-sizing: border-box;*  //转变盒模型（width定义变为包括padding，border-width，不含margin）

#### 参考：
* [移动端页面默认样式重置](http://blog.sina.com.cn/s/blog_51048da70102uyjp.html)
* [手机端web页面css初始化－去除浏览器默认效果（附详解）](http://slimcheng.com/archives/179)
* [移动端重要的几个CSS3属性设置](http://www.th7.cn/web/js/201508/118471.shtml)
