import { logOut, creatPost, getPost, likePost, deletePost, editPost } from '../../services/index.js';

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

  const newPost = rootElement.querySelector("#new-post");
  newPost.onload = getPost(showPosts);

  rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
    e.preventDefault();
    const postCreat = rootElement.querySelector("#new-post").value;
    creatPost(postCreat);
    getPost(showPosts);
    newPost.value = "";
    rootElement.querySelector("#container-post").innerHTML= "";
  });
  return rootElement;
};

const showPosts = (posts) => { 
  const postCreat = document.querySelector("#container-post");
  postCreat.innerHTML += `
    <div class="post-individual" id="${posts.postId}">

      <div class="post-text">
        <p class="show-name" id="show-name">${posts.userName}</p>
        <p class="show-date" id="show-date">${posts.date}</p>
        <p class="show-text" id="show-text">${posts.text}</p> 
        <p class="show-like" id="show-like">${posts.likes}</p>
      </div>

      <button class="like" data-like="${posts.postId}">Curtir</button>
      <button class="edit" data-edit="${posts.postId}">Editar</button>
      <button class="delete" data-id="${posts.postId}">Deletar</button>

      <div class="on-edit">
        <textarea class="edit-post" id="edit-post">${posts.text}</textarea>
        <button class="save-button" data-save="${posts.postId}">Salvar</button>
      </div>

    </div>  
  `;

  postCreat.querySelectorAll(".like").forEach((button) => {
    button.addEventListener("click", async(e) => {
      e.preventDefault()
      const containerLike = e.target.parentNode
      likePost(e.target.dataset.like)
      .then(() => {
          const showLike = containerLike.querySelector(".show-like")
          showLike.innerHTML = `${Number(showLike.textContent) + Number(1)}`
      });
    });
  });

  postCreat.querySelectorAll(".delete").forEach((e)=> {
    e.addEventListener("click", (e) => {
      const confirmDelete = confirm("Deseja deletar o post?");
      if (confirmDelete == true) {
        deletePost(e.target.dataset.id)
        e.target.parentNode.innerHTML = ``;
      }
      else {
        alert("Publicação não excluída");
      };
    });
  });

  postCreat.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", (e) => {
      showAreaToEdit(e)
    });

    const showAreaToEdit = (e) => {
      const userPost = e.target.parentNode
      const textArea = userPost.querySelector(".on-edit");
      textArea.style.display = "block";
      const saveButton = userPost.querySelector(".save-button");
      saveButton.addEventListener("click", () => {
        saveEditedPost(userPost) 
      });
    };

    const saveEditedPost = (userPost) => {
      const oldText = userPost.querySelector(".show-text");
      const editedText = userPost.querySelector(".edit-post").value;
      const textArea = userPost.querySelector(".on-edit");
      const idPost = userPost.id;
      editPost(idPost, editedText)
      .then(() => {
      oldText.innerHTML = editedText;
      textArea.style.display = "none"
      })
      .catch(() => {
        alert("Erro, tente novamente");
      });
    }; 
  });
};



