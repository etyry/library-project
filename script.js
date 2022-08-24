// This is The Odin Project's library project.

// library array
const myLibrary = [];

// library constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function pushes book into library
function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

// new book
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

// push book into array
addBookToLibrary(book1);

// on add book button 

// create divs for books
let books = document.getElementById("books");
let book = document.createElement("div");

book.className = "book";
books.appendChild(book);

// create p for title, author, pages, read
let title = document.createElement("p");
let author = document.createElement("p");
let pages = document.createElement("p");

// create button for read
let label = document.createElement("label");
let input = document.createElement("input");

let labelBold = document.createElement("strong");

label.appendChild(labelBold);
labelBold.textContent = "Read?: ";
input.type = "checkbox";

// populate book content
// title
let titleStrong = document.createElement("strong");

book.appendChild(title);
title.appendChild(titleStrong);

let titleText = document.createTextNode("Title: "); 
let titleAns = document.createTextNode(book1.title); 

titleStrong.appendChild(titleText);
title.appendChild(titleAns);

// author
let authorStrong = document.createElement("strong");

book.appendChild(author);
author.appendChild(authorStrong);

let authorText = document.createTextNode("Author: "); 
let authorAns = document.createTextNode(book1.author); 

authorStrong.appendChild(authorText);
author.appendChild(authorAns);

// page count
let pagesStrong = document.createElement("strong");

book.appendChild(pages);
pages.appendChild(pagesStrong);

let pagesText = document.createTextNode("Page count: "); 
let pagesAns = document.createTextNode(book1.pages); 

pagesStrong.appendChild(pagesText);
pages.appendChild(pagesAns);

// read
book.appendChild(label);
book.appendChild(input);
