<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click='showName'>点击显示学生姓名</button>
  </div>
</template>

<script>
    //局部引入
    import {mixin} from '../mixin'

    export default {
        name:'Student',
        data() {
            return {
                msg:'你好同学！',
                name:'Tom',
                age:18
            }
        },
        mixins:[mixin]
    }
</script>

<style>

</style>