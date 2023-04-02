const loginForm = document.querySelector('#login-form');

async function loginFormHandler(event) {
  event.preventDefault();
  
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  
  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
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