---
layout: pages
title: Element ui之form表单使用
date: 2018-05-20 19:22:00
categories:
- Element
tags:
- Element
---

初次使用[Element ui](http://element-cn.eleme.io/#/zh-CN/component/installation)，遇到不少坑。在此做些记录，方便日后查阅。
<!-- more -->

## form 表单赋值/取值
**取值**：获取 form 表单的每个表单项的值：`this.formName.property`，比如：`this.ruleForm.username`，`this.ruleForm.psw`
**赋值**：大部分都是下面这种方式赋值格式（property: value），
一般的 input ，赋值和显示的事一致的，而有些则不一定。比如下拉选择列表 select ，复选框 checkbox , 单选 radio ，日期 date 时间 time , 文件上传 fileupload 等等会有个显示文本（给用户看）和实际值（后台数据库存储的值）。
* select 选择器设置默认选择，见此例https://jsfiddle.net/athena0304/g51g4L0L/
* checkbox 复选框和文件上传 fileupload 的是数组
* 动态生成后的默认选项设置：label对应的string，:label对应的传过来的参数（string,number），见此例https://codepen.io/feili/pen/KReNWw

## form 表单验证
自带验证和自定义验证。
自带验证：
```swift
<script>
  export default {
    data() {
      return {
        form: {
          telphone: '',
          cardnum: '523456178988776111',
        },
        rules: {
          telphone: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          cardnum: [
            { required: true, message: '请输入买受人身份证号', trigger: 'blur' }
          ],
        }
      }
    },
    ...
  }
</script>
```
自定义验证：
```swift
<script>
  export default {
    data() {
      //自定义验证规则
      //身份证验证
      var checkCardnum = (rule, value, callback) => {
        setTimeout(() => {
          var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
          if(!reg.test(value)){
            callback(new Error('身份证输入不合法'));
          }else{
            callback();
          }
        }, 1000);
      };
      return {
        form: {
          telphone: '',
          cardnum: '523456178988776111',
        },
        rules: {
          telphone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码' }
          ],
          cardnum: [
            { required: true, message: '请输入买受人身份证号', trigger: 'blur' },
            { validator: checkCardnum, trigger: 'blur' }
          ],
        }
      }
    },
    ...
  }
</script>
```
当然，自定义验证规则时，一般都会是单独的文件做相关验证规则限制，然后引入调用。validate.js，customValidate.js， xxx.vue。
validate.js
```swift
/**
 * Created by feili on 2018/5/11.
 */
export default function (type,val) {
  //type的值：qq-QQ号，mobile-手机号，phone-座机号，cardid-身份证号，integer-数字，moneynum-货币数字（带两位小数），...
  var result = false;

  //QQ
  var isQQ = function (val) {
    const reg = /^[1-9][0-9]{4,10}$/;
    return reg.test(val);
  }

  //邮箱
  var isEmail = function (val) {
    const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return reg.test(val);
  }

  //手机号(目前只支持中国大陆的手机号码)
  var isMobile = function (val) {
    const reg = /^1[34578]\d{9}$/;
    return reg.test(val);
  }

  //座机号
  var isPhone = function (val) {
    const reg = /^0\d{2,3}-\d{7,8}$/;
    return reg.test(val);
  }

  //身份证号(15位和18位)
  var isCardID = function (val) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(val);
  }

  //车牌号(川B12345)
  var isPlateNumber = function (val) {
    const reg = /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/;
    return reg.test(val);
  }

  //数字（正整数和0）
  var isInteger = function (val) {
    const reg = /^([1-9]\d*|[0]{1,1})$/;
    return reg.test(val);
  }

  //货币数字（最多带两位小数）
  var isMoneynum = function (val) {
    const reg = /^([1-9]\d+|0)(\.[\d]{1,2})?$/;
    return reg.test(val);
  }


  switch(type) {
    case 'qq':
      result = isQQ(val);
      break;
    case 'mobile':
      result = isMobile(val);
      break;
    case 'phone':
      result = isPhone(val);
      break;
    case 'cardid':
      result = isCardID(val);
      break;
    case 'platenumber':
      result = isPlateNumber(val);
      break;
    case 'integer':
      result = isInteger(val);
      break;
    case 'moneynum':
      result = isMoneynum(val);
      break;
    default:
      break;
  }

  return result;

}
```
customValidate.js
```swift
/**
 * Created by feili on 2018/5/11.
 */

import  validate from './validate.js'

export default {
  /*qq号*/
  isQQ: (rule, value, callback) => {
    if((value || '')!='') {
      if(!validate('qq',value)) {
        callback(new Error('您输入的QQ号不正确!'))
      } else {
        callback()
      }
    } else{
      callback();
    }
  },
  /*手机号*/
  isMobile: (rule, value, callback) => {
    if((value || '')!='') {
      if(!validate('mobile',value)) {
        callback(new Error('您输入的手机号不正确!'))
      } else {
        callback()
      }
    } else{
      callback();
    }
  },
  /*座机号*/
  isPhone:(rule, value, callback) => {
    if((value || '')!='') {
      if(!validate('phone',value)) {
        callback(new Error('您输入的座机号不正确!'))
      } else {
        callback()
      }
    } else{
      callback();
    }
  },
  /*身份证号*/
  isCardID:(rule, value, callback) => {
    if((value || '')!='') {
      if(!validate('cardid',value)) {
        callback(new Error('您输入的身份证号不正确!'))
      } else {
        callback()
      }
    } else{
      callback();
    }
  },
  /*数字（正整数和0）*/
  isInteger: (rule, value, callback) => {
    if((value || '')!='') {
      if(!validate('integer',value)) {
        callback(new Error('请输入数字!'))
      } else {
        callback()
      }
    } else{
      callback();
    }
  },
  /*保留两位小数*/
  isMoneynum:(rule, value, callback) => {
    if((value || '')!='') {
      if(!validate('moneynum',value)) {
        callback(new Error('请输入正确的数字，最多保留两位小数!'))
      } else {
        callback()
      }
    } else{
      callback();
    }
  },

}

```
xxx.vue
`import customValid from  '@/util/customValidate'`
```swift
rules: {
          renttype: [
            { required: true, message: '请选择出租方式', trigger: 'change' }
          ],
          rentarea: [
            { required: true, message: '此项必填', trigger: 'blur' },
            { validator: customValid.isMoneynum, trigger: 'blur' }
          ],
          rentcash: [
            { required: true, message: '此项必填', trigger: 'blur' },
            { validator: customValid.isInteger, trigger: 'blur' }
          ],
          ...
}
```

#### 参考
* [ElementUi rules表单验证](https://segmentfault.com/a/1190000012551362)
* [vue+element-ui中的表单验证（电话等等）](http://www.cnblogs.com/myfirstboke/p/7930197.html)

