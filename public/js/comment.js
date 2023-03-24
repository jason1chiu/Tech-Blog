// add event listener to the comment form
const commentForm = document.querySelector('.comment-form');

if (commentForm) {
  commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const postId = window.location.pathname.split('/').pop();
    const commentBody = commentForm['comment-body'].value.trim();

    if (commentBody) {
      try {
        // send a POST request to the server to create a new comment
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postId, commentBody }),
        });

        if (response.ok) {
          // reload the page to show the new comment
          location.reload();
        } else {
          throw new Error('Failed to create comment');
        }
      } catch (err) {
        console.error(err);
      }
    }
  });
}