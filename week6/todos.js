import {
    Todo
} from './todo.js';

let todos = [];
let content = document.getElementById("addText");

//-----------------------------------------add task-------------------------------------

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    let todo = new Todo(content.value);
    todos.push(todo);
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
    }
}, false);

//--------------------------------------------------------code to delete item-------------------------------------------------
document.querySelectorAll(".trash").forEach(item => {
    item.addEventListener('click', function (event) {
        console.log(event.target);
        if (event.target.tagName === 'I') {
            event.target.parentElement.parentElement.remove();
        }
    }, false);
})

//----------------------------------------------------------code to clear all items from list-----------------------------------------
// let li = document.querySelectorAll("li");
// let trash = document.createElement("button");
// let i = document.createElement("i");
// i.className += ("fa fa-trash-o fa-lg");
// li.appendChild(t);
// trash.appendChild(i);
// trash.classList.add("trash");
// trash.setAttribute("type", "submit");
// li.appendChild(trash);
// //trash.addEventListener('click', function() {

// const addTask = document.getElementById("submit");
// const removeTask = document.getElementById("trash");
// const complete = document.getElementById("complete");
// const undone = document.getElementById("unfinished");
// const clearList = document.getElementById("clearall");