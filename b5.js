function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
}

Book.prototype.borrow = function () {
    if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`Sách "${this.title}" đã được mượn.`);
    } else {
        console.log(`Sách "${this.title}" không có sẵn để mượn.`);
    }
};

Book.prototype.returnBook = function () {
    if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`Sách "${this.title}" đã được trả.`);
    } else {
        console.log(`Sách "${this.title}" đã có sẵn, không cần trả.`);
    }
};

function Library() {
    this.books = [];
}

Library.prototype.addBook = function (book) {
    this.books.push(book);
    console.log(`Sách "${book.title}" đã được thêm vào thư viện.`);
};

Library.prototype.isBookAvailable = function (bookTitle) {
    let book = this.books.find(book => book.title === bookTitle);
    if (book) {
        return book.isAvailable;
    } else {
        console.log(`Không tìm thấy sách có tiêu đề "${bookTitle}" trong thư viện.`);
        return false;
    }
};
let myLibrary = new Library();

let book1 = new Book('Sách 1', 'Tác giả A', 2020);
let book2 = new Book('Sách 2', 'Tác giả B', 2019);

myLibrary.addBook(book1);
myLibrary.addBook(book2);

book1.borrow();
book2.borrow();
book1.returnBook();
book2.borrow();

console.log(myLibrary.isBookAvailable('Sách 1'));
console.log(myLibrary.isBookAvailable('Sách 3'));