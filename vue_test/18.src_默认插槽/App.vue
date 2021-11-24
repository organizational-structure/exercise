<template>
  <div class="container">
    <Category title="美食">
      <img src="../imgs/6.webp" alt="">
    </Category>
    <Category title="游戏分类" >
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影分类">
      <video controls src="../video/9.24-王者逻辑.mp4"></video>
    </Category>
  </div>
</template>

<script>
    
    import Category from './components/Category.vue'
    
    export default {
      components: {Category},
      name:'App',
      data() {
        return {
          foods:['火锅','烧烤','小龙虾','牛排'],
          games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
          films:['《教父》','《拆弹专家》','《你好，李焕英》','《我们的婚礼》']
        }
      },
    }
</script>

<style>
.container{
        display: flex;
        justify-content: space-around;   
    }
    img,video{
      width: 100%;
    }
</style>