import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: [
            {name: 'Add your Todo', completed: false, editing: false},
            
          ],

          newtodo: '',
          beforeedit: ''

        
    },

    getters: {
        
    },

    mutations: {
        addTodo(state,todo) {
            state.todos.push({
                name: todo,
                completed: false,
                editing: false
            });

            state.newtodo = '';
        },
        deleteTodo: (state, index) => {
            state.todos.splice(index, 1);
        },

        updateTodo: (state, todo) => {
            state.beforedit = todo.name; 
           todo.editing = true;
        },

        doneEdit: (state, todo) => {
            todo.editing = false;
        },

        cancelEdit: (state, todo) => {
            todo.editing = false;
            todo.name = state.beforedit;
        }

    },

    actions: {
        deleteTodo: (context, index) => {
            context.commit('deleteTodo', index);
        },

        addTodo: (context, todo) =>  {
            context.commit('addTodo', todo);
        },

        updateTodo: (context, todo) => {
            context.commit('updateTodo', todo);
        },
        
        doneEdit: (context, todo) => {
            context.commit('doneEdit', todo);
        },

        cancelEdit: (context, todo) => {
            context.commit('cancelEdit', todo);
        }
    
    }
})
