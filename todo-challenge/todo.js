'use strict'
let items = [];

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    let text = document.getElementById("addText").value;
    var t = document.createTextNode(text);
    li.appendChild(t);
   
     if (text === '') {
      alert("Please enter in a task");
    } else {
      document.getElementById("list").appendChild(li);
      items.push(t);
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
