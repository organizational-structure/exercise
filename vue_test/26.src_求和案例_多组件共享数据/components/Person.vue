<template>
  <div>
      <h2>人员列表</h2>
      <h2 style="color:red">Count组件的和是：{{sum}}</h2>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="upData">添加</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import { mapState } from 'vuex'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        methods: {
            upData(){
                const newPerson = {id:nanoid(),name:this.name}
                this.$store.commit('PERSONLIST',newPerson)
                this.name = ''
            }
        },
        computed:{
            ...mapState(['personList','sum'])
        }
    }
</script>

<style>

</style>