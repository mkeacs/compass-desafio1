// index.ts

import { posts, comments } from "./data";

function renderPosts() {
  const postsList = document.getElementById("posts-list");

  if (postsList) {
    posts.forEach((post) => {
      const postItem = document.createElement("div");
      postItem.className = "post-item";

      const postImage = document.createElement("img");
      postImage.src = post.imageUrl;
      postItem.appendChild(postImage);

      const postTitle = document.createElement("h2");
      postTitle.textContent = post.title;
      postItem.appendChild(postTitle);

      const postBody = document.createElement("p");
      postBody.textContent = post.body;
      postItem.appendChild(postBody);

      const postLink = document.createElement("a");
      postLink.textContent = "Expand...";
      postLink.href = `post-details.html?id=${post.id}`;
      postItem.appendChild(postLink);

      postItem.addEventListener("click", () => {
        window.location.href = `post-details.html?id=${post.id}`;
        showPostDetails(post.id);
      });

      postsList.appendChild(postItem);
    });
  }
}

function showPostDetails(postId: number) {
  const postDetails = document.getElementById("post-details");
  const post = posts.find((p) => p.id === postId);

  if (postDetails && post) {
    postDetails.innerHTML = "";

    const postDiv = document.createElement("div");
    postDiv.className = "post-details";

    const backButton = document.createElement("a");
    backButton.href = "./index.html";
    backButton.className = "backButton";

    const backButtonImg = document.createElement("img");
    backButtonImg.src = "./public/images/back-button.png";
    backButton.appendChild(backButtonImg);

    postDetails.appendChild(backButton);

    const postImage = document.createElement("img");
    postImage.src = post.imageUrl;
    postDiv.appendChild(postImage);

    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;
    postDiv.appendChild(postTitle);

    const postBody = document.createElement("p");
    postBody.textContent = post.body;
    postDiv.appendChild(postBody);

    postDetails.appendChild(postDiv);

    const commentsDiv = document.createElement("div");
    commentsDiv.className = "comments-details";

    const commentsList = document.createElement("ul");
    commentsList.className = "comments-list";

    const postComments = comments.filter(
      (comment) => comment.postId === postId
    );
    postComments.forEach((comment) => {
      const commentItem = document.createElement("li");
      commentItem.className = "comment-item";

      const username = comment.email.split("@")[0];
      const usernameSpan = document.createElement("span");
      usernameSpan.className = "custom-font";
      usernameSpan.textContent = `${username}: ${comment.email}: `;
      commentItem.appendChild(usernameSpan);

      const commentBody = document.createElement("span");
      commentBody.className = "comment-body";
      commentBody.textContent = comment.body;
      commentItem.appendChild(commentBody);

      commentsList.appendChild(commentItem);
    });

    commentsDiv.appendChild(commentsList);

    postDetails.appendChild(commentsDiv);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (postId) {
    showPostDetails(parseInt(postId, 10));
  } else {
    renderPosts();
  }
});
