<template>
  <div id="app">
    <h1>Yubi TodoList </h1>
    <InputTodo/>
    <Todos />
  </div>
</template>

<script>
import Todos  from './components/Todos.vue'
import InputTodo from './components/InputTodo.vue'

export default {
  name: 'app',
  components: {
    Todos, InputTodo
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
