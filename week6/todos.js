import {
    Todo
} from './todo.js';

let todos = [];
let content = document.getElementById("addText");
let complete = [];
let incomplete = [];
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

            if (todo.Completed === 1) {
                complete.push(todo);
            } else {
                incomplete.push(todo);
            }
            console.log(todos);
        }
    };
    //--------------------------------------------------------code to delete item-------------------------------------------------
    if (event.target.tagName == "I") {
        let li = event.target.parentNode.parentNode;
        console.log(li);
        let id = li.id;
        let todo = todos.find(t => t.Id == id);
        if (id === todo);
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
        li.remove();
        console.log(todos);
    }
}, false);

// document.querySelector('#tasks').addEventListener('click',
//     (e) => {
//         let id = e.target.id;
//         let todo = todos.find(t => t.Id == id);
//         if (todo) {
//             todo.Completed = !todo.Completed;
//         }
//         console.log(todos);
//     }
// );

//--------------------------------------------------------code to delete item-------------------------------------------------
// document.querySelectorAll(".trash").forEach(item => {
//     item.addEventListener('click', function (event) {
//         let target = event.target;
//         console.log(target);
//         if (target.tagName == "I") {
//             target.parentNode.parentNode.Id.remove();
//         }
//         console.log(todos);
//     })
// });

// document.querySelector('#tasks').addEventListener('click',
//     (e) => {
//         let id = e.target.id;
//         let todo = todos.find(t => t.Id == id);
//         if (todo) {
//             todos.splice(todo);
//         }
//         console.log(todos);
//     }
// );

//const data = JSON.parse(localStorage.getItem('todos'))
//----------------------------------------------------------filter completed tasks-------------------------------------------------
// function completedTasksList() {
//     let complete = [];
//     let todo = todos.find(t => t.Completed == 1);
//     complete.push(todo);
//     console.log(completed);
//     // if todos.filter(todo.Completed);
//     //     console.log(todos);
// };
document.getElementById("complete").addEventListener('click', function (e) {
    if (event.target.tagName === "BUTTON") {
        console.log(complete);
    }
});
//----------------------------------------------------------code to clear all items from list-----------------------------------------
function clear() {
    let deleteList = document.getElementById('tasks');
    while (deleteList.hasChildNodes()) {
        deleteList.removeChild(deleteList.firstChild);
        let todos = [];
        localStorage.clear();
    }
};
document.getElementById("clearAll").addEventListener('click', clear);



// const addTask = document.getElementById("submit");
// const removeTask = document.getElementById("trash");
// const complete = document.getElementById("complete");
// const undone = document.getElementById("unfinished");
// const clearList = document.getElementById("clearall");