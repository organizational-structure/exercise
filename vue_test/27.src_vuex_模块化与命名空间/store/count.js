export default {
    namespaced: true,
    //准备actions——用于响应组件中的动作
    actions:{
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
        },
    },
    //准备mutations——用于操作数据(state)
    mutations:{
        Add(state,value){
            console.log('mutations中的add函数被调用了',state,value)
            state.sum += value
        },
        Subtract(state,value){
            console.log('mutations中的Subtract函数被调用了',state,value)
            state.sum -= value
        },
    },
    state:{
        sum:0,//当前的和
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}