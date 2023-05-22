$(document).ready(function () {
  $('#checkout-form').on('submit', function (e) {
    e.preventDefault();  // Prevent form from being submitted normally

    let deliveryAddress = $('#address').val();
    let shippingMethod = $('#shipping-method').val();
    let billingAddress = $('#billing-address').val();
    let paymentMethod = $('#payment-method').val();
    //respond saying checkout is complete bookworm!
    //saves to session once filled out 
    sessionStorage.setItem('deliveryaddress', deliveryAddress);
    sessionStorage.setItem('shippingMethod', shippingMethod);
    sessionStorage.setItem('billingAddress', billingAddress);
    sessionStorage.setItem('paymentMethod', paymentMethod);
    //sends users book to database 
    // Implement AJAX request to server to submit the form data
    // This depends on your server-side logic

  });
  document.location.replace('/profile');
});

document
  .querySelector("#submitBtn")

//get item from session storage 
//book 
//  const booktitle = sessionStorage.getItem(userbookTitle);
//       if(booktitle){
//         const response = await fetch 
//       }
//create route to back end 
//post fetch 
//once in book table then i connection of tables at same user can be connected 
//in user profile you can add comments 
