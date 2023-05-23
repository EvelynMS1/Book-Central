

const checkoutFormHandler = async(event)=> {
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


  document.location.replace('/profile');
};

document
  .querySelector("#submitBtn")
  .addEventListener('click',checkoutFormHandler )

