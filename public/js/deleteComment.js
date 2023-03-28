async function deleteFormHandler(event) {
  event.preventDefault();

  const commentId = event.target.getAttribute('data-comment-id');

  // Check if the user is logged in
  const response = await fetch('/api/users/me');
  const user = await response.json();

  if (user) {
    // User is logged in, send the delete request
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      document.location.reload();
    } else {
      // User is not logged in, show the login modal
      const modal = new bootstrap.Modal(document.getElementById('loginModal'), {});
      modal.show();
    }
  }
}

document.querySelectorAll('.delete-comment-btn').forEach((button) => {
  button.addEventListener('click', deleteFormHandler);
});