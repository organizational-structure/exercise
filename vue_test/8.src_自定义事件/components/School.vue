<template>
  <div class="School">
      <h1>{{msg}}</h1>
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">点我获取学校名称</button>
  </div>
</template>

<script>
    export default {
        name:'School',
        props:['getSchoolName'],
        data() {
            return {
                msg:'欢迎学习Vue',
                name:'尚硅谷',
                address:'北京'
            }
        },
        methods: {
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        },
    }
</script>

<style scoped>
    .School{
        background-color: cadetblue;
    }
</style>