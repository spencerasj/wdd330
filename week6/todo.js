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
    li.appendChild(trash);
    ul.appendChild(li);

     if (text === '') {
      alert("Please enter in a task");
    } else {
      items.push(text);
      console.log(items);
    }
    document.getElementById("addText").value = "";
 }
 
 document.getElementById("submit").addEventListener("click", newElement);
 document.getElementById("addText").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
}); 


// ------------------Code for hiding task when trash clicked-------------------------
/*function close() {
    let trashBtn = document.getElementsByClassName("trash");
    if (trashBtn.style.display === "none") {
      trashBtn.style.display = "block";
    } else {
      trashBtn.style.display = "none";
    }
  }
document.getElementsByClassName("trash").addEventListener("click", close());*/



//---------------Code for crossing item off list------------------------------------
let list = document.querySelector('li');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
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
