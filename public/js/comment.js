const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment-body').value.trim();
  const post_id = window.location.pathname.split('/').pop();

  if (comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_text:comment, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Comment added successfully');
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#add-comment').addEventListener('submit', commentFormHandler);