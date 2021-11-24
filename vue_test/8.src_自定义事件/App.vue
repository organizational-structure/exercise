<template>
  <div>
      <h1>学生的姓名是{{nameStudent}}</h1>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递 -->
      <School :getSchoolName='getSchoolName'/>
      <hr/>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
      <!-- <Student @atguigu='getStudentName' @test='demo'/> -->

      <!-- 给组件绑定原生dom事件 (需要加native，否则会当自定义事件使用)-->
      <Student @atguigu='getStudentName' @click.native="show"/>

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
      <!-- <Student ref='student'/> -->
  </div>
</template>

<script>
    import  Student from './components/Student.vue'
    import  School from './components/School.vue'
    export default {
        name:'App',
        components:{Student,School},
        data() {
            return {
                nameStudent:''
            }
        },
        methods: {
            getSchoolName(name){
                console.log("学校名称是："+name)
            },
            getStudentName(name,...parmas){
                console.log("学生名字是："+ name,parmas)
                this.nameStudent = name
            },
            demo(age){
                console.log('学生的年龄是：'+ age)
            },
            //给原生绑定DOM事件
            show(){
                console.log("原生Dom:" + 123)
            }
        },
        mounted() {
            // this.$refs.student.$on('atguigu',this.getStudentName)
        },
    }
</script>

<style>

</style>