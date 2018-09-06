<template>
    <div id="filters">
         Todos left:  <span> <strong> {{ count }} </strong></span>
        <button  @click="showAll">All </button>
        <button @click="completedTodos"> Completed </button>
        <button @click="incompletedTodos" >Not-completed </button>
        <button @click="clearCompleted">Clear Completed</button>    
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {

 computed: {
         count() {
            var lefttodos = this.$store.state.todos.filter(todo => !todo.completed);
            this.$store.state.todosleft = lefttodos.length;
            return this.$store.state.todosleft
       }
    },

    methods: {
        ...mapActions([
            'showAll', 'completedTodos', 'incompletedTodos', 'clearCompleted'
        ])
    }
}
</script>

<style scoped>
#filters {
    margin-left: -300px;
 }
 #filters button {
     margin: 10px;
 }
 #completedtodos {
     float: right;
     margin: 20px;
 }
 #incompletedtodos {
     float: left;
     margin: 20px;
 }
</style>
