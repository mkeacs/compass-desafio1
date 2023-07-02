// index.ts

import { posts, comments } from './data';

// Função para renderizar a lista de posts na tela inicial
function renderPosts() {
  const postsList = document.getElementById('posts-list');

  if (postsList) {
    posts.forEach((post) => {
      const postItem = document.createElement('div');
      postItem.className = 'post-item';

      const postImage = document.createElement('img');
      postImage.src = post.imageUrl;
      postItem.appendChild(postImage);

      const postTitle = document.createElement('h2');
      postTitle.textContent = post.title;
      postItem.appendChild(postTitle);

      const postBody = document.createElement('p');
      postBody.textContent = post.body;
      postItem.appendChild(postBody);

      const postLink = document.createElement('a');
      postLink.textContent = 'Expand...';
      postLink.href = `post-details.html?id=${post.id}`;
      postItem.appendChild(postLink);

      // Adicione um evento de clique para redirecionar para a página de detalhes do post
      postItem.addEventListener('click', () => {
        showPostDetails(post.id);
      });

      postsList.appendChild(postItem);
    });
  }
}

// Função para renderizar os detalhes de um post e seus comentários
function showPostDetails(postId: number) {
  const postDetails = document.getElementById('post-details');
  const post = posts.find((p) => p.id === postId);

  if (postDetails && post) {
    postDetails.innerHTML = '';

    const postImage = document.createElement('img');
    postImage.src = post.imageUrl;
    postDetails.appendChild(postImage);

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;
    postDetails.appendChild(postTitle);

    const postBody = document.createElement('p');
    postBody.textContent = post.body;
    postDetails.appendChild(postBody);

    const commentsList = document.createElement('ul');
    commentsList.className = 'comments-list';

    // Filtrar os comentários com base no postId
    const postComments = comments.filter((comment) => comment.postId === postId);
    postComments.forEach((comment) => {
      const commentItem = document.createElement('li');
      commentItem.textContent = `E-mail: ${comment.email} | Comentário: ${comment.body}`;
      commentsList.appendChild(commentItem);
    });

    postDetails.appendChild(commentsList);

    // Adicione um link para retornar à tela anterior (lista de posts)
    const backButton = document.createElement('a');
    backButton.textContent = 'Voltar';
    backButton.href = '#';
    backButton.addEventListener('click', () => {
      window.location.href = './index.html';
    });
    postDetails.appendChild(backButton);
  }
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', () => {
  // Obter o id do post a partir da URL da página atual
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  // Se o id do post estiver presente, renderizar os detalhes do post
  if (postId) {
    showPostDetails(parseInt(postId, 10));
  } else {
    renderPosts();
  }
});