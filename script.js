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
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// push book into array
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Bob The Builder", "Technol Banes", 42, true);
addBookToLibrary("Bob3", "Technreerol Banes", 42, true);
addBookToLibrary("Boe Builder", "Tecl Banes", 42, true);

// on add book button 
document.getElementById("add").addEventListener("click", function() {
    let overlay = document.createElement("section");
    let addPage = document.createElement("div");

    // form
    let formSec = document.createElement("section");
    let form = document.createElement("form");

    addPage.appendChild(formSec);
    formSec.appendChild(form);

    let authDiv = document.createElement("div");
    let authLabel = document.createElement("label");
    let authInput = document.createElement("input");

    form.appendChild(authDiv);
    authDiv.appendChild(authLabel);
    authDiv.appendChild(authInput);

    let titleDiv = document.createElement("div");
    let titleLabel = document.createElement("label");
    let titleInput = document.createElement("input");

    form.appendChild(titleDiv);
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    let numDiv = document.createElement("div");
    let numLabel = document.createElement("label");
    let numInput = document.createElement("input");

    form.appendChild(numDiv);
    numDiv.appendChild(numLabel);
    numDiv.appendChild(numInput);

    let readDiv = document.createElement("div");
    let readLabel = document.createElement("label");
    let readInput = document.createElement("input");

    form.appendChild(readDiv);
    readDiv.appendChild(readLabel);
    readDiv.appendChild(readInput);

    authLabel.textContent = "Author";
    titleLabel.textContent = "Title";
    numLabel.textContent = "Number of Pages";
    readLabel.textContent = "Read?";

    overlay.className = "overlay";
    document.body.appendChild(overlay);

    addPage.className = "addPage";
    overlay.appendChild(addPage);

    overlay.style.backgroundColor(rgba(55, 55, 55, 0.92));

    

});

// function to place book on page
function placeBook(Book) {
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
    let titleAns = document.createTextNode(Book.title); 

    titleStrong.appendChild(titleText);
    title.appendChild(titleAns);

    // author
    let authorStrong = document.createElement("strong");

    book.appendChild(author);
    author.appendChild(authorStrong);

    let authorText = document.createTextNode("Author: "); 
    let authorAns = document.createTextNode(Book.author); 

    authorStrong.appendChild(authorText);
    author.appendChild(authorAns);

    // page count
    let pagesStrong = document.createElement("strong");

    book.appendChild(pages);
    pages.appendChild(pagesStrong);

    let pagesText = document.createTextNode("Page count: "); 
    let pagesAns = document.createTextNode(Book.pages); 

    pagesStrong.appendChild(pagesText);
    pages.appendChild(pagesAns);

    // read
    book.appendChild(label);
    book.appendChild(input);
}

// for every book in the array place it down on the page
for (let i in myLibrary) {
    placeBook(myLibrary[i]);
}

