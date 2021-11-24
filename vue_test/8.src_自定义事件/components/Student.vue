<template>
  <div class="Student">
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <h2>number:{{number}}</h2>
      <button @click="add">number++</button>
      <button @click="sendStudentName">点我获取学生名称</button>
      <button @click="sendStudentAge">点我获取学生年龄</button>
      <button @click='unbind'>点我解绑所有的自定义事件</button>
      <button @click='death'>点我销毁Student组件的实例对象(vc)</button>
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
                number:1
            }
        },
        methods: {
            add(){
                console.log('number被调用了')
                this.number++
            },
            sendStudentName(){
                // 触发Student组件实例身上的atguigu事件
                this.$emit('atguigu',this.name,666,777)
            },
            sendStudentAge(){
                this.$emit('test',this.age)
            },
            unbind(){
                // this.$off('atguigu')//只适用于解绑一个自定义事件
                // this.$off(['atguigu','test'])//解绑多个自定义事件
                this.$off()//解绑所有的自定义事件
                
            },
            death(){
                this.$destroy()//销毁了当前Student组件的实例，销毁后所有的Student实例的自定义事件全都不奏效
            }
        },
    }
</script>

<style scoped>
    .Student{
        background-color: aquamarine;
       
    }
</style>