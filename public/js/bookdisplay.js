const frontCard = document.querySelectorAll(".flip-card-front");
const bookdiv = document.querySelector(".booklayout");
const btncheckout = document.querySelectorAll(".checkoutBtnn");
const authorN = document.querySelector(".authorName");
const mainCard = document.querySelector(".flip-card-inner");
const cardholder = document.querySelector(".flip-card");

//calling fetch function  
const bookFormHandler = async (event) => {
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
async function addValuestoArray(booklist) {
  const booksdisplayed = [booklist.items[0], booklist.items[1], booklist.items[2], booklist.items[3], booklist.items[4]];
  console.log(booksdisplayed);
  const resultarray = [];
  //fucntion that goes through each item in the array and then calls the function within it
  for (var i = 0; i < booksdisplayed.length; i++) {
    const fetchdata = booksdisplayed[i];
    console.log(fetchdata);
    bookinfo = fetchdata.volumeInfo;
    title = bookinfo.title;
    authors = bookinfo.authors;
    thumbnailImg = bookinfo.imageLinks.thumbnail;
    thumbnailSmlImg = bookinfo.imageLinks.smallThumbnail;
    rating = bookinfo.averageRating;
    categories = bookinfo.categories[0];
    if (categories) {
      console.log(categories);
    } else {
      console.log('');
    }
    if (rating) {
      console.log(rating);
    } else {
      console.log('No ratings');
    }
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


  console.log(bookArray);


  //have an array that has all of the object for each book
  bookArray.forEach((item, index) => {
    //main card holder of two divs with class of flip card
    const card = frontCard[index];
    card.classList.add('btnfront');
    //creating buttons checkout and wishlist for front card
    const button = document.createElement('button');
    button.classList.add('checkoutBtn');
    button.textContent = 'Add to Cart';
    const wishbutton = document.createElement('button');
    wishbutton.classList.add('wishlistBtn');
    wishbutton.textContent = 'Add to Wishlist';
    //create elements p and img for storing content
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
    card.appendChild(button);
    card.appendChild(wishbutton);


    card.addEventListener('click', function (event) {
      const target = event.target;
      if (target.classList.contains('checkoutBtn')) {
        const div = target.closest('.btnfront');
        const savedtitle = div.querySelector('.checkoutBtn');
        const storedtitle = savedtitle.textContent;
        document.location.replace('/checkout');
        //save to local storage
        sessionStorage.setItem('userbooktitle', storedtitle);
        // sessionStorage.setItem()
        console.log(storedtitle);

      }
    })


    card.addEventListener('click', function (event) {
      const target = event.target;
      if (target.classList.contains('wishlistBtn')) {
        const div = target.closest('.btnfront');
        const savedtitle = div.querySelector('p');
        const storedtitle = savedtitle.textContent;

        document.location.replace('/wishlist');

        //save to local storage
        sessionStorage.setItem('userbooktitle', storedtitle);
        // sessionStorage.setItem()
        console.log(storedtitle);

      }
    })


  });
};



document
  .querySelector('#submitbtn')
  .addEventListener('click', bookFormHandler)
document
  .querySelector('#checkoutBtn1')
  .addEventListener('click', bookFormHandler)
document
  .querySelector('#checkoutBtn2')
  .addEventListener('click', bookFormHandler)
document
  .querySelector('#checkoutBtn3')
  .addEventListener('click', bookFormHandler)
document
  .querySelector('#checkoutBtn4')
  .addEventListener('click', bookFormHandler)
document
  .querySelector('#checkoutBtn5')
  .addEventListener('click', bookFormHandler)


