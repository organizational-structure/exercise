<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{myAge}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click='updataAge'>点击年龄++</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'你好同学！',
                myAge:this.age
            }
        },
        methods: {
            updataAge(){
                this.myAge++
            }
        },
        // props:['name','sex','age']//简单写法

        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number
        // }

        props:{
            name:{
                typeof:String,
                required:true
            },
            sex:{
                typeof:String,
                required:true
            },
            age:{
                typeof:Number,
                default:99
            }
        }
    }
</script>

<style>

</style>