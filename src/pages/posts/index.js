import { logOut, creatPost, getPost, likePost, deletePost } from '../../services/index.js';

export const Posts = () => {
  const rootElement = document.createElement("div");
  rootElement.innerHTML = `
    <header>
      <button id="logout">Sair</button>
    </header>
    <h1 class="user-name" id="user-name">Postagens</h1>
    <form action="" class="form-post" id="form-post">
      <textarea id="new-post" rows="5" cols="50" placeholder="Escreva sua publicação"></textarea>
      <button type="submit" id="submit-post">Publicar</button>
    </form>
    <div id="container-post"></div>
  `;

  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
  });

  const newPost = rootElement.querySelector("#new-post")
  newPost.onload = getPost(showPosts);

  rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
    e.preventDefault();
    const postCreat = rootElement.querySelector("#new-post").value;
    creatPost(postCreat)
    getPost(showPosts)
    newPost.value = ""
    rootElement.querySelector("#container-post").innerHTML= "";
  });
  return rootElement;
};

const showPosts = (posts) => { 
  const postCreat = document.querySelector("#container-post")
  
  postCreat.innerHTML += `
    <div class="post-individual" id="${posts.postId}">

      <div class="post-text">
        <p id="show-text">${posts.text}</p>
        <p id="show-name">${posts.userName} </p>
        <p id="show-date">${posts.date} </p> 
        <p id="show-like">${posts.likes}</p>
      </div>

      <div class="post-edit"></div>
      
      <div class="button">
        <button class="like" data-like="${posts.postId}">Curtir</button>
        <button class="edit" data-edit="${posts.postId}">Editar</button>
        <button class="delete" data-id="${posts.postId}">Deletar</button>
      </div>

    </div>  
  `;

  postCreat.querySelectorAll(".like").forEach((e)=> {
    e.addEventListener("click", (e) => { 
      likePost(e.target.dataset.like)
    });
  });

  postCreat.querySelectorAll(".delete").forEach((e)=> {
    e.addEventListener("click", (e) => {
      deletePost(e.target.dataset.id) 
    });
  });
};