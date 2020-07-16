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

document.querySelector('#tasks').addEventListener('click',
    (e) => {
        let id = e.target.id;
        let todo = todos.find(t => t.Id == id);
        if (todo) {
            todo.Completed = !todo.Completed;
        }
        console.log(todos);
    }
);

//--------------------------------------------------------code to delete item-------------------------------------------------
document.querySelectorAll(".trash").forEach(item => {
            item.addEventListener('click', function (event) {
                let target = event.target;
                console.log(target.parentNode.parent.Node.Id);
                if (target.tagName == "I") {
                   target.parentNode.parent.Node.Id.remove();
                }
                console.log(todos);
            }
            )
        });

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




            //myArray.find(x => x.id === '45').foo
            // list.addEventListener('click', event => {
            //     if (event.target.classList.contains("checked")) {
            //         const itemKey = event.target.parentElement.dataset.key;
            //         toggleDone(itemKey);
            //     }
            //     if (event.target.classList.contains("trash")) {
            //         const itemKey = event.target.parentElement.dataset.key;
            //         deleteTodo(itemKey)
            //     }
            // });

            // function deleteTodo(key) {

            //     const index = todoItems.findIndex(item => item.id === Number(key));

            //     const todo = {
            //         deleted: true,
            //         ...todoItems[index]
            //     };
            //     // remove the todo item from the array by filtering it out
            //     todoItems = todoItems.filter(item => item.id !== Number(key));
            //     outputTodos(todo);
            // }
            // console.log(todos);

            // function toggleDone(key) {
            //     const index = todos.findIndex(todo => todo.Id === Number(key));
            //     todos[index].Completed = !todos[index].Completed;
            //     //renderTodo(todoItems[index]);
            //     outputTodos(todos[index]);
            // }
            //----------------------------------------------------------code to clear all items from list-----------------------------------------

            // const addTask = document.getElementById("submit");
            // const removeTask = document.getElementById("trash");
            // const complete = document.getElementById("complete");
            // const undone = document.getElementById("unfinished");
            // const clearList = document.getElementById("clearall");