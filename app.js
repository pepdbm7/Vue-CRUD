const app = new Vue({
el: '#app',
data: {
    title: 'Vue CRUD',
    todos: [],
    newTodo: '',
},
methods: {
    addTodo: function() {  //can't be arrow fn, bc we couldn't use 'this'!
        this.todos.push({
            name: this.newTodo,
            status: true,
        });
        //empty input:
        this.newTodo = '';
    },
    editTodo: function(index) {
        this.todos[index].status = !this.todos[index].status;
    },
    deleteTodo: function(index) {
        this.todos.splice(index, 1)
    }
}
});