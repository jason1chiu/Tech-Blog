async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // Get all posts again to update the dashboard with the new post
    const postsResponse = await fetch('/api/posts');
    if (postsResponse.ok) {
      const postsData = await postsResponse.json();
      const postsList = document.querySelector('.post-list');
      // Replace the old posts with the new ones
      postsList.innerHTML = '';
      postsData.forEach((post) => {
        const postHTML = `
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.post_content}</p>
              <a href="/post/${post.id}" class="btn btn-primary">Read More</a>
            </div>
            <div class="card-footer text-muted">
              Posted by ${post.user.username} on ${format_date(post.created_at)}
            </div>
          </div>
        `;
        postsList.insertAdjacentHTML('beforeend', postHTML);
      });
    }
    // Redirect to dashboard
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}
