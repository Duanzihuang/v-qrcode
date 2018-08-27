import Vue from 'vue'

import App from './App'

// import DZHQRCode from './index.js'
// Vue.use(DZHQRCode)

// import {DZHQRCode} from './index'
// Vue.component('dzh-qrcode',DZHQRCode)

new Vue({
    el:"#app",
    render:h => h(App)
})