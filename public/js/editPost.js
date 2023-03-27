// Handle form submission
const editPostForm = document.querySelector('.edit-post-form');
editPostForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = editPostForm.querySelector('[name="post-title"]').value;
  const post_content = editPostForm.querySelector('[name="post-body"]').value;
  const postId = editPostForm.dataset.postId;

  // Make API request to update post
  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, post_content }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      window.location.href = '/dashboard';
    } else {
      throw new Error('Failed to update post');
    }
  } catch (error) {
    console.error(error);
  }
});

// Handle delete post button click
const deletePostButton = document.querySelector('.delete-post-btn');
deletePostButton.addEventListener('click', async () => {
  const postId = editPostForm.dataset.postId;

  // Make API request to delete post
  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      window.location.href = '/dashboard';
    } else {
      throw new Error('Failed to delete post');
    }
  } catch (error) {
    console.error(error);
  }
});

// Handle comment submission
const commentForm = document.querySelector('.comment-form');
commentForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const comment_text = commentForm.querySelector('[name="comment-body"]').value;
  const postId = editPostForm.dataset.postId;

  // Make API request to add comment
  try {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text, postId }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      window.location.reload();
    } else {
      throw new Error('Failed to add comment');
    }
  } catch (error) {
    console.error(error);
  }
});