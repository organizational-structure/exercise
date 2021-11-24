<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click='showName'>点击显示学校名称</button>
  </div>
</template>

<script>
    import {mixin} from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                msg:'欢迎学习Vue！',
                name:'尚硅谷',
                address:'北京'
            }
        },
        mixins:[mixin]
    }
</script>

<style>

</style>