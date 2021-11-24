<template>
  <div class="School">
      <h1>{{msg}}</h1>
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
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
            // this.$bus.$on('hello',(data)=>{
            //     console.log('我收到了学生的姓名：'+ data)
            // })

            //订阅消息
            this.pid = pubsub.subscribe('hello',(msgName,data)=>{
                console.log('我收到了hello订阅的消息：'+'消息名：'+msgName+'信息：'+data)
            })
        },
        beforeDestroy() {
            // this.$bus.$off('hello')
            pubsub.unsubscribe(pid)
        },
    }
</script>

<style scoped>
    .School{
        background-color: cadetblue;
    }
</style>