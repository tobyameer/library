let myLibrary = [];
let newBookBtn = document.querySelector("#newBook");
newBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "block";
});

document.querySelector("#newBookForm").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})

function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    render();

}

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card")
        bookEl.innerHTML = `
        <div class="book-card">
            <div class="card-header">
                <h3 class="title"> ${book.title}</h3>
                <h5 class="author">${book.author}</h5>
        </div>
            <div class="card-body">
                <p> ${book.pages} pages</p>
                <p class="read-status"> ${book.read ? "Read" : "Not Read Yet"}</p>
                <button onclick="removeBook(${i})">Remove</button>
            </div>
        </div>
        `;
        libraryEl.appendChild(bookEl);

    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}
