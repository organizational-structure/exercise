<template>
  <div>
    <h2>当前的和是：{{$store.state.sum}}</h2>
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
    export default {
       name:'Count',
       data() {
         return {
           n:1//用户选择的数字
         }
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