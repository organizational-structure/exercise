<template>
  <div class="Category">
      <h4>{{title}}</h4>
      <slot :games="games">我是默认的一些内容</slot>
  </div>
</template>

<script>
    export default {
       name:'Category',
       props:['title'],
       data() {
        return {
          games:['红色警戒','穿越火线','劲舞团','超级玛丽']
        }
      },
    }
</script>

<style>
    .Category{
        width: 200px;
        background-color: aquamarine;
    }
    h4{
        background-color: bisque;
        text-align: center;
    }
</style>