<template>
  <div>
    <Count/>
  </div>
</template>

<script>
    
    import Count from './components/Count.vue'
    
    export default {
      components: {Count},
      name:'App',
      mounted() {
        console.log(this)
      },
    }
</script>

<style>

</style>