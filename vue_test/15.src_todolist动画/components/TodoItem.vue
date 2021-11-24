<template>
  <li>
          <label>
            <input type="checkbox" :checked='todoObj.done' @click='handlCheck(todoObj.id)'/>
            <span  v-show="!todoObj.isEdit">{{todoObj.title}}</span>
            <input type="text" v-show="todoObj.isEdit" @blur="handleBlur(todoObj,$event)" ref="inputTitle">
          </label>
          <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
          <button class="btn btn-Edit" @click="handleEdit(todoObj)" v-show="!todoObj.isEdit">编辑</button>
          
  </li>
</template>

<script>
    export default {
        name:'TodoItem',
        props:['todoObj'],
        methods: {
            handlCheck(id){
                this.$bus.$emit('checkTodo',id)
            },
            handleDelete(id){
                if(confirm('确定删除吗？')){
                    this.$bus.$emit('deleteTodo',id)
                } 
            },
            handleEdit(todoObj){
              if(todoObj.hasOwnProperty('isEdit')){
                todoObj.isEdit = true
              }
              this.$set(todoObj,'isEdit',true)
              
              this.$nextTick(function(){
                this.$refs.inputTitle.focus()
              })
            },
            handleBlur(todoObj,e){
              todoObj.isEdit = false
              if(!e.target.value.trim()) return alert('输入框不能为空！')
              this.$bus.$emit('changeTitle',e.target.value)
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

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: skyblue;
}
li:hover button{
  display: block;
}
</style>