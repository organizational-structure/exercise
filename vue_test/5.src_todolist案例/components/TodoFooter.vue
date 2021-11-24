<template>
  <div class="todo-footer" v-show="total">
        <label>
          <!-- <input type="checkbox" :checked='isAll' @change="checkAll"/> -->
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / {{total}}
        </span>
        <button class="btn btn-danger" @click="clearTodo">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name:'TodoFooter',
        props:['todos','checkedAll','clear'],
        computed:{
          total(){
            return this.todos.length
          },
          doneTotal(){
            const x = this.todos.reduce((pre,current)=>{
              // console.log(pre,current)
              return pre + (current.done ? 1 : 0)
            },0)
            return x
          },
          isAll:{
            get(){
              return this.total === this.doneTotal && this.total > 0;
            },
            set(value){
              this.checkedAll(value)
            }
          }
        },
        methods: {
          // checkAll(e){
          //   // console.log(e.target.checked)
          //   this.checkedAll(e.target.checked)
          // }
          clearTodo(){
            this.clear()
          }
        },
    }
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>