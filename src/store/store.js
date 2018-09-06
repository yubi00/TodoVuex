import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [{
            name: 'Add a new todo list',
            completed: false,
            editing: false
          }],

          newtodo: '',
          beforeedit: '',
          checked: false,
          todosleft: 0,
          flag: 0
          

        
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
            localStorage.setItem('items', JSON.stringify(state.todos));
        },
        deleteTodo: (state, index) => {
            state.todos.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(state.todos));
        },

        updateTodo: (state, todo) => {
            state.beforedit = todo.name; 
           todo.editing = true;
        },

        doneEdit: (state, todo) => {
            todo.editing = false;
            localStorage.setItem('items', JSON.stringify(state.todos));
        },

        cancelEdit: (state, todo) => {
            todo.editing = false;
            todo.name = state.beforedit;
        },

        completeAll: state => {
            if(state.checked){
                state.todos.filter(todo => {
                    todo.completed = true;
                    
                });
                state.todosleft = state.todos.length; 
            }
            else {
                state.todos.filter(todo => {
                    todo.completed = false;
                    
                });
                state.todosleft = 0;
            }
           
            
        },
        isCompleted: (state, todo) => {
            todo.completed = !todo.completed;
            if(todo.completed === true) {
                state.todosleft --;
            }
            else
            {
                state.todosleft ++;
            }
        },

        showAll: state => {
            state.flag = 0;
        },

        completedTodos: state => {
            state.flag = 1;
        },

        incompletedTodos: state => {
            state.flag = 2; 
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
        },

        completeAll: context => {
            context.commit('completeAll');
        },

        isCompleted: (context, todo) => {
            context.commit('isCompleted', todo);
        },

        showAll: context => {
            context.commit('showAll');
        },

        completedTodos: context => {
            context.commit('completedTodos');
        },

        incompletedTodos: context => {
            context.commit('incompletedTodos');
        }


    
    }
})
