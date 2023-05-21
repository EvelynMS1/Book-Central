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
      alert(response.statusText);
    }
  }
};
//sign up function 
//signup@gmail.com 
//signupuser
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
       document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
};

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);







// document.querySelector('form');
// loginForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const username = document.querySelector('#username').value;
//   const password = document.querySelector('#password').value;
  
//   // Check if username and password are valid
//   if (username === 'example' && password === 'password') {
//     alert('Welcome back, ' + username + '!');
//     // Redirect user to members area
//     window.location.href = 'members.html';
//   } else {
//     alert('Invalid username or password.');
//   }
// });

// // Add event listener to browse books link
// const browseBooksLink = document.querySelector('.guest a');
// browseBooksLink.addEventListener('click', function(e) {
//   e.preventDefault();
//   // Redirect user to books page
//   window.location.href = 'books.html';
// });

