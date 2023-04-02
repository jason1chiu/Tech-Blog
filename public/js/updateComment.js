// Check if the user is logged in
fetch(`/api/comments/me`)
  .then(response => response.text())
  .then(user => {
    document.querySelectorAll('.update-comment-btn').forEach((button) => {
      if (button) {
        const userId = button.getAttribute('data-user-id');
        if (userId != user) {
          button.disabled = true;
          button.classList.add("disabled");
        } else {
          button.addEventListener('click', updateFormHandler);
      }
    } 
  });
});

let currentCommentId; // Add this line at the beginning of your script to store the currentCommentId

async function updateFormHandler(event) {
  event.preventDefault();

  currentCommentId = event.target.getAttribute('data-comment-id'); // Store the commentId when showing the modal
  
  const updateFormModal = new bootstrap.Modal(document.getElementById('updateFormModal'), {});
  updateFormModal.show();
}

async function updateCommentHandler(event) {
  event.preventDefault();

  const commentId = currentCommentId; // Use the stored commentId here

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

    if (response.status === 403) {
      const modal = new bootstrap.Modal(document.getElementById('loginModal'), {});
      modal.show();
    } else if (response.status === 404) {
      alert("You are a hacker");
    } else if (response.ok) {
      document.location.reload();
    }
}

document.querySelector('#update-comment-form').addEventListener('submit', updateCommentHandler);