import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced: true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('PERSONLIST',value)
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
            .then((response)=>{
                console.log('请求成功了',response.data)
                context.commit('PERSONLIST',{id:nanoid(),name:response.data})
            })
            .catch((error)=>{
                console.log('请求失败了',error.message)
               
            })
        }
    },
    mutations:{
        PERSONLIST(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001', name:'张三'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}