const loginForm = document.querySelector('.signup');

async function loginFormHandler(event) {
  event.preventDefault();
  
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  
  if (email && password) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password, username }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        throw new Error('Invalid login credentials');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to log in. Please try again.');
    }
  }
}

if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler);
}