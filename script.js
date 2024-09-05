let myLibrary = [];

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLib(book) {
    myLibrary.push(book);
}

let HarryPotter_I = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 223, false);
let AtomicHabits = new Book("Atomic Habits", "James Clear", 320, true);
let HitchhikerGuide = new Book("The Hitchhiker's Guide to the Galaxy", " Douglas Adams", 224, true);

addBookToLib(HarryPotter_I);
addBookToLib(AtomicHabits);
addBookToLib(HitchhikerGuide);

let displayBooks = () => {
    myLibrary.forEach(book => {

        let slot = document.createElement("div");
        slot.classList.add("book-slot");

        let details = document.createElement("div");
        details.classList.add("details");

        let titleEl = document.createElement("h2");
        let authorEl = document.createElement("h3");
        let pagesEl = document.createElement("h3");
        let readEl = document.createElement("h3");

        titleEl.innerHTML = `${book.title}`;
        authorEl.innerHTML = `By ${book.author}`;
        pagesEl.innerHTML = `Pages: ${book.numberOfPages}`;
        readEl.innerHTML = `Read: ${book.read}`;

        details.appendChild(titleEl);
        details.appendChild(authorEl);
        details.appendChild(pagesEl);
        details.appendChild(readEl);

        let bookCover = document.createElement("img");

        slot.appendChild(details);
        slot.append(bookCover);
        document.querySelector(".bookshelf").appendChild(slot);
    })
}

displayBooks();