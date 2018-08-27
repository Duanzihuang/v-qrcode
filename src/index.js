import DZHQRCode from './qrcode'

//默认导出 使用Vue.use(VQRCode)
export default {
    install(Vue){
        Vue.component(DZHQRCode.name,DZHQRCode)
    }
}

//按需导出 
// 支持全局注册 Vue.component('dzh-qrcode',DZHQRCode)
// 支持局部注册 export default { components:{'dzh-qrcode':DZHQRCode} }
export {DZHQRCode}