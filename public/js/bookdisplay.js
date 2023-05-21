async function logJSONData(title) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=5&key=AIzaSyD0kfX1gVi9NATkHXSkfYYuf2pwOes1C_U`);
    const jsonData = await response.json();
    //displaying the results of fetch call 
    bookinfo = jsonData.items[0].volumeInfo
    title = bookinfo.title;
    authors = bookinfo.authors;
    thumbnail = bookinfo.imageLinks.thumbnail;
    rating = bookinfo.averageRating;
    categories = bookinfo.categories[0];
    if(categories){
      console.log(categories);
    } else {
      console.log('');
    }
    if (rating){
      console.log(rating);
    }else {
      console.log('No ratings');
    }

    console.log(bookinfo);

    console.log(title);
    console.log(authors);
    console.log(thumbnail);


    console.log(jsonData);
  }
  
//get input values from the frontend homepage handlebar
const bookFormHandler = async(event)=>{
  console.log('bookFormHandler');
  //getting value from search bar
  const booktitle = document.querySelector("#title").value.trim(); 
//calling fetch function  
logJSONData(booktitle);
}
//need to select the items from the json fetch object 
//object array of 5 items 
//image
//authors 
//title 
//rating 
//property key: volumeinfo 
//property key authors
//property key  imageLinks property thumbnail
//property key title
//
  //after user select book then call fetch 
  // if(booktitle){
  //   logJSONData(booktitle);
  //   const response = await fetch('/api/book', {
  //     method: 'POST',
  //     body: JSON.stringify({ booktitle }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }
  //Route for book display

  
  //if value available then add to the value to the fetch 


document
  .querySelector('#submitbtn')
  .addEventListener('click', bookFormHandler);
