//该文件用于创建Vuex中最核心的store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//准备actions——用于响应组件中的动作
const actions = {
    // add(context,value){
    //     console.log('actions中的add函数被调用了',context,value)
    //     context.commit('Add',value)
    // },
    // subtract(context,value){
    //     console.log('actions中的subtract函数被调用了',context,value)
    //     context.commit('Subtract',value)
    // },
    addOdd(context,value){
        console.log('actions中的addOdd函数被调用了',context,value)
        if(context.state.sum % 2){
            context.commit('Add',value)
        }
    },
    addWait(context,value){
        console.log('actions中的addWait函数被调用了',context,value)
        setTimeout(() => {
            context.commit('Add',value)
        }, 300);
    }
}
//准备mutations——用于操作数据(state)
const mutations = {
    Add(state,value){
        console.log('mutations中的add函数被调用了',state,value)
        state.sum += value
    },
    Subtract(state,value){
        console.log('mutations中的Subtract函数被调用了',state,value)
        state.sum -= value
    }
}
//准备state——用于存储数据
const state = {
    sum:0//当前的和
}


//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state
})