<template>
  <div>
      <li>
          <label>
            <input type="checkbox" 
            :checked="todos.done" 
            @click="checkTodo(todos.id)"/>
            <span>{{todos.title}}</span>
          </label>
          <button class="btn btn-danger" @click="handleDelet(todos.id)">删除</button>
      </li>
  </div>
</template>

<script>
    export default {
        name:'TodoItem',
        props:['todos','checkTodo','deleteTodo'],
        methods: {
          handleDelet(id){
            if(confirm('确定删除吗？')){
              this.deleteTodo(id)
            }
          }
        },
    }
</script>

<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:hover{
  background-color: skyblue;
}
li:hover button{
  display: block;
}
/* li:last-child {
  border-bottom: none;
} */

</style>