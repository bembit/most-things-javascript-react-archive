$(document).ready(function() {
    $.getJSON("/api/todos")
        .then(addTodos)

    $('#todoInput').keypress(function(event) {
        if(event.which == 13) {
            createTodo();
        }
    });
//listening for the ul clicks, since the span is not there at page load
//then we give a second argument, to check for span clicks only inside the .list classnamed ul
    $('.list').on('click', 'span', function(e) {
        //stop crossing out list items when clicking on delete buttons
        e.stopPropagation();
        removeTodo($(this).parent());
    });
    $('.list').on('click', 'li', function() {
        updateTodo($(this));
    });
});

function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    var newTodo = $('<li class="task">'+todo.name+'<span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed)
    if(todo.completed) {
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

function createTodo() {
    //send a post request to our api
    var userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput })
    .then(function(newTodo) {
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err) {
        console.log(err);
    })
}

function removeTodo(todo) {
    var clickedId = todo.data('id');
    var deleteUrl = '/api/todos/' + clickedId;

    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(data){
        todo.remove();
    })
    .catch(function(err) {
        console.log(err);
    })
}

function updateTodo(todo) {
    // console.log(todo.data('completed'));
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone}
    // console.log(updateData);
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedTodo){
        todo.toggleClass("done");
        todo.data('completed', isDone);
    })
}