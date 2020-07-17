import {
    Book
} from './books.js';

const name= document.getElementById("bookName");
let books = [];
localStorage.setItem('books', JSON.stringify(books));
const data = JSON.parse(localStorage.getItem('books'));
