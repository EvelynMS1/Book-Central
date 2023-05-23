
console.log('hello');
const storeBookFormHandler = async () => {
  const title = sessionStorage.getItem('userbooktitle');
  console.log(title);
  if (title) {
    const response = await fetch('/api/book/comments', {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      console.log('success!');
      await getUserBookFormHandler();
    } else {
      alert('Failed to add book');
    }
  }
}
const getUserBookFormHandler = async () => {

  const response = await fetch('/bookRetrieve', {
    method: 'GET',
  });
  console.log('hello',response);
  if (response.ok) {
    console.log('it worked');
  } else {
    alert('Failed to delete project');
  }
}




document
  .querySelector('#commentReview')
  .addEventListener('click', storeBookFormHandler)