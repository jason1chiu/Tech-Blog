// Get the post ID from the URL
const postId = window.location.href.split('/').pop();

// Function to render the post details
const renderPost = (post) => {
  const postTitle = document.getElementById('post-title');
  const postBody = document.getElementById('post-body');
  const postUser = document.getElementById('post-user');
  const postDate = document.getElementById('post-date');
  const postComments = document.getElementById('post-comments');

  postTitle.innerText = post.title;
  postBody.innerText = post.description;
  postUser.innerText = `Posted by ${post.user.username}`;
  postDate.innerText = `on ${new Date(post.created_at).toLocaleDateString()}`;

  // Render comments
  postComments.innerHTML = '';
  post.comments.forEach((comment) => {
    const commentEl = document.createElement('div');
    commentEl.classList.add('comment');
    commentEl.innerHTML = `
      <h5 class="comment-user">${comment.user.username}</h5>
      <p class="comment-body">${comment.comment_text}</p>
      <p class="comment-date">${new Date(comment.created_at).toLocaleDateString()}</p>
    `;
    postComments.appendChild(commentEl);
  });
};

// Fetch post data from the API
fetch(`/api/posts/${postId}`)
  .then((response) => response.json())
  .then((data) => renderPost(data.post))
  .catch((error) => console.error(error));