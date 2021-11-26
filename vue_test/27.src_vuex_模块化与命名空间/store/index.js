//该文件用于创建Vuex中最核心的store

import Vue from 'vue'
import Vuex from 'vuex'

import countOption from './count'
import personOption from './person'
Vue.use(Vuex)




//创建store
export default new Vuex.Store({
    modules:{
        countAbout:countOption,
        personAbout:personOption
    }
    
})