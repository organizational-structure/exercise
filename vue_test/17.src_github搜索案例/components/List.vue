<template>
<div>
    <ul v-show="info.users.length">
        <li v-for="userList in info.users" :key="userList.login">
            <a :href="userList.html_url">
                <img :src="userList.avatar_url" >
            </a>
            <p>{{userList.login}}</p>
        </li>
    </ul>
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <h1 v-show="info.isLoading">加载中...</h1>
    <h1 v-show="info.errMsg">请求出错了</h1>
</div>
</template>

<script>
    export default {
        name:'List',
        data() {
            return {
                info:{
                    isFirst:true,
                    isLoading:false,
                    errMsg:'',
                    users:[]
                }
            }
        },
        mounted() {
            this.$bus.$on('updataList',(dataObj)=>{
                this.info = {...this.info,...dataObj}
            })
        },
    }
</script>

<style scoped>
/* list */
ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: space-around; */
    height: 300px;
    padding-left: 0;
}
ul li{
    width: 250px;
    height: 140px;
    list-style: none;
    border: 1px solid #eee;
    box-sizing: border-box;
    text-align: center;
}
ul li a,ul li a img{
    display: inline-block;
    width: 100px;
    height: 100px;
}
ul li p{
    /* margin-top: -10px; */
    font-size: 13px;
    color: cadetblue;
}
</style>