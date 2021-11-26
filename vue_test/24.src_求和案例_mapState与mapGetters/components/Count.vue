<template>
  <div>
    <h2>当前的和是：{{sum}}</h2>
    <h2>当前的求和放大10倍为：{{bigSum}}</h2>
    <h2>我在{{school}},学习{{subject}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前是奇数的话就加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
    // 辅助函数 Vuex.mapState
    import {mapState,mapGetters} from 'vuex'

    export default {
       name:'Count',
       data() {
         return {
           n:1//用户选择的数字
         }
       },
       computed:{
         /* sum(){
           return this.$store.state.sum
         },
         school(){
           return this.$store.state.school
         },
         subject(){
           return this.$store.state.subject
         },
         bigSum(){
           return this.$store.getters.bigSum
         } */

        // 借助mapState生成计算属性，从state中读取数据。[不可以使用简写方式，不然就是读取sum这个变量]
         ...mapState({sum:'sum',school:'school',subject:'subject'}),

        // 借助mapGetters生成计算属性，从state中读取数据。
        //  ...mapGetters({bigSum:'bigSum'}),

        // ...mapState(['sum','school','subject'])
        ...mapGetters(['bigSum'])
        

       },
       methods: {
        increment(){
          this.$store.commit('Add',this.n)
        },
        decrement(){
         this.$store.commit('Subtract',this.n)
        },
        incrementOdd(){
         this.$store.dispatch('addOdd',this.n)
        },
        incrementWait(){
          this.$store.dispatch('addWait',this.n)
        },
       },
    }
</script>

<style>
    button{
      margin-left: 5px;
    }
</style>