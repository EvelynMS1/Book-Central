const frontCard = document.querySelectorAll(".flip-card-front");
const bookdiv = document.querySelector(".booklayout");
const btncheckout = document.querySelectorAll(".checkoutBtnn");
const authorN = document.querySelector(".authorName");
const mainCard = document.querySelector(".flip-card-inner");
const cardholder = document.querySelector(".flip-card");

//calling fetch function  
  const bookFormHandler = async(event)=>{ 
  const booktitlesearch = document.querySelector("#title").value.trim(); 
  console.log('bookFormHandler');
  //getting value from search bar
 console.log(booktitlesearch);
  logJSONData(booktitlesearch);
};
  async function logJSONData(title) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=5&key=AIzaSyD0kfX1gVi9NATkHXSkfYYuf2pwOes1C_U`);
    const booklist = await response.json();
    //displaying the results of fetch call 
 
 const bookitemarray = await addValuestoArray(booklist);
 console.log(bookitemarray);
 addValuestoCard(bookitemarray);
   
  };  
 async function addValuestoArray(booklist){
  const booksdisplayed = [booklist.items[0],booklist.items[1],booklist.items[2],booklist.items[3],booklist.items[4]];
  console.log(booksdisplayed);
  const resultarray = [];
  //fucntion that goes through each item in the array and then calls the function within it
  for (var i = 0; i < booksdisplayed.length; i++){ 
    const fetchdata = booksdisplayed[i];
    console.log(fetchdata);
    bookinfo = fetchdata.volumeInfo;
    title = bookinfo.title;    
    authors= bookinfo.authors;
    thumbnailImg = bookinfo.imageLinks.thumbnail;
    thumbnailSmlImg = bookinfo.imageLinks.smallThumbnail;
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
    const obj = {
      booktitle:title,
      bookauthor:authors,
      img:thumbnailImg,
      bookrating: rating,
      bookcategories:categories
    }

    // const eachbook = bookProperties(booksdisplayed[i]);
    resultarray.push(obj);
  }
  return resultarray;
    //create a function that gets all values from api 
    //have an array for each index of the call that is called the function for each 
    //create an object for all of the values that are for this specific book access the values by the properties and dot syntax
  };

//get values from the array that is returned and place them accordingly
//call another function that will add the values to appropriate place on html 
//takes array of object
 async function addValuestoCard(bookArray){
 
 
  console.log(bookArray);
  // const author = bookArrayj[0].bookauthor;
  // const bTitle = bookArray[0].booktitle;
  // const bcategories = bookArray[0].bookcategories;
  // const brating = bookArray[0].bookrating;
  // const bimg = bookArray[0].img;
  // console.log(authorfromobj);

// authorN.textContent = author;

//have an array that has all of the object for each book
 bookArray.forEach((item,index)=>{
//main card holder of two divs with class of flip card
  const card = frontCard[index];
  card.classList.add('btnfront');
 //items created for the front of card
 const button = document.createElement('button');
 button.classList.add('checkoutBtn');
 button.textContent = 'Add to Cart';
 
  const author = document.createElement('h1');

  author.textContent = item.bookauthor;
  const title = document.createElement('p');
  title.classList.add('.value');
  title.textContent = item.booktitle;
  const img = document.createElement('img');
  img.setAttribute('src', item.img);
  
  //element for the back of the card  
  // const mainCard = document.createElement('div');

  //for the 
  card.appendChild(button);
  card.appendChild(author);
  card.appendChild(title);
  card.appendChild(img);
  
  card.addEventListener('click', function(event){
    const target = event.target;
    if(target.classList.contains('checkoutBtn')){
      const div = target.closest('.btnfront');
      const savedtitle = div.querySelector('p');
      const storedtitle = savedtitle.textContent;
      document.location.replace('/checkout');
      //save to local storage
      sessionStorage.setItem('userbooktitle',storedtitle);
      console.log(storedtitle);

    }
  })

  });
 };


//  const bookCheckoutHandler = async(event)=>{ 
//   console.log('hello');    
//    document.location.replace('/checkout');
//  }
//going to submit the bookForm1 when button is clicked therefore it will take all the values an be stored in an object to local storage or session
//retrieve from local storage 
  //route for redirecting 
  //
//   const button = document.querySelector('.checkoutBtnn');

//   if (button && button.addEventListener) {
//     // The button exists and has the addEventListener method
//     button.addEventListener('click', function() {
//       // Event handler code here
//       console.log('Button clicked!');
//     });
//   } else {
//     console.log('Button or addEventListener is null.');
//   }

// //  };

  //  btncheckout.forEach(function(button) {
  //   button.addEventListener('click', ) 

  //   });
document
  .querySelector('#submitbtn')
  .addEventListener('click', bookFormHandler)
document
  .querySelector('#checkoutBtn1')
  .addEventListener('click',bookCheckoutHandler)
document
  .querySelector('#checkoutBtn2')
  .addEventListener('click',bookCheckoutHandler)
document
  .querySelector('#checkoutBtn3')
  .addEventListener('click',bookCheckoutHandler)
document
  .querySelector('#checkoutBtn4')
  .addEventListener('click',bookCheckoutHandler)
document
  .querySelector('#checkoutBtn5')
  .addEventListener('click',bookCheckoutHandler)
 

// document 
//   .querySelector  ('#checkoutBtn')
//   .addEventListener('click', bookCheckoutHandler);
 
 //if first one clicked then retrieve the first item from the array 

//when user selects checkout they are directed to the checkout once checkout is complete then that book that they selected on 
//is stored to the database table with user 


 // async function bookProperties(fetchdata){
   
    // const cards = document.querySelectorAll('.flip-card-front');
// const  

  //  console.log(bookinfo);
  //   console.log(title);
  //   console.log(authors);
  //   console.log(thumbnailSmlImg);
  //   console.log(fetchdata);
