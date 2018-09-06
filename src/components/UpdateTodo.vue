<template>
     <div id="updatetodo">
        <input id = "updatingitem"  type="text" @keyup.enter="updateTodo()" >
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
input[type="text"] {
    width: 700px;
    height: 50px;
    padding: 1px;
}
</style>
