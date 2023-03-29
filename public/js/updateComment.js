async function updateFormHandler(event) {
  event.preventDefault();

  const commentId = event.target.getAttribute('data-comment-id');

  // Check if the user is logged in
  const response = await fetch('/api/users/me');
  const user = await response.json();

  if (user) {
    if (response.ok) {
      const updateFormModal = new bootstrap.Modal(document.getElementById('updateFormModal'), {});
      updateFormModal.show();
    } else {
      const modal = new bootstrap.Modal(document.getElementById('loginModal'), {});
      modal.show();
    }
  }
}
document.querySelectorAll('.update-comment-btn').forEach((button) => {
  button.addEventListener('click', updateFormHandler);
});

// async function updateCommentHandler(event) {
//   event.preventDefault();

//   const commentId = event.target.getAttribute('data-comment-id');

//   // Get the comment data from the form
//   const commentText = document.querySelector('#update-comment-text').value.trim();

//   // Send the update request
//   const response = await fetch(`/api/comments/${commentId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       comment_text: commentText
//     })
//   });

//   if (response.ok) {
//     // Comment was updated successfully, reload the page
//     document.location.reload();
//   } else {
//     // There was an error updating the comment
//     // You can display an error message to the user here
//   }
// }

// document.querySelector('#update-comment-form').addEventListener('submit', updateCommentHandler);