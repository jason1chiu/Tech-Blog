async function deletePost(event) {
  event.preventDefault();
  const postId = event.target.getAttribute('data-post-id');

  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  } catch (err) {
    console.error(err);
    alert('Failed to delete post');
  }
}

document.querySelectorAll('.delete-post-btn').forEach((button) => {
  button.addEventListener('click', deletePost);
});