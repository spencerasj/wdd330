import {
    Todo
} from './todo.js';

let todos = [];
let content = document.getElementById("addText");

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
    }
});

function outputTodos() {
    document.querySelector("#tasks").innerHTML = "";

    todos.forEach(
        todo => {
            if (todo.Completed) {
                document.querySelector("#tasks").innerHTML +=
                    `<li id="${todo.Id}" class="checked">${todo.Content}</li>`
            

            } else {
                document.querySelector("#tasks").innerHTML +=
                    `<li id="${todo.Id}">${todo.Content}</li>`
               
            }
        });
};
// todo.appendChild
// document.querySelectorAll("li").innerHTML +=
// `<button class="trash" type="submit"><i class="fa fa-trash-o fa-lg"></i></button>`

document.getElementById("tasks").addEventListener('click', function (event) {
    console.log(event.target);
    let id = event.target.id;
    let todo = todos.find(t => t.Id == id);
    if (todo) {
        todo.Completed = 1;
    }
    event.target.classList.toggle('checked');
    console.log(todos);
    outputTodos();
});
let li = document.querySelectorAll("li");
let trash = document.createElement("button");
let i = document.createElement("i");
i.className += ("fa fa-trash-o fa-lg");
li.appendChild(t);
trash.appendChild(i);
trash.classList.add("trash");
trash.setAttribute("type", "submit");
li.appendChild(trash);
//trash.addEventListener('click', function() {
const list = document.getElementById("tasks");
const addTask = document.getElementById("submit");
const removeTask = document.getElementById("trash");
const complete = document.getElementById("complete");
const undone = document.getElementById("unfinished");
const clearList = document.getElementById("clearall");