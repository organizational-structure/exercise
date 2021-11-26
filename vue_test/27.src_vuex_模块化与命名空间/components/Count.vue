<template>
  <div>
    <h2>当前的和是：{{sum}}</h2>
    <h2>当前的求和放大10倍为：{{bigSum}}</h2>
    <h2>我在{{school}},学习{{subject}}</h2>
    <!-- <h2 style="color:red">Person组件中的人数是{{personList.length}}</h2> -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前是奇数的话就加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
    // 辅助函数 Vuex.mapState
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
       name:'Count',
       data() {
         return {
           n:1//用户选择的数字
         }
       },
       computed:{
        
        // ...mapState({sum:'sum',school:'school',subject:'subject',personList:'personList'}),
        ...mapState('countAbout',['sum','school','subject']),

        ...mapGetters('countAbout',['bigSum'])
        

       },
       methods: {
        
        ...mapActions('countAbout',{incrementOdd:'addOdd',incrementWait:'addWait'}),
        // ...mapActions()

        ...mapMutations('countAbout',{increment:'Add',decrement:'Subtract'})
       },
    }
</script>

<style>
    button{
      margin-left: 5px;
    }
</style>