function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
}

Book.prototype.displayInfo = function () {qweqw
    console.log(`Title: ${this.title}`);
    console.log(`Tác giả: ${this.author}`);
    console.log(`Năm sáng tác: ${this.publishedYear}`);
    console.log('------------------------');
};

function Library() {
    this.books = [];
}

Library.prototype.addBook = function (book) {
    this.books.push(book);
    console.log('Sách đã được thêm vào thư viện.');
};

Library.prototype.displayAllBooks = function () {
    console.log('Thư viện sách:');
    this.books.forEach(book => {
        book.displayInfo();
    });
};

let myLibrary = new Library();

let book1 = new Book('abcd', 'abc', 2013);
let book2 = new Book('xyz', 'xyzt', 2005);

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.displayAllBooks();