const bookModel = require('../../models/bookModel');
class BookController{
    constructor(){
        this.bookModel = new BookModel(); 
    }
}