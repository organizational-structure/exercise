<template>
  <div class="School">
      <h1>{{msg}}</h1>
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      
  </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                msg:'欢迎学习Vue',
                name:'尚硅谷',
                address:'北京'
            }
        },
        mounted() {
            this.$bus.$on('hello',(data)=>{
                console.log('我收到了学生的姓名：'+ data)
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        },
    }
</script>

<style scoped>
    .School{
        background-color: cadetblue;
    }
</style>