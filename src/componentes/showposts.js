import {
  likePost, deletePost, editPost, disLikePost,
} from '../services/index.js';

export const showPosts = (post) => {
  const postDiv = document.createElement('div');
  postDiv.classList.add('post-individual');
  postDiv.setAttribute('id', post.postId);
  postDiv.innerHTML = `
    <div class='container-user'>
      <p class='show-name' id='show-name'>${post.userName}</p>
      <p class='show-date' id='show-date'>${post.date}</p>
    </div>

    <div class='container-text'>
      <p class='show-text' id='show-text'>${post.text}</p> 
    </div>

    <div class='container-like'>
      <button class='button-like' data-like='${post.postId}'><img class='img-like' src='img/curtir.png'></button>
      <p class='show-like' id='show-like'>${post.likes.length}</p>
    
    <button class='button-edit' data-edit='${post.postId}'><img class='img-edit' src='img/editar.png'></button>
    <button class='button-delete' data-delete='${post.postId}'><img class='img-delete' src='img/deletar.png'></button>

    <div class='on-edit'>
      <textarea class='edit-post' id='edit-post'>${post.text}</textarea>
      <button class='button-save' data-save='${post.postId}'><img class='img-save' src='img/ok.png'></button>
    </div> 
    `;

  let postLikes = post.likes;
  postDiv.querySelector('.button-like').addEventListener('click', (e) => {
    e.preventDefault();
    const userFound = postLikes.find(
      (user) => user === firebase.auth().currentUser.uid,
    );
    if (!userFound) {
      likePost(post.postId);
      const showLike = postDiv.querySelector('.show-like');
      const likesQuant = Number(showLike.textContent);
      showLike.innerHTML = likesQuant + 1;
      postLikes.push(firebase.auth().currentUser.uid);
    } else {
      disLikePost(post.postId);
      const showLike = postDiv.querySelector('.show-like');
      const likesQuant = Number(showLike.textContent);
      showLike.innerHTML = likesQuant - 1;
      postLikes = postLikes.map(
        (user) => user !== firebase.auth().currentUser.uid,
      );
    }
  });

  postDiv.querySelector('.button-delete').addEventListener('click', (e) => {
    e.preventDefault();
    const deleteOk = window.confirm('Deseja deletar o post?');
    if (deleteOk === true) {
      deletePost(post.postId);
      postDiv.innerHTML = '';
    }
  });

  const saveEditedPost = (userPost) => {
    const oldText = userPost.querySelector('.show-text');
    const editedText = userPost.querySelector('.edit-post').value;
    const textArea = userPost.querySelector('.on-edit');
    const idPost = userPost.id;
    editPost(idPost, editedText)
      .then(() => {
        oldText.innerHTML = editedText;
        textArea.style.display = 'none';
      })
      .catch(() => {
        alert('Erro, tente novamente');
      });
  };

  const showAreaToEdit = (e) => {
    const userPost = e.target.parentNode.parentNode;
    const textArea = userPost.querySelector('.on-edit');
    textArea.style.display = 'block';
    const saveButton = userPost.querySelector('.button-save');
    saveButton.addEventListener('click', () => {
      saveEditedPost(userPost);
    });
  };

  postDiv.querySelector('.button-edit').addEventListener('click', (e) => {
    e.preventDefault();
    showAreaToEdit(e);
  });

  return postDiv;
};
