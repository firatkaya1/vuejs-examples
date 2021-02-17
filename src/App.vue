<template>
  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

export default {
  name: 'App',
  components: {
    Todos,
    Header,
    AddTodo
  },
  data() {
    return {
      todos:[
        {
          id:1,
          title:"Todo One",
          completed:false
        },
        {
          id:2,
          title:"Todo Two",
          completed:true
        },
        {
          id:3,
          title:"Todo Three",
          completed:false
        },
        {
          id:4,
          title:"Todo Four",
          completed:true
        }
      ]
    }
  },
  methods:{
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo){
      this.todos = [...this.todos,newTodo];
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  width: 50%;
  margin:20px auto;
  }
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
.btn:focus,
input[type="text"]:focus {
  outline: 0;
}
</style>
