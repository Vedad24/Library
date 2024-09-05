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
        console.log(book);
    })
}

displayBooks();