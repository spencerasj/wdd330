import {
    Todo
} from './todo.js';

const content = document.getElementById("addText");
let todos = [];
localStorage.setItem('todos', JSON.stringify(todos));
const data = JSON.parse(localStorage.getItem('todos'));

//-----------------------------------------add task-------------------------------------

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    let todo = new Todo(content.value);
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
    outputTodos();
});

document.getElementById("addText").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
        document.getElementById("addText").value = "";
    }
});

function outputTodos() {
    document.querySelector("#tasks").innerHTML = "";

    todos.forEach(
        todo => {
            document.querySelector("#tasks").innerHTML +=
                `<li id="${todo.Id}">${todo.Content}<button class="trash"><i class="fa fa-trash-o fa-lg"></i></button></li>`
        });
};
//---------------------------------------------------------code to check off item---------------------------------------------

const list = document.getElementById("tasks");
list.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        let id = event.target.id;
        let todo = todos.find(t => t.Id == id);
        if (todo) {
            todo.Completed = !todo.Completed;
            console.log(todos);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    };

    //--------------------------------------------------------code to delete item-------------------------------------------------
    if (event.target.tagName == "I") {
        let li = event.target.parentNode.parentNode;
        console.log(li);
        let id = li.id;
        let todo = todos.find(t => t.Id == id);
        if (todo) {
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        li.remove();
        console.log(todos);
        }
    }
}, false);




//----------------------------------------------------------filter completed tasks-------------------------------------------------

function outputComplete() {
    document.querySelector("#tasks").innerHTML = "";
    let items = todos.filter(todo => todo.Completed == 1);
    items.forEach(
        item => {
            document.querySelector("#tasks").innerHTML +=
                `<li>You have completed:    ${item.Content}</li>`
        });
};
document.getElementById("complete").addEventListener('click', outputComplete);

//----------------------------------------------------------filter not completed tasks-------------------------------------------------

function outputNotComplete() {
    document.querySelector("#tasks").innerHTML = "";
    let items = todos.filter(todo => todo.Completed == 0);
    items.forEach(
        item => {
            document.querySelector("#tasks").innerHTML +=
                `<li>Not completed:   ${item.Content}</li>`
           
        });
};
document.getElementById("unfinished").addEventListener('click', outputNotComplete);

//----------------------------------------------------------code to clear all items from list-----------------------------------------

function clear() {
    let deleteList = document.getElementById('tasks');
    while (deleteList.firstChild) {
        deleteList.removeChild(deleteList.firstChild);
        // let todos = [];
        localStorage.clear();
        todos.splice(0, todos.length);
        
       
    }
};
document.getElementById("clearAll").addEventListener('click', clear);



