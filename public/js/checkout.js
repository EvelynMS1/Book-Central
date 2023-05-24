

const checkoutFormHandler = async (event) => {
  event.preventDefault();  // Prevent form from being submitted normally

  const deliveryAddress = $('#address').val();
  const shippingMethod = $('#shipping-method').val();
  const billingAddress = $('#billing-address').val();
  const paymentMethod = $('#payment-method').val();
  //respond saying checkout is complete bookworm!
  //saves to session once filled out 
  sessionStorage.setItem('deliveryaddress', deliveryAddress);
  sessionStorage.setItem('shippingMethod', shippingMethod);
  sessionStorage.setItem('billingAddress', billingAddress);
  sessionStorage.setItem('paymentMethod', paymentMethod);
  //sends users book to database 
  // Implement AJAX request to server to submit the form data
  // This depends on your server-side logic

 

  // console.log('hello');
  // const storeBookFormHandler = async () => {
    const title = sessionStorage.getItem('userbooktitle');
    console.log(title);
    if (title) {
      const response = await fetch('/api/book/comments', {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        //obtaining the data that is sent back as response from the server 
        //the response variable is storing the await aka the response of the fetch post 
        const data = await response.json();
        console.log('success!', response); 
        //moved document location replace from the bottom to here
        document.location.replace('/profile');
        // await getUserBookFormHandler();
      } else {
        alert('Failed to add book');
      }
    }
  }
  // const getUserBookFormHandler = async () => {

  //   const response = await fetch('/profile', {
  //     method: 'GET',
  //   });
  //   console.log('hello', response);
  //   if (response.ok) {
  //     console.log('it worked');
  //   } else {
  //     alert('Failed to delete project');
  //   }
  // }


  //Button query selector for event listener



// bookRetrieve was in document replace
document
  .querySelector("#submitBtn")
  .addEventListener('click', checkoutFormHandler)

