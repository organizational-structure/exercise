<template>
  <div class="todo-footer" v-show="sumTodo">
        <label>
          <!-- <input type="checkbox" :checked="isAll" @click="allTodo"/> -->
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{sumTodo}}
        </span>
        <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name:'TodoFooter',
        props:['todos'],
        computed:{
            sumTodo(){
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
                    return this.sumTodo === this.doneTotal && this.sumTodo > 0;
                },
                set(value){
                    this.$emit('checkAll',value)
                }
            }
        },
        methods: {
            clear(){
                this.$emit('clearTodo')
                
            }
        },
        
    }
</script>

<style scoped>

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