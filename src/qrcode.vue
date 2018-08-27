<template>
  <div>
    <!-- 图片 -->
    <img id="imgLogo" :src="img" hidden>
    <div v-if="mode===0" id="container1">
      <canvas></canvas>
    </div>
    <div v-else-if="mode===1 || mode===2" id="container2">
      <canvas></canvas>
    </div>
    <div v-else id="container3">
      <canvas></canvas>
    </div>
  </div>
</template>

<script>
//导入jquery
import "./lib/qrcode";

//导入qrcode
export default {
  name:'dzh-qrcode',
  props: {
    /**
     * 0:不显示LOGO
     * 1:文字且占整行
     * 2:文字居中
     * 3:图片且占整行
     * 4:图片居中
     */
    mode: {
      Type: Number,
      default: 4
    },
    logoSize: {
      Type: Number,
      default: function () {
        if (this.mode === 0 || this.mode === 1 || this.mode === 2){
          return 10
        } else {
          return 28
        }
      }
    },
    text: {
      Type: String,
      default: "黑马段子黄"
    },
    url: {
      type: String,
      default: "http://m.itheima.com"
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    img_url: String
  },
  data(){
    return {
      img: ''
    }
  },
  created(){
    this.img = (this.img_url && (this.img_url.startsWith('http') || this.img_url.startsWith('https') || this.img_url.startsWith('data'))) ? this.img_url : '/src/images/Peppa.jpg'
  },
  mounted() {
    setTimeout(() => {
      const mSize = this.logoSize > 28 ? 28 : this.logoSize
      const size = Math.max(this.width,this.height) < 300 ? 300 : Math.max(this.width,this.height)
      const mode = this.mode
      const text = this.url
      if (this.mode === 0) {
        $("#container1").erweima({
          mode,
          size,
          text
        });
      } else if (this.mode === 1 || this.mode === 2) {
        $("#container2").erweima({
          mSize,
          mode,
          text,
          size,
          label: this.text.length > 5 ? `${this.text.substring(0,5)}...` : this.text
        });
      } else if (this.mode === 3 || this.mode === 4) {
        $("#container3").erweima({
          mSize,
          mode:4,
          text,
          size,
          image: $("#imgLogo")[0]
        });
      }
    }, 20);
  }
};
</script>
