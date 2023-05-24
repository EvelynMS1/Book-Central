
// console.log('hello');
// const storeBookFormHandler = async () => {
//   const title = sessionStorage.getItem('userbooktitle');
//   console.log(title);
//   if (title) {
//     const response = await fetch('/api/book/comments', {
//       method: 'POST',
//       body: JSON.stringify({ title }),
//       headers: { 'Content-Type': 'application/json' }
//     });

//     if (response.ok) {
//       //obtaining the data that is sent back as response from the server 
//       //the response variable is storing the await aka the response of the fetch post 
//       const data = await response.json();
//       console.log('success!',response);
//       // await getUserBookFormHandler();
//     } else {
//       alert('Failed to add book');
//     }
//   }
// }
// const getUserBookFormHandler = async () => {

//   const response = await fetch('/bookRetrieve', {
//     method: 'GET',
//   });
//   console.log('hello',response);
//   if (response.ok) {
//     console.log('it worked');
//   } else {
//     alert('Failed to delete project');
//   }
// }


// //Button query selector for event listener

// document
//   .querySelector('#commentReview')
//   .addEventListener('click', storeBookFormHandler)