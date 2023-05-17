//API fetch Google books
//class BookModel with cunstructor and function searchbooks
class BookModel{
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    requestedBooks(searchTerm, maxResults){
        const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
        const url = `${apiUrl}?q=${encodeURIComponent(searchTerm)}&maxResults=${maxResults}&key=${this.apiKey}`;
        
        return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.items;
        });
    }


}
module.exports = BookModel;