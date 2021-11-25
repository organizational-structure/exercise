<template>
  <div class="container">
    <Category title="游戏分类" >
      <template scope='atguigu'>
        <ul>
            <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏分类" >
       <template scope='{games}'>
          <ol>
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
          </ol>
       </template>
    </Category>
    <Category title="游戏分类" >
      <template slot-scope="{games}">
          <h5 v-for="(item,index) in games" :key="index">{{item}}</h5>
       </template>
            
    </Category>
    
  </div>
</template>

<script>
    
    import Category from './components/Category.vue'
    
    export default {
      components: {Category},
      name:'App',
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