async function updateFormHandler(event) {
  event.preventDefault();

  const commentId = event.target.getAttribute('data-comment-id');
  const commentUserId = event.target.getAttribute('data-user-id');

  // Get the logged-in user's ID from the data attribute
  const loggedInUserId = document.querySelector('.comments').getAttribute('data-logged-in-user-id');

  // Check if the logged-in user ID matches the comment user ID
  if (loggedInUserId && commentUserId && loggedInUserId == commentUserId) {
    // Show the update form modal
    const updateFormModal = new bootstrap.Modal(document.getElementById('updateFormModal'), {});
    updateFormModal.show();
  } else {
    // Show the login modal
    const modal = new bootstrap.Modal(document.getElementById('loginModal'), {});
    modal.show();
  }
}

// async function updateFormHandler(event) {
//   event.preventDefault();

//   const commentId = event.target.getAttribute('data-comment-id');
//   const commentUserId = event.target.getAttribute('data-user-id');

//   // Get the logged-in user's ID from the data attribute
//   const loggedInUserId = document.querySelector('.comments').getAttribute('data-logged-in-user-id');

//   // Fetch the logged-in user's data using the /api/users/:id endpoint
//   const response = await fetch(`/api/users/${loggedInUserId}`);
//   const user = await response.json();

//   if (response.ok && user && user.id == commentUserId) {
//     const updateFormModal = new bootstrap.Modal(document.getElementById('updateFormModal'), {});
//     updateFormModal.show();
//   } else {
//     const modal = new bootstrap.Modal(document.getElementById('loginModal'), {});
//     modal.show();
//   }
// }

document.querySelectorAll('.update-comment-btn').forEach((button) => {
  button.addEventListener('click', updateFormHandler);
});


// async function updateFormHandler(event) {
//   event.preventDefault();

//   const commentId = event.target.getAttribute('data-comment-id');
//   const userId = event.target.getAttribute('data-user-id');

//   // Check if the user is logged in
//   const response = await fetch(`/api/users/${userId}`);
//   const user = await response.json();

//   console.log(response);
//   if (user) {
//     if (response.ok) {
//       const updateFormModal = new bootstrap.Modal(document.getElementById('updateFormModal'), {});
//       updateFormModal.show();
//     } else {
//       const modal = new bootstrap.Modal(document.getElementById('loginModal'), {});
//       modal.show();
//     }
//   }
// }
// document.querySelectorAll('.update-comment-btn').forEach((button) => {
//   button.addEventListener('click', updateFormHandler);
// });

async function updateCommentHandler(event) {
  event.preventDefault();

  const commentId = event.target.getAttribute('data-comment-id');

  // Get the comment data from the form
  const commentText = document.querySelector('#update-comment-text').value.trim();

  // Send the update request
  const response = await fetch(`/api/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      comment_text: commentText
    })
  });

  if (response.ok) {
    // Comment was updated successfully, reload the page
    document.location.reload();
  } else {
    // There was an error updating the comment
    // You can display an error message to the user here
  }
}

document.querySelector('#update-comment-form').addEventListener('submit', updateCommentHandler);