<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button ref="but" @click='show'>点我显示上方DOM元素</button>
      <School ref="sch"/>
  </div>
</template>

<script>
    import  School from './components/School.vue'
    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:'你好啊！'
            }
        },
        methods: {
            show(){
                console.log(this.$refs.title)//Dom元素
                console.log(this.$refs.but)//Dom元素
                console.log(this.$refs.sch)//School组件得实例对象(VC)
            }
        }
    }
</script>

<style>

</style>