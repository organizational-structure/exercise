<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
    
    import Count from './components/Count.vue'
    import Person from './components/Person.vue'
    
    export default {
      components: {Count,Person},
      name:'App',
      mounted() {
        console.log(this)
      },
    }
</script>

<style>

</style>