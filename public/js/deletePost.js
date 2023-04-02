async function deleteFormHandler(event) {
  event.preventDefault();

  const postId = document.querySelector('.edit-post-form').dataset.postId;

  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  });

  console.log(response)
  if (response.ok) {
    document.location.replace('/dashboard/');
  } 
  else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', async (event) => {
  if (event.target.classList.contains('delete-post-btn')) {
    deleteFormHandler(event);
  }
});