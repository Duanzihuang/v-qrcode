# DZH-QRCode

一个自动生成二维码的Vue插件

- 支持4种显示方式  0:不显示LOGO  1:文字且占整行  2:文字居中  3:图片居中
- 支持自定义图片 暂时只支持网络图片
- 支持自定义文字 文字长度最长支持5位
- 支持 Vue 2.0+

## 安装

```javascript
npm install dzh-qrcode --save
```

或者

```javascript
yarn add dzh-qrcode --save
```

## 使用

**注册组件**

注册全局组件:

```javascript
import DZHQRcode from 'dzh-qrcode'

Vue.component('dzh-qrcode', DZHQRcode)

//或者
Vue.use(DZHQRCode)
```

注册组件:

```javascript
import DZHQRcode from 'dzh-qrcode'

export default {
  components: { "dzh-qrcode":DZHQRcode }
}
```

如何使用

基本使用:

```javascript
<dzh-qrcode></dzh-qrcode>
```

默认值:

```javascript
<dzh-qrcode url="http://m.itheima.com/itheima/shenzhen.html"></dzh-qrcode>
```

**自定义属性**

|   key    |     description      |     default     | options |
| :------: | :------------------: | :-------------: | :-----: |
|   mode   |       显示模式       |        4        | Number  |
| logoSize |       logo大小       | 文字 10 图片 28 | Number  |
|   text   |  文字(最长显示5位)   |   黑马段子黄    | String  |
|   url    | 扫描二维码打开的网址 |  m.itheima.com  | String  |
| img_url  |     logo图片地址     | 小猪佩奇的图片  | String  |
|  width   |   生成的二维码宽度   |       300       | Number  |
|  height  |   生成的二维码高度   |       300       | Number  |

## 贡献

- [段子黄](https://github.com/Duanzihuang)

## 感谢

- 暂无、期待有你

## License

The plugin is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).