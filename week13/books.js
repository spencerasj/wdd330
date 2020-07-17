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
    let book1 = new Book(name.value);
    books.push(book1);
    console.log(book1.Id);
    let id = book1.Id;
    let book = books.find(b => b.Id == id);
    if (book) {
        book.Read = !book.Read;
    }
    outputReadBooks(id);
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books);
    document.getElementById("bookName").value = "";

});

function outputReadBooks(bookId) {
    let id = bookId;
    let items = books.filter(book => book.Id == id);
    items.forEach(
        item => {
            document.getElementById("read").innerHTML +=
                `<li id="${item.Id}">${item.Name}</li>`
        }
    )
};

//-----------------------------------------add book to currently reading list-------------------------------------

document.getElementById("readingBook").addEventListener("click", function (event) {
    event.preventDefault();
    let book1 = new Book(name.value);
    books.push(book1);
    console.log(book1.Id);
    let id = book1.Id;
    let book = books.find(b => b.Id == id);
    if (book) {
        book.Read = !book.Read;
        book.toRead = !book.toRead;
    }
    outputCurrentBooks(id);
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books);
    document.getElementById("bookName").value = "";

});

function outputCurrentBooks(bookId) {
    let id = bookId;
    let items = books.filter(book => book.Id == id);
    items.forEach(
        item => {
            document.getElementById("readingNow").innerHTML +=
                `<li id="${item.Id}">${item.Name}</li>`
        }
    )
};


//-----------------------------------------add book to want to read list-------------------------------------

document.getElementById("wantToReadBook").addEventListener("click", function (event) {
    event.preventDefault();
    let book1 = new Book(name.value);
    books.push(book1);
    console.log(book1.Id);
    let id = book1.Id;
    let book = books.find(b => b.Id == id);
    outputWantToReadBooks(id);
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books);
    document.getElementById("bookName").value = "";

});

function outputWantToReadBooks(bookId) {
    let id = bookId;
    let items = books.filter(book => book.Id == id);
    items.forEach(
        item => {
            document.getElementById("wantToRead").innerHTML +=
                `<li id="${item.Id}">${item.Name}</li>`
        }
    )
};

// fixes:
// do I need t/f