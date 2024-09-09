let myLibrary = [];
let index = 0;

let dialogEl = document.querySelector("#dialog");

function Book(title, author, numberOfPages, read, cover = "") {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.index = index++;
    this.cover = cover;
}

let HarryPotter = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 223, false, "91wKDODkgWL._AC_UF1000,1000_QL80_.jpg");
let AtomicHabits = new Book("Atomic Habits", "James Clear", 320, true);
let HitchhikerGuide = new Book("The Hitchhiker's Guide to the Galaxy", " Douglas Adams", 224, true);

function addBookToLib(book) {
    myLibrary.push(book);
}

addBookToLib(HarryPotter);
addBookToLib(AtomicHabits);
addBookToLib(HitchhikerGuide);

let displayBooks = () => {
    let i = 0;
    myLibrary.forEach(book => {

        /*book-slot creation*/
        let slot = document.createElement("div");
        slot.classList.add("book-slot");
        slot.classList.add(i);

        /*Details of the book*/
        let details = document.createElement("div");
        details.classList.add("details");
        let titleEl = document.createElement("h2");
        let authorEl = document.createElement("h3");
        let pagesEl = document.createElement("h3");
        let readEl = document.createElement("h3");
        titleEl.innerHTML = `${book.title}`;
        authorEl.innerHTML = `By ${book.author}`;
        pagesEl.innerHTML = `Pages: ${book.numberOfPages}`;
        readEl.innerHTML = `Have you read it:`;
        readEl.classList.add("read-h");

        /*Checkbox functionality*/
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = book.read;
        checkbox.addEventListener("change", (event) => {
            if (event.currentTarget.checked) {
                book.read = true;
            }
            else {
                book.read = false;
            }
        })
        readEl.appendChild(checkbox);

        details.appendChild(titleEl);
        details.appendChild(authorEl);
        details.appendChild(pagesEl);
        details.appendChild(readEl);

        /*Image and remove button */
        let rightSide = document.createElement("div");
        rightSide.classList.add("right");
        let delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.innerHTML = "Remove";
        delBtn.classList.add("delete-btn");
        let bookCover = document.createElement("img");
        bookCover.src = book.cover;
        bookCover.setAttribute("onerror", "this.style.display='none'")

        slot.appendChild(details);
        rightSide.appendChild(delBtn);
        rightSide.appendChild(bookCover);
        slot.appendChild(rightSide);
        document.querySelector(".bookshelf").insertBefore(slot, document.querySelector(".book-slot-add"));
        i++;
    })
};

let showDialog = () => {
    document.querySelector(".show").addEventListener("click", () => {
        dialogEl.showModal();
    })
}

let closeDialog = () => {
    document.querySelector(".close").addEventListener("click", () => {
        dialogEl.close();
    })
}

let removeBook = () => {
    document.querySelectorAll(".delete-btn").forEach(btn => {
        let selectedSlot = btn.parentElement.parentElement;
        btn.addEventListener("click", function () {
            myLibrary = myLibrary.filter(book =>
                book.index != selectedSlot.classList[1]);
            selectedSlot.remove();
        })
    });
}

let addBtn = document.querySelector(".add-book");
addBtn.addEventListener("click", () => {
    /*Form vales*/
    let formTitle = document.querySelector("#book-title").value;
    let formAuthor = document.querySelector("#book-author").value;
    let formPages = document.querySelector("#book-pages").value;
    let formRead = document.querySelector("#book-status").checked;
    let formCover = document.querySelector("#book-cover").value;
    document.querySelector(".bookshelf").innerHTML = " ";
    document.querySelector(".bookshelf").innerHTML += `
        <div class="book-slot-add">
            <button type="button" class="show">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-box</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>
            </button>
        </div>`;
    addBookToLib(new Book(formTitle, formAuthor, formPages, formRead, formCover));
    displayBooks();
    showDialog();
    removeBook();
    dialogEl.close();
    document.querySelector(".inputs").reset();
})

displayBooks();
removeBook();
showDialog();
closeDialog();
