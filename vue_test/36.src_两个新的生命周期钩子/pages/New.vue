<template>
  <ul>
        <li :style="{opacity}">欢迎学校Vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
        
  </ul>
</template>

<script>
    export default {
        name:'New',
        data() {
          return {
            opacity:1
          }
        },
        // beforeDestroy() {
        //   console.log('New组件即将被销毁')
        //   clearInterval(this.time)
        // },
        // mounted() {
        //     this.time = setInterval(()=>{
        //         console.log('123');
        //         this.opacity -= 0.01;
        //         if(this.opacity <= 0) this.opacity = 1;
        //     },20)
            
        // }
        activated() {
          console.log('New组件被激活了')
          this.time = setInterval(()=>{
                console.log('123');
                this.opacity -= 0.01;
                if(this.opacity <= 0) this.opacity = 1;
            },20)
        },
        deactivated() {
          console.log('New组件失活了')
          clearInterval(this.time)
        },
    }
</script>

<style>

</style>