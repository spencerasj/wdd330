import {Todo} from './todo.js';

//let todo1 = new Todo("mow the lawn", false);
//console.log(todo1);

//toDoList = [toDo];
'use strict'
let todos = [];

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
  trash.setAttribute("type", "submit");
  li.setAttribute("id", Date.now());
  // li.classList.add("checked");
  li.appendChild(trash);
  trash.addEventListener('click', function() {
    let li = this.parentNode;
    trash.remove(li);
    alert("did something");
  });
  ul.appendChild(li);
  if (text === '') {
    alert("Please enter in a task");
  } else {
    todos.push(text);
    console.log(todos);

    //---------------------------------Code for local storage---------------------------

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

//---------------------------code to delete item------------------------------

/*function deleteTask() {
  let deleteTask = document.getElementsByClassName('trash');
  while (deleteTask.hasParentNodes()) {
    deleteList.node.parentNode.parentNode.removeChild(deleteList.node.parentNode);
  }
};
document.querySelectorAll("trash").addEventListener('click', deleteTask);
*/
let close = document.getElementsByClassName("trash");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let li = this.parentElement;
    li.parentNode.removeChild(node.parentNode);
  }
};
