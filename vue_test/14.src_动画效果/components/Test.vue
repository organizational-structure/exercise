<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">尚硅谷</h1>
      <h1 v-show="!isShow" key="2">你好啊</h1>
      </transition-group>
  </div>
</template>

<script>
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: aquamarine;
    }

    .hello-enter,.hello-leave-to{
        background-color: bisque;
        transform: translateX(-100%);
    }
    .hello-leave,.hello-enter-to{
        background-color: cadetblue;
        transform: translateX(0);
    }
    .hello-enter-active{
        animation: move 0.5s linear;
    }
    .hello-leave-active{
        animation: move 0.5s linear reverse;
    }

    @keyframes move {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>>