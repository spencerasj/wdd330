'use strict'
let items = [];

// Create a new list item when clicking on the "Add" button also added trash button
function newElement() {
  let ul = document.getElementById("tasks");
  let li = document.createElement("li");
  let text = document.getElementById("addText").value;
  let t = document.createTextNode(text);
  let trash = document.createElement("button");
  let i = document.createElement("i");
  //  ** li.addEventListener
  i.className += ("fa fa-trash-o fa-lg");
  li.appendChild(t);
  trash.appendChild(i);
  trash.classList.add("trash");
  li.setAttribute("id", Date.now());
  // li.classList.add("checked");
  li.appendChild(trash);
  ul.appendChild(li);

  if (text === '') {
    alert("Please enter in a task");
  } else {
    items.push(text);
    console.log(items);
    //---------------------------------Code for local storage---------------------------// 
  localStorage.setItem("tasks", JSON.stringify(items));
    const data = JSON.parse(localStorage.getItem('tasks'))
  }
  document.getElementById("addText").value = "";
};
document.getElementById("submit").addEventListener("click", newElement);
document.getElementById("addText").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("submit").click();

  };

});
// ------------------Code for clear all button-------------------------
function clear() {
  let deleteList = document.getElementById('tasks');
  while (deleteList.hasChildNodes()) {
    deleteList.removeChild(deleteList.firstChild);
    localStorage.clear();
  }
};
document.getElementById("clearAll").addEventListener('click', clear);
//---------------Code for check item off list------------------------------------
function addClass() {
  let li = document.querySelectorAll('li');
  li.classList.add("checked");
}
var list = document.querySelector('ul');
list.addEventListener('click', addClass);
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
//---------------------------code to delete item------------------------------//
/*function deleteTask() {
  let ul = document.querySelectorAll("ul");
  ul.removeChild("li");
};
let trash = document.getElementsByClassName("trash");
trash.addEventListener('click', deleteTask);*/
//var trash = document.getElementsByClassName('trash');
//trash.addEventListener('click', addClass);
document.querySelectorAll('trash').addEventListener('click', function (ev) {
  if (ev.target.tagName === 'button') {
    ev.target.node.parentNode.parentNode.removeChild(node.parentNode);
  }
}, false);

//  CODE FROM THE READING------------------------------------
/*'use strict'
const form = document.forms[0];
class Item {
    constructor(name) {
        this.name = name;
    }
}

const controller = {
    watch(form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from being submitted
        this.add(form.name.value);
        }, false);
    },
    add(name) {
        const item = new Item(name);
        view.render(item);
    }
};

const view = {
    render(item) {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        li.innerHTML = item.name;
        list.appendChild(li);
        // reset the input field
        form.name.value = '';
    }
};

controller.watch(form);*/
/*----------------------------------BROTHER THAYNE VIDEO HELPS--------------------------------------------*/
//todo.js
/*export class Todo {
  constructor(content, completed) {
    this.Id = Date.now();
    this.Content = content,
    this.Completed = completed
  }
}
//import {Todo} from './todo.js';
let todo1 = new Todo("mow the lawn", false);
console.log(todo1);

toDoList = [toDo];*/