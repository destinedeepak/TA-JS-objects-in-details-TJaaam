class BookList{
    constructor(){
        this.books = [];
        this.currentBookIndex;
    }
    add(arr){
        this.books = arr;
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
    constructor(title,category,author,finishedDate){
        this.title = title ;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = finishedDate;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now()
    }

}
let book1 = new Book("title1", "category1", "author1", "1st june");
let book2 = new Book("title2", "category2", "author2", "2nd june");
let book3 = new Book("title3", "category3", "author3", "3rd june");
let book4 = new Book("title4", "category4", "author4", "4th june");
let book5 = new Book("title5", "category5", "author5", "5th june");

let bookArray = [book1, book2, book3, book4, book5]

let bookList1 = new BookList();
bookList1.add(bookArray);
bookList1.changeCurrentBook(2);
console.log(bookList1.getCurrentBook().title);
console.log(bookList1.getNextBook().title);
console.log(bookList1.getPrevBook().title);

console.log(bookList1.getCurrentBook().isRead)

book3.markBookAsRead();

console.log(bookList1.getCurrentBook().isRead)
