// Get references to page elements
var postTitle = document.querySelector("#post-title");
var postContent = document.querySelector("#post-content");
var postUser = document.querySelector("#post-user");
var postDate = document.querySelector("#post-date");
var commentForm = document.querySelector("#comment-form");
var commentList = document.querySelector("#comment-list");

// Function to handle fetching a post and rendering it to the page
function renderPost(postId) {
  // Make a GET request to the server to fetch the post data
  fetch("/api/posts/" + postId)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Update the page with the post data
      postTitle.textContent = data.title;
      postContent.textContent = data.content;
      postUser.textContent = data.user.username;
      postDate.textContent = moment(data.createdAt).format("MMMM D, YYYY");
    });
}

// Function to handle submitting a new comment
function handleCommentSubmit(event) {
  event.preventDefault();

  // Get the comment data from the form
  var commentText = document.querySelector("#comment-text").value.trim();
  var postId = commentForm.getAttribute("data-post-id");

  // Make a POST request to the server to create the comment
  fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: commentText,
      postId: postId
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Update the comment list with the new comment
      var commentItem = document.createElement("li");
      commentItem.textContent = data.text;
      commentList.appendChild(commentItem);

      // Clear the comment form
      document.querySelector("#comment-text").value = "";
    });
}

// Add event listener to comment form submit button
commentForm.addEventListener("submit", handleCommentSubmit);