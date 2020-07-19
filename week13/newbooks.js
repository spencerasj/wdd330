import {
    Book
} from './book.js';

const content = document.getElementById("bookName");
let books = [];
localStorage.setItem('books', JSON.stringify(books));
const data = JSON.parse(localStorage.getItem('books'));

//-----------------------------------------add book to have read list-------------------------------------

document.getElementById("addBook").addEventListener("click", function (event) {
    event.preventDefault();
    let book = new Book(content.value);
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    outputBooks();

});

document.getElementById("bookName").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addBook").click();
        document.getElementById("bookName").value = "";
    }
});

function outputBooks() {

    document.querySelector("#read").innerHTML = "";

    books.forEach(
        book => {
            document.querySelector("#read").innerHTML +=
                `<li id="${book.Id}" >${book.Name}<button class="delete">&#9932</button></li>`

        });
};
//---------------------------------------------------------code mark book a favorite---------------------------------------------
// const list = document.getElementById("read");
// list.addEventListener('click', function (event) {
//     console.log(event.target);
//     if (event.target.tagName === 'LI') {
//         event.target.classList.toggle('favorite');
//         let id = event.target.id;
//         let todo = todos.find(t => t.Id == id);
//         if (todo) {
//             todo.Completed = !todo.Completed;
//             console.log(todos);
//             localStorage.setItem('todos', JSON.stringify(todos));
//         }
//     };
const list = document.getElementById("read");
list.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target.tagName === 'LI') {
        //if (event.target.classList === "favorite") {
        //     console.log(event.target.classList.innerHTML);
        //     event.target.toggleClass('favorite');
        // } else {
        event.target.classList.add("favorite");
        localStorage.setItem('books', JSON.stringify(books));
        let id = event.target.id;
        console.log(id);
        let book = books.find(b => b.Id == id);
        if (book) {
            book.Read = !book.Read;
            console.log(books);
            //document.querySelector("#read").innerHTML = "";
            localStorage.setItem('books', JSON.stringify(books));
        }

    }

    //--------------------------------------------------------code to delete item-------------------------------------------------
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.tagName);
        let li = event.target.parentNode;
        console.log(li);
        let id = li.id;
        let book = books.find(b => b.Id == id);
        if (book) {
            let index = books.indexOf(book);
            books.splice(index, 1);
            localStorage.setItem('books', JSON.stringify(books));
            li.remove();
            //document.querySelector("#read").innerHTML = "";
            console.log(books);
        }
    }
}, false);




// //----------------------------------------------------------filter completed tasks-------------------------------------------------

// function outputComplete() {
//     document.querySelector("#tasks").innerHTML = "";
//     let items = todos.filter(todo => todo.Completed == 1);
//     items.forEach(
//         item => {
//             document.querySelector("#tasks").innerHTML +=
//                 `<li>You have completed:    ${item.Content}</li>`
//         });
// };
// document.getElementById("complete").addEventListener('click', outputComplete);

// //----------------------------------------------------------filter not completed tasks-------------------------------------------------

// function outputNotComplete() {
//     document.querySelector("#tasks").innerHTML = "";
//     let items = todos.filter(todo => todo.Completed == 0);
//     items.forEach(
//         item => {
//             document.querySelector("#tasks").innerHTML +=
//                 `<li>Not completed:   ${item.Content}</li>`

//         });
// };
// document.getElementById("unfinished").addEventListener('click', outputNotComplete);

// //----------------------------------------------------------code to clear all items from list-----------------------------------------

function clear() {
    let deleteList = document.getElementById('read');
    while (deleteList.firstChild) {
        deleteList.removeChild(deleteList.firstChild);
        // let todos = [];
        localStorage.clear();
        books.splice(0, books.length);


    }
};
document.getElementById("clear").addEventListener('click', clear);