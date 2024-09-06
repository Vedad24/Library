let myLibrary = [];

let index = 0;

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.index = index++;
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
addBookToLib(HitchhikerGuide);
addBookToLib(HitchhikerGuide);

let displayBooks = () => {
    let i = 0;
    myLibrary.forEach(book => {

        let slot = document.createElement("div");
        slot.classList.add("book-slot");
        slot.classList.add(i);

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

        let rightSide = document.createElement("div");
        rightSide.classList.add("right");

        let delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.innerHTML = "Remove";
        delBtn.classList.add("delete-btn");

        let bookCover = document.createElement("img");

        slot.appendChild(details);
        rightSide.appendChild(delBtn);
        rightSide.appendChild(bookCover);
        slot.appendChild(rightSide);
        document.querySelector(".bookshelf").appendChild(slot);
        i++;
    })
}

displayBooks();

document.querySelectorAll(".delete-btn").forEach(btn => {
    let selectedSlot = btn.parentElement.parentElement;
    btn.addEventListener("click", function () {
        myLibrary = myLibrary.filter(book =>
            book.index != selectedSlot.classList[1]);
        selectedSlot.remove();
    })

})