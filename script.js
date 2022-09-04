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
    return book;
}

// push book into array
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hobbites", "J.R.R.RR Tolkien", 295, false);

// on add book button 
document.getElementById("add").addEventListener("click", function() {
    let overlay = document.createElement("section");
    let addPage = document.createElement("div");

    // form close
    let formClose = document.createElement("div");
    formClose.className = "gg-close";

    addPage.appendChild(formClose);

    // form
    let formSec = document.createElement("section");
    let form = document.createElement("form");

    addPage.appendChild(formSec);
    formSec.appendChild(form);
    form.setAttribute("id", "form");
    form.setAttribute("onsubmit", "return false");
    formSec.className = "formAdd";

    // form inputs
    let titleDiv = document.createElement("div");
    let titleLabel = document.createElement("label");
    let titleInput = document.createElement("input");

    form.appendChild(titleDiv);
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);
    titleInput.setAttribute("id", "title");

    let authDiv = document.createElement("div");
    let authLabel = document.createElement("label");
    let authInput = document.createElement("input");

    form.appendChild(authDiv);
    authDiv.appendChild(authLabel);
    authDiv.appendChild(authInput);
    authInput.setAttribute("id", "author");

    let numDiv = document.createElement("div");
    let numLabel = document.createElement("label");
    let numInput = document.createElement("input");

    form.appendChild(numDiv);
    numDiv.appendChild(numLabel);
    numDiv.appendChild(numInput);
    numInput.setAttribute("id", "pages");

    let readDiv = document.createElement("div");
    let readLabel = document.createElement("label");
    let readInput = document.createElement("input");

    form.appendChild(readDiv);
    readDiv.appendChild(readLabel);
    readDiv.appendChild(readInput);
    readInput.setAttribute("id", "read");

    authLabel.textContent = "Author";
    titleLabel.textContent = "Title";
    numLabel.textContent = "Number of Pages";
    readLabel.textContent = "Read? (true/false)";

    overlay.className = "overlay";
    document.body.appendChild(overlay);

    addPage.className = "addPage";
    overlay.appendChild(addPage);

    // form submit
    let submit = document.createElement("button");
    form.appendChild(submit); 
    submit.setAttribute("id", "submitBut");
    submit.textContent = "Add Book";
    submit.setAttribute("type", "submit");

    // on form close
    formClose.addEventListener("click", function() {
        overlay.remove();
    });

    document.getElementById("submitBut").addEventListener("click", function() {
        overlay.remove();
        const title = form.elements["title"];
        const author = form.elements["author"];
        const pages = form.elements["pages"];
        const read = form.elements["read"];
        const newBook = addBookToLibrary(title.value, author.value, pages.value, read.value);
        placeBook(newBook);
    });
});

// function to place book on page
function placeBook(Book) {

    // create divs for books
    let books = document.getElementById("books");
    let book = document.createElement("div");

    book.className = "book";
    books.appendChild(book);

    // book index in array
    book.setAttribute("data-index", myLibrary.indexOf(Book));

    // form close
    let bookClose = document.createElement("div");
    bookClose.className = "gg-close";
    bookClose.setAttribute("id", "gg-book-close");

    book.appendChild(bookClose);    

    // create p for title, author, pages, read
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");

    // create button for read
    let readButDiv = document.createElement("div"); 
    let label = document.createElement("label");
    let input = document.createElement("input");
    let labelBold = document.createElement("strong");

    readButDiv.appendChild(label);
    label.appendChild(labelBold);
    labelBold.textContent = "Read?: ";
    input.type = "checkbox";

    // text div
    let textDiv = document.createElement("div");
    textDiv.className = "text";
    book.appendChild(textDiv);

    // populate book content
    // title
    let titleStrong = document.createElement("strong");

    textDiv.appendChild(title);
    title.appendChild(titleStrong);

    let titleText = document.createTextNode("Title: "); 
    let titleAns = document.createTextNode(Book.title); 

    titleStrong.appendChild(titleText);
    title.appendChild(titleAns);

    // author
    let authorStrong = document.createElement("strong");

    textDiv.appendChild(author);
    author.appendChild(authorStrong);

    let authorText = document.createTextNode("Author: "); 
    let authorAns = document.createTextNode(Book.author); 

    authorStrong.appendChild(authorText);
    author.appendChild(authorAns);

    // page count
    let pagesStrong = document.createElement("strong");

    textDiv.appendChild(pages);
    pages.appendChild(pagesStrong);

    let pagesText = document.createTextNode("Page count: "); 
    let pagesAns = document.createTextNode(Book.pages); 

    pagesStrong.appendChild(pagesText);
    pages.appendChild(pagesAns);

    // read
    let readAns = Book.read;
    if (readAns === "true" || readAns === true) {
        input.checked = true;
    } else {
        input.checked = false;
        readAns = false;
    }
    textDiv.appendChild(readButDiv);
    readButDiv.appendChild(input);

    // on close button remove the book from library and page
    bookClose.addEventListener("click", function() {
        book.remove();
        myLibrary.splice(book.getAttribute("data-index"), 1);
    });

}

// for every book in the array place it down on the page
for (let i in myLibrary) {
    placeBook(myLibrary[i]);
}