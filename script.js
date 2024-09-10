class Book {
    static index = 0;
    constructor(title, author, numberOfPages, read, cover = "") {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.read = read;
        this.cover = cover;
        this.index = Book.index++;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
        this.dialogEl = document.querySelector("#dialog");
        this.bookshelf = document.querySelector(".bookshelf");
        this.addSlot = document.querySelector(".book-slot-add");
        this.addBookBtn = document.querySelector(".add-book");
        this.dialogShow = document.querySelector(".show");
        this.dialogClose = document.querySelector(".close");
        this.dialogInputs = document.querySelector(".inputs");
        this.init();
    }

    init() {
        this.bookshelf.innerHTML = "";
        this.displayBooks();
        this.createEventListners();
        this.dialogBookAdd();
    }

    createEventListners() {
        this.dialogShow.addEventListener("click", () => {
            this.dialogEl.showModal();
        });

        this.dialogClose.addEventListener("click", () => {
            this.dialogEl.close();
        });
    }

    addBooktoLib(book) {
        this.myLibrary.push(book);
    }

    displayBooks() {
        this.bookshelf.appendChild(this.addSlot);
        let i = 0;
        this.myLibrary.forEach(book => {
            this.bookshelf.insertBefore(this.createBookSlot(book, i), this.addSlot);
            i++;
        })
    }

    createBookSlot(book, i) {
        const slot = document.createElement("div");
        slot.classList.add("book-slot");
        slot.classList.add(i);

        const details = document.createElement("div");
        details.classList.add("details");

        const titleEl = document.createElement("h2");
        const authorEl = document.createElement("h3");
        const pagesEl = document.createElement("h3");
        const readEl = document.createElement("h3");

        titleEl.innerHTML = book.title;
        authorEl.innerHTML = `By ${book.author}`;
        pagesEl.innerHTML = `Pages: ${book.numberOfPages}`;

        readEl.innerHTML = `Have you read it:`;
        readEl.classList.add("read-h");

        const checkboxEl = document.createElement("input");
        checkboxEl.type = "checkbox";
        checkboxEl.checked = book.read;
        checkboxEl.addEventListener("change", (event) => {
            book.read = event.currentTarget.checked;
        })

        readEl.appendChild(checkboxEl);
        details.appendChild(titleEl);
        details.appendChild(authorEl);
        details.appendChild(pagesEl);
        details.appendChild(readEl);


        const rightSide = document.createElement("div");
        rightSide.classList.add("right");
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.innerHTML = "Remove";
        delBtn.classList.add("delete-btn");
        delBtn.addEventListener("click", () => {
            this.myLibrary = this.myLibrary.filter(bk => bk.index != slot.classList[1]);
            slot.remove();
        })

        const bookCover = document.createElement("img");
        bookCover.src = book.cover;
        bookCover.setAttribute("onerror", "this.style.display='none'")

        rightSide.appendChild(delBtn);
        rightSide.appendChild(bookCover);
        slot.appendChild(details);
        slot.appendChild(rightSide);

        return slot;
    }

    dialogBookAdd() {
        this.addBookBtn.addEventListener("click", () => {
            const formTitle = document.querySelector("#book-title").value;
            const formAuthor = document.querySelector("#book-author").value;
            const formPages = document.querySelector("#book-pages").value;
            const formRead = document.querySelector("#book-status").checked;
            const formCover = document.querySelector("#book-cover").value;

            this.addBooktoLib(new Book(formTitle, formAuthor, formPages, formRead, formCover));
            this.bookshelf.innerHTML = "";
            this.displayBooks();
            this.dialogEl.close();
            this.dialogInputs.reset();
        })
    }
}

const library = new Library();

let HarryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", 223, false, "https://ia904703.us.archive.org/view_archive.php?archive=/9/items/l_covers_0012/l_covers_0012_02.zip&file=0012020813-L.jpg");
let AtomicHabits = new Book("Atomic Habits", "James Clear", 320, true, "https://covers.openlibrary.org/b/id/14813724-M.jpg");
let HitchhikerGuide = new Book("The Hitchhiker's Guide to the Galaxy", " Douglas Adams", 224, true, "https://ia600505.us.archive.org/view_archive.php?archive=/10/items/m_covers_0011/m_covers_0011_46.zip&file=0011464553-M.jpg");
library.addBooktoLib(HarryPotter);
library.addBooktoLib(AtomicHabits);
library.addBooktoLib(HitchhikerGuide);

library.displayBooks();