<template>
  <div class="container">
        <Search/>
        <List/>
    </div>
</template>

<script>
    
    import Search from './components/Search.vue'
    import List from './components/List.vue'
    export default {
      components: {List,Search},
      name:'App',
    }
</script>

<style>
.container{
            width: 750px;
            margin: 0 auto;
        }
</style>