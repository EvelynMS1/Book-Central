//signupuser
const signUppageLink = async() =>{
    document.location.replace('/signup');
  }
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
        sessionStorage.setItem('userData.id',userData.id);
         document.location.replace('/homepage');
      } else {
        alert('incorrect username or password');
      }
    }
  };
  
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

document
  .querySelector('.signup')
  .addEventListener('click',signUppageLink);