import {
    Book
} from './book.js';

let books = [];
localStorage.setItem('books', JSON.stringify(books));
const data = JSON.parse(localStorage.getItem('books'));

//-----------------------------------------add book to have read list-------------------------------------
const name = document.getElementById("bookName");
document.getElementById("readBook").addEventListener("click", function (event) {
    event.preventDefault();
    let book = new Book(name.value);
    books.push(book);
    let item = books.find(book => book.Read == 0)
    if (item) {
        book.Read = !book.Read;
        outputReadBooks();
    };
    localStorage.setItem("books", JSON.stringify(books));
    console.log(books);
    document.getElementById("bookName").value = "";

});

function outputReadBooks() {
    document.getElementById("read").innerHTML = "";
    let items = books.filter(book => book.Read == 1);
    items.forEach(
        item => {
            document.getElementById("read").innerHTML +=
                `<li id="${item.Id}">${item.Name}</li>`
        });

};

//-----------------------------------------add book to have not read list-------------------------------------

document.getElementById("notReadBook").addEventListener("click", function (event) {
    event.preventDefault();
    let book = new Book(name.value);
    books.push(book);
    let item = books.find(book => book.Read == 0)
    if (item) {
        outputNotReadBooks();
    };
    localStorage.setItem("books", JSON.stringify(books));
    console.log(books);
    document.getElementById("bookName").value = "";
});


function outputNotReadBooks() {
    document.getElementById("notRead").innerHTML = "";
    let items = books.filter(book => book.Read == 0);
    items.forEach(
        item => {
            document.getElementById("notRead").innerHTML +=
                `<li id="${item.Id}">${item.Name}</li>`
        });

};


//-----------------------------------------add book to want to read list-------------------------------------

document.getElementById("wantToReadBook").addEventListener("click", function (event) {
    event.preventDefault();
    let book = new Book(name.value);
    books.push(book);
    let item = books.find(book => book.toRead == 0)
    if (item) {
        book.toRead = !book.toRead;
        outputWantToReadBooks();
    };
    localStorage.setItem("books", JSON.stringify(books));
    console.log(books);
    document.getElementById("bookName").value = "";
});


function outputWantToReadBooks() {
    document.getElementById("wantToRead").innerHTML = "";
    let items = books.filter(book => book.toRead == 1);
    items.forEach(
        item => {
            document.getElementById("wantToRead").innerHTML +=
                `<li id="${item.Id}">${item.Name}</li>`
        });

};



// document.getElementById("readBook").addEventListener("keyup", function (event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("submit").click();
//         document.getElementById("addText").value = "";
//     }
// });

// function outputTodos() {
//     document.querySelector("#tasks").innerHTML = "";

//     todos.forEach(
//         todo => {
//             document.querySelector("#tasks").innerHTML +=
//                 `<li id="${todo.Id}">${todo.Content}<button class="trash"><i class="fa fa-trash-o fa-lg"></i></button></li>`
//         });
// };
//---------------------------------------------------------mark book read---------------------------------------------

// const list = document.getElementById("tasks");
// list.addEventListener('click', function (event) {
//     console.log(event.target);
//     if (event.target.tagName === 'LI') {
//         event.target.classList.toggle('checked');
//         let id = event.target.id;
//         let todo = todos.find(t => t.Id == id);
//         if (todo) {
//             todo.Completed = !todo.Completed;
//             console.log(todos);
//             localStorage.setItem('todos', JSON.stringify(todos));
//         }
//     };

//--------------------------------------------------------delete book-------------------------------------------------
//     if (event.target.tagName == "I") {
//         let li = event.target.parentNode.parentNode;
//         console.log(li);
//         let id = li.id;
//         let todo = todos.find(t => t.Id == id);
//         if (todo) {
//         let index = todos.indexOf(todo);
//         todos.splice(index, 1);
//         localStorage.setItem('todos', JSON.stringify(todos));
//         li.remove();
//         console.log(todos);
//         }
//     }
// }, false);




//----------------------------------------------------------filter book to read list-------------------------------------------------



//----------------------------------------------------------filter not completed tasks-------------------------------------------------

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

// //----------------------------------------------------------clear book listr-----------------------------------------

// function clear() {
//     let deleteList = document.getElementById('tasks');
//     while (deleteList.firstChild) {
//         deleteList.removeChild(deleteList.firstChild);
//         // let todos = [];
//         localStorage.clear();
//         todos.splice(0, todos.length);


//     }
// };
// document.getElementById("clearAll").addEventListener('click', clear);