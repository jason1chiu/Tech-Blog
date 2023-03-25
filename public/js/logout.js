async function logoutHandler() {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    window.location.href = '/';
  } else {
    console.error(response.statusText);
    alert('Failed to logout');
  }
}

document.querySelector('#logout').addEventListener('click', logoutHandler);