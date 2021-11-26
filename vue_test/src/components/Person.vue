<template>
  <div>
      <h2>人员列表</h2>
      <h2 style="color:red">Count组件的和是：{{sum}}</h2>
      <h2>获取第一个人的姓名:{{firstPersonName}}</h2>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="upData">添加</button>
      <button @click="addPerson">添加一个姓王的人</button>
      <button @click="addPersonServer">添加一个随机的人</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    // import { mapState } from 'vuex'
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
                this.$store.commit('personAbout/PERSONLIST',newPerson)
                this.name = ''
            },
            addPerson(){
                const newPerson = {id:nanoid(),name:this.name}
                this.$store.dispatch('personAbout/addPersonWang',newPerson)
                this.name = ''
            },
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },
        computed:{
            sum(){
                return this.$store.state.countAbout.sum
            },
            personList(){
                return this.$store.state.personAbout.personList
            },
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }
        }
    }
</script>

<style>

</style>