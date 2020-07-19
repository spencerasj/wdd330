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
    //console.log(books);
    outputBooks();
    // document.getElementById("bookName").value = "";
    // document.getElementById("abookName").value = "";
});

document.getElementById("bookName").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addBook").click();
        document.getElementById("bookName").value = "";
    }
});

function outputBooks() {

    document.querySelector("#wantToRead").innerHTML = "";

    books.forEach(
        book => {
            document.querySelector("#wantToRead").innerHTML +=
                `<li id="${book.Id}">${book.Name}
                        <button id="addToReadList">Have you read this?</button>
                       </li>`
        });
    document.getElementById("addToReadList").addEventListener('click', function (event) {
        console.log(event.target);
        if (event.target.tagName === 'BUTTON') {
            //event.target.classList.toggle('checked');
            let book = event.target.parentNode;

            // let book = books.find(t => t.Id == id);
            if (book) {
                book.Read = !book.Read;

                console.log(books);
                readList();
                localStorage.setItem('books', JSON.stringify(books));
                // let li = event.target.parentNode;
                // console.log(li);
                // li.remove();
                console.log(book);
                book.remove();
                localStorage.setItem('books', JSON.stringify(books));
            }
        };

    });


};

// document.getElementById("addToReadList").addEventListener('click', function (event) {
//     console.log(event.target);
//     if (event.target.tagName === 'BUTTON') {
//         //event.target.classList.toggle('checked');
//         let book = event.target.parentNode;

//         // let book = books.find(t => t.Id == id);
//          if (book) {
//             book.Read = !book.Read;

//             console.log(books);
//             readList();
//             localStorage.setItem('books', JSON.stringify(books));
//             // let li = event.target.parentNode;
//             // console.log(li);
//             // li.remove();
//             console.log(book);
//             book.remove();
//             localStorage.setItem('books', JSON.stringify(books));
//         }
//     };

// });
//---------------------------------move li item if it was read----------------------

function readList() {

    document.querySelector("#read").innerHTML = "";
    let items = books.filter(book => book.Read == 1);
    console.log(items);
    //console.log(items.Read === 1);
    //if (items.Read === 1) {
    items.forEach(
        item => {
            document.querySelector("#read").innerHTML +=
                `<li id="${item.Id}">${item.Name}</li>`
            // });
            localStorage.setItem('books', JSON.stringify(books));

        })
};
// let items2 = books.filter(book => book.Read == 0);
// if (items2.Read === 0) {
//     items2.forEach(
//         item2 => {
//             document.querySelector("#wantToRead").innerHTML +=
//                 `<li id="${item2.Id}">${item2.Name}</li>`
//         }

//     )

// }


// let todo = todos.find(t => t.Id == id);
// if (todo) {
// let index = todos.indexOf(todo);
// let newList = todos.slice(index, 1);


// function deleteFromList(item) {
//     let li = item;