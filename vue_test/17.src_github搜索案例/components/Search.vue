<template>
  <div class="top">
        <div class="top-bar">
            <h2>Search Github Users</h2>
            <div class="search">
                <input type="text" placeholder="enter the name you search" v-model="keyWord">
                <button @click="searchUser">Search</button>
            </div>
        </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'Search',
        data() {
            return {
                keyWord:''
            }
        },
        methods: {
            searchUser(){
                //请求前更新List的数据
                this.$bus.$emit('updataList',{isFirst:false,isLoading:true,errMsg:'',users:[]})
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
                .then((response)=>{
                    console.log('请求成功了',response.data.items)
                    this.$bus.$emit('updataList',{isLoading:false,errMsg:'',users:response.data.items})
                })
                .catch((error)=>{
                    console.log('请求失败了',error.message)
                    this.$bus.$emit('updataList',{isLoading:false,errMsg:error.message,users:[]})
                })
                
            }
        },
    }
</script>

<style scoped>
/* top */
.top{
    height: 180px;
    background-color: #eee;
    overflow: hidden;
    border-radius: 10px;
}
.top-bar{
    margin: 50px;
}
</style>