class BookList{
    constructor(){
        this.books = [];
        this.currentBookIndex = 0;
    }
    add(arr){
        this.books = arr;
        return this.books ;
    }
    getCurrentBook(){
        return this.books[this.currentBookIndex];
    }
    getNextBook(){
        return this.books[this.currentBookIndex+1];
    }
    getPrevBook(){
        return this.books[this.currentBookIndex-1];
    }
    changeCurrentBook(index){
        this.currentBookIndex = index;
    }
}

class Book{
    constructor(title,category,author){
        this.title = title ;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now()
    }

}
let book1 = new Book("title1", "category1", "author1");
let book2 = new Book("title2", "category2", "author2");
let book3 = new Book("title3", "category3", "author3");
let book4 = new Book("title4", "category4", "author4");
let book5 = new Book("title5", "category5", "author5");

let bookList1 = new BookList();

bookList1.add([book1, book2, book3, book4, book5]);
bookList1.changeCurrentBook(2);
console.log(bookList1.getCurrentBook().title);
console.log(bookList1.getNextBook().title);
console.log(bookList1.getPrevBook().title);

console.log(bookList1.getCurrentBook().isRead);

bookList1.getCurrentBook().markBookAsRead();

console.log(bookList1.getCurrentBook().isRead);
console.log(bookList1.getCurrentBook().finishedDate);
