<template>
    <div id="todos">
         <div id="completeall">
            <input type="checkbox" v-model="checked"  v-on:change="completeAll()">
            <label>Select All</label>
        </div>
        <ul v-if="flag===0">
            <li v-for="(todo,index) in todos" v-bind:key="index">
                <div v-if="!todo.editing">
                    <input type="checkbox" id="completed" v-model="todo.completed" @click="isCompleted(todo)">
                    <label  @dblclick="updateTodo(todo)" :class = "{todo : todo.completed}" ><strong>{{ todo.name }}</strong></label>
                <span id="deletetodo" @click="deleteTodo(index)">X</span>
                </div>
                <input type="text" v-else class="edittodo"  v-model="todo.name" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus/>
            </li>
        </ul>

        <ul v-if="flag===1">
            <li id="completedtodos" v-for="(todo,i) in showCompleted" v-bind:key="i"> 
                <label> <strong>{{ todo.name }}</strong></label>
            </li>
        </ul>

        <ul v-if="flag===2">
            <li id="incompletedtodos" v-for="(todo,ind) in showIncompleted" v-bind:key="ind">
               <label> <strong>{{ todo.name }}</strong></label>
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

        showCompleted: function() {
            return this.$store.state.todos.filter(todo => todo.completed);
        },
        showIncompleted: function() {
            return this.$store.state.todos.filter(todo => !todo.completed);
        },

        flag() {
            return this.$store.state.flag;
        },

       checked: {
           get() {
               return this.$store.state.checked;
           },

           set(value) {
               this.$store.state.checked = value;
           }
       },

      


    },

    methods: {

        ...mapActions([
            'deleteTodo','updateTodo','doneEdit','cancelEdit','completeAll','isCompleted'
        ])
    },
    directives: {
        focus: {
            inserted: function (el) {
            el.focus()
            }
        }
    }
    
}
</script>

<style scoped>
 ul{
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

#completed {
    float: left;
}

.todo{
    text-decoration: line-through;
}

#completeall {
    margin-right: 800px;
    
}

#todos {
    padding: 20px;
}




</style>
