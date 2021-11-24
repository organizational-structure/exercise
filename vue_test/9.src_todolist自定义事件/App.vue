<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoTop
      @receive='receive'
      />
      <TodoList 
      :todos='todos' 
      :checkTodo='checkTodo'
      :deleteTodo='deleteTodo'
      
      />
      <TodoFooter :todos='todos' @checkAll='checkAll' @clearTodo='clearTodo'/>
    </div>
  </div>
</div>

</template>

<script>
  import TodoTop from './components/TodoTop.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  export default {
      name:'App',
      components:{TodoTop,TodoList,TodoFooter},
      data() {
        return {
          todos:JSON.parse(localStorage.getItem('todos')) || []
        }
      },
      methods: {
        //改变done的数据
        checkTodo(id){
          this.todos.forEach((todo)=>{
            if(todo.id === id) todo.done = !todo.done
          })
        },
        //添加todo
        receive(todo){
          this.todos.unshift(todo)
          // console.log('我收到了数据：'+ todo)
        },
        checkAll(done){
          this.todos.forEach((todo)=>{
            todo.done = done
          })
        },
        deleteTodo(id){
           this.todos = this.todos.filter((todo)=>{
            return todo.id != id
          })
        },
        clearTodo(){
          this.todos = this.todos.filter((todo)=>{
            return !todo.done
          })
        }
      },
      watch:{
        todos:{
          deep:true,
          handler(value){
            localStorage.setItem('todos',JSON.stringify(value))
          }
        }
      }
  }
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>