import Vue from 'vue'

import App from './App.vue'

import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//使用插件
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router:router
}).$mount('#app')