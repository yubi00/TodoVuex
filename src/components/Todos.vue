<template>
    <div id="todos">
        
        <ul class="todoslist">
            <li v-for="(todo,index) in todos" v-bind:key="index">
                <div v-if="!todo.editing">
                    <label class="todo" @dblclick="updateTodo(todo)" ><strong>{{ todo.name }}</strong></label>
                   <span id="deletetodo" @click="deleteTodo(index)">X</span>
                </div>
                <input type="text" v-else class="edittodo"  v-model="todo.name" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)"/>
            </li>
        </ul>

    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
    computed: {
        todos() {
            return this.$store.state.todos;
        },


    },

    methods: {

        ...mapActions([
            'deleteTodo','updateTodo','doneEdit','cancelEdit'
        ])
    }
    
}
</script>

<style scoped>
 ul.todoslist {
     list-style-type: none;    
     width: 70%;
     margin: auto;
     padding: 0; 
     }
     

 li {
     margin: 20px;
     width: 100%;
     background-color: cadetblue;
     height: 60px;
     padding-top: 30px;
     

 }

 #deletetodo {
     float: right;
     margin-right: 20px;
 }


.edittodo {
    width: 96%;
    height: 68px;
    padding: 10px;
    background-color: cadetblue;
    margin-top: -30px;
}

#deletetodo:hover {
    color: red;
}
 
</style>
