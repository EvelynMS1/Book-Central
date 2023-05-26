const frontCard = document.querySelectorAll(".flip-card-front");
const bookdiv = document.querySelector(".booklayout");
const mainCard = document.querySelectorAll(".flip-card-inner");
const cardholder = document.querySelector(".flip-card");

//calling fetch function  
const bookFormHandler = async (event) => {
  const booktitlesearch = localStorage.getItem('inputValue');
  // const booktitlesearch = document.querySelector("#title").value.trim();
  // console.log('bookFormHandler');
  //getting value from search bar

  logJSONData(booktitlesearch);
};
async function logJSONData(title) {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=5&key=AIzaSyD0kfX1gVi9NATkHXSkfYYuf2pwOes1C_U`);
  const booklist = await response.json();
  //displaying the results of fetch call 

  const bookitemarray = await addValuestoArray(booklist);

  addValuestoCard(bookitemarray);

};
async function addValuestoArray(booklist) {
  const booksdisplayed = [booklist.items[0], booklist.items[1], booklist.items[2], booklist.items[3], booklist.items[4]];
 
  const resultarray = [];
  //fucntion that goes through each item in the array and then calls the function within it
  for (var i = 0; i < booksdisplayed.length; i++) {
    const fetchdata = booksdisplayed[i];
   
    bookinfo = fetchdata.volumeInfo;
    title = bookinfo.title;
    authors = bookinfo.authors;
    thumbnailImg = bookinfo.imageLinks.thumbnail;
    thumbnailSmlImg = bookinfo.imageLinks.smallThumbnail;
    rating = bookinfo.averageRating;
    categories = bookinfo.categories[0];
   
    const obj = {
      booktitle: title,
      bookauthor: authors,
      img: thumbnailImg,
      bookrating: rating,
      bookcategories: categories
    }

    // const eachbook = bookProperties(booksdisplayed[i]);
    resultarray.push(obj);
  }
  return resultarray;

};


async function addValuestoCard(bookArray) {


  //have an array that has all of the object for each book
  bookArray.forEach((item, index) => {
    //main card holder of two divs with class of flip card
    const card = frontCard[index];
    card.classList.add('btnfront');
   
    //creating buttons checkout and wishlist for front card
    const checkoutbutton = document.createElement('button');
    checkoutbutton.classList.add('checkoutBtn');
    checkoutbutton.textContent = 'Add to Cart';
    const wishbutton = document.createElement('button');
    wishbutton.classList.add('wishlistBtn');
    wishbutton.textContent = 'Add to Wishlist';
    //create elements p and img for storing content with class name
    const author = document.createElement('p');
    author.classList.add('author');
    author.textContent = item.bookauthor;

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = item.booktitle;

    const img = document.createElement('img');
    img.setAttribute('src', item.img);

   

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(author);
    card.appendChild(checkoutbutton);
    card.appendChild(wishbutton);
    bookdiv.appendChild(card);


    bookdiv.addEventListener('click', function (event) {

      const target = event.target;
      if (target.classList.contains('checkoutBtn')) {
        const div = target.closest('.btnfront');
        const savedtitle = div.querySelector('.title');
        const storedtitle = savedtitle.textContent;
        const savedauthor = div.querySelector('.author');
        const storedauthor = savedauthor.textContent;
       
        //save to local storage
        sessionStorage.setItem('userbooktitle', storedtitle);
        sessionStorage.setItem('userbookauthor', storedauthor);
        // sessionStorage.setItem()
     
        document.location.replace('/checkout');
      }
      // }else if(target.classList.contains('wishlistBtn')){
      //   const div = target.closest('.btnfront');
      //   const savedtitle = div.querySelector('.title');
      //   const storedtitle = savedtitle.textContent;
      //   const savedauthor = div.querySelector('.author');
      //   const storedauthor = savedauthor.textContent;
      //   document.location.replace('/wishlist');
      //   //save to local storage
      //   sessionStorage.setItem('userbooktitle', storedtitle);
      //   sessionStorage.setItem('userbookauthor', storedauthor);
      //   // sessionStorage.setItem()
      //   console.log(storedtitle);
      //   console.log(storedauthor);
      // }

    });


  });
};
bookFormHandler();


// document
//   .querySelector('#submitbtn')
//   .addEventListener('click', bookFormHandler)

