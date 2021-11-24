<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="../imgs/6.webp" alt="">
      <a slot="footer" href="javascript:;">更多美食</a>
    </Category>
    <Category title="游戏分类" >
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="javascript:;">单机游戏</a>
        <a href="javascript:;">网络游戏</a>
      </div>
    </Category>
    <Category title="电影分类" >
      <video slot="center" controls src="../video/9.23-放大镜.mp4"></video>
      <template v-slot:footer>
          <div class="foot">
            <a href="javascript:;">经典</a>
            <a href="javascript:;">热门</a>
            <a href="javascript:;">推荐</a>
          </div>
          <h3>欢迎前来观影</h3>
      </template>
      
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
.container,.foot{
        display: flex;
        justify-content: space-around;   
        text-align: center;
    }
    img,video{
      width: 100%;
    }
   
</style>