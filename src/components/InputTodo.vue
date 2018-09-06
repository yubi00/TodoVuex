<template>
    <div id="inputtodo">
        <input id = "inputbox" placeholder= "Add your todo list" type="text" v-model="newtodo" @keyup.enter="addTodo(newtodo)" >
        <button id="add" @click="addTodo(newtodo)"> Add </button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {

    computed: {
        newtodo: {
            get() {
                return this.$store.state.newtodo;
            },

            set(value) {
                this.$store.state.newtodo = value;
            }
            
        }
            
    },
    
    methods: {
       ...mapActions([
           'addTodo'
       ])
    }
}
</script>

<style scoped>

input[type="text"] {
    width: 700px;
    height: 50px;
    padding: 1px;
}

#add {
    width: 50px;
    height: 55px;
    margin-left: 10px;
}

</style>
