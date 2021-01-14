import { logOut, creatPost, getPost, likePost, deletePost, editPost, disLikePost } from '../../services/index.js';

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

const showPosts = (post) => { 
  const postCreat = document.querySelector("#container-post");
  const postDiv = document.createElement("div");
  postDiv.classList.add("post-individual");
  postDiv.setAttribute("id", post.postId)
  postDiv.innerHTML = `
    <div class="post-text">
      <p class="show-name" id="show-name">${post.userName}</p>
      <p class="show-date" id="show-date">${post.date}</p>
      <p class="show-text" id="show-text">${post.text}</p> 
      <p class="show-like" id="show-like">${post.likes.length}</p>
    </div>

    <button class="like" data-like="${post.postId}">Curtir</button>
    <button class="edit" data-edit="${post.postId}">Editar</button>
    <button class="delete" data-delete="${post.postId}">Deletar</button>

    <div class="on-edit">
      <textarea class="edit-post" id="edit-post">${post.text}</textarea>
      <button class="save-button" data-save="${post.postId}">Salvar</button>
    </div> 
    `;

  let postLikes = post.likes
  postDiv.querySelector(".like").addEventListener("click", (e) => {
    e.preventDefault()
    const userFound = postLikes.find(user => user === firebase.auth().currentUser.uid)
    if(!userFound){
      likePost(post.postId)
      const showLike = postDiv.querySelector(".show-like")
      const likesQuant = Number(showLike.textContent)
      showLike.innerHTML = likesQuant + 1
      postLikes.push(firebase.auth().currentUser.uid)
    }else{
      disLikePost(post.postId)
      const showLike = postDiv.querySelector(".show-like")
      const likesQuant = Number(showLike.textContent)
      showLike.innerHTML = likesQuant - 1
      postLikes = postLikes.map(user => user !== firebase.auth().currentUser.uid)
    }
  });
  
  postDiv.querySelector(".delete").addEventListener("click", (e) => {
    e.preventDefault()
    const confirmDelete = confirm("Deseja deletar o post?");
      if (confirmDelete == true) {
        deletePost(post.postId)
        postDiv.innerHTML = ``;
      }
      else {
        alert("Publicação não excluída");
      }
  });


  // postCreat.querySelectorAll(".delete").forEach((e)=> {
  //   e.addEventListener("click", (e) => {
  //     const confirmDelete = confirm("Deseja deletar o post?");
  //     if (confirmDelete == true) {
  //       deletePost(e.target.dataset.id)
  //       e.target.parentNode.innerHTML = ``;
  //     }
  //     else {
  //       alert("Publicação não excluída");
  //     };
  //   });
  // });

  postDiv.querySelector(".edit").addEventListener("click", (e) => {
    e.preventDefault()
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

  // postCreat.querySelectorAll(".edit").forEach((button) => {
  //   button.addEventListener("click", (e) => {
      
  //   });

  //   const showAreaToEdit = (e) => {
  //     const userPost = e.target.parentNode
  //     const textArea = userPost.querySelector(".on-edit");
  //     textArea.style.display = "block";
  //     const saveButton = userPost.querySelector(".save-button");
  //     saveButton.addEventListener("click", () => {
  //       saveEditedPost(userPost) 
  //     });
  //   };

  //   const saveEditedPost = (userPost) => {
  //     const oldText = userPost.querySelector(".show-text");
  //     const editedText = userPost.querySelector(".edit-post").value;
  //     const textArea = userPost.querySelector(".on-edit");
  //     const idPost = userPost.id;
  //     editPost(idPost, editedText)
  //     .then(() => {
  //     oldText.innerHTML = editedText;
  //     textArea.style.display = "none"
  //     })
  //     .catch(() => {
  //       alert("Erro, tente novamente");
  //     });
  //   }; 
  // });

  postCreat.appendChild(postDiv)
}