// Add event listener to login form
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  // Check if username and password are valid
  if (username === 'example' && password === 'password') {
    alert('Welcome back, ' + username + '!');
    // Redirect user to members area
    window.location.href = 'members.html';
  } else {
    alert('Invalid username or password.');
  }
});

// Add event listener to browse books link
const browseBooksLink = document.querySelector('.guest a');
browseBooksLink.addEventListener('click', function(e) {
  e.preventDefault();
  // Redirect user to books page
  window.location.href = 'books.html';
});
