<template>
  <div class="Student">
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="sendStudentName">把学生的名字给Shool组件</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'你好同学！',
                name:'Tom',
                age:18,
            }
        },
        methods: {
            sendStudentName(){
                this.$bus.$emit('hello',this.name)
            }
        },
    }
</script>

<style scoped>
    .Student{
        background-color: aquamarine;
       
    }
</style>