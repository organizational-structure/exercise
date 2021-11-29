<template>
<div>
  <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- 通过router-link默认会倍渲染成一个<a>标签 -->
          <router-link class="list-group-item" active-class="active" to='/about'>About</router-link>
          <router-link class="list-group-item" active-class="active" to='/home'>Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由的出口 路由匹配到组件将渲染在这里 -->
            <router-view></router-view>
          </div>
        </div>
    </div>
    </div>
</div>
  
</template>

<script>
    import Banner from './components/Banner'
    
    export default {
      name:'App',
      components:{Banner}
    }
</script>

<style>

</style>