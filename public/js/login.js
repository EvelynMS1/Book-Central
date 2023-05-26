const loginFormHandler = async(event)=>{
  event.preventDefault();
  //collecting values from login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();


  if (email && password) {
   console.log(email); 
    const response = await fetch('/api/users/login',{
      method:'POST',
      body: JSON.stringify({ email:email, password:password }),
      headers: {'Content-Type':'application/json'}
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Incorrect Email and or Password');
    }
  }
};


document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);







