import { logOut, creatPost, getPost, likePost, deletePost } from '../../services/index.js'

export const Posts = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <header>
      <button id='logout'>Sair</button>
    </header>
    <h1 class="user-name" id="user-name">Postagens</h1>
    <form action="" class="form-post" id="form-post">
      <textarea id="new-post" rows="5" cols="50" placeholder="Escreva sua publicação"></textarea>
      <button type="submit" id="submit-post">Publicar</button>
    </form>
    <div id="post-creat"></div>
  `;

  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();loading
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
    rootElement.querySelector("#post-creat").innerHTML= "";
  });
    
  return rootElement;
};

const showPosts = (posts) => {
  console.log(posts)

  const postCreat = document.querySelector("#post-creat")
  

  const postsTemplates = `
    <div class="pos-individual" id="${posts.postId}">
      <p>${posts.userName}</p>
      <p>${posts.date}</p>
      <p>${posts.text}</p>
      <p>${posts.likes}</p>
      

      <button class="like" data-like="${posts.postId}">Curtir</button>
      <button class="edit" data-edit="${posts.postId}">Editar</button>
      <button class="delete" data-id="${posts.postId}">Deletar</button>
    </div>
  `
  postCreat.innerHTML += postsTemplates; 

  // postCreat.querySelectorAll(".like").forEach((e)=> {
  //   e.addEventListener("click", (e) => {
  //     e.target.parentNode.classList.add("likes"); 
  //     likePost(posts.postId).then(() => {
  //       console.log("Curtiu")
  //     })
  //     .catch(() => {
  //       alert("Tente curtir novamente")
  //     });
  //   });
  // })


  const btnLike = postCreat.querySelectorAll(".like");

  btnLike.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      executeLike(e)
    });
  }) 

  const executeLike = (e) => {
    likePost()
    .then((retorno) => {
      console.log(retorno)
      e.target.classList.add("likes")
    })
    .catch(() => {
      alert("Tente curtir novamente")
    });
  }


  postCreat.querySelectorAll(".delete").forEach((e)=> {
    e.addEventListener("click", (e) => {
      e.target.parentNode.querySelector(".delete") // e.target pega o elemento que cliquei  
      //parent aplica para todos os delete da pagina // sempre volta a uma casa anteriror(div)
      deletePost(posts.postId)
    });
  })
};

  // postCreat.querySelectorAll(".delete").forEach((e)=> {
  //   e.addEventListener("click", (e) => {
  //     e.target.parentNode.querySelector(".delete") 
  //     //parent aplica para todos os delete da pagina // sempre volta a uma casa anteriror(div)
  //     deletePost(posts.postId)
  //   });
  // }) 


  // const executedelete = (e) => {
  //   deletePost().then(() => {
  //     console.log("Deletou")
  //   })
  //   .catch(() => {
  //     alert("Tente deletar novamente")
  //   });
  // }






  // postCreat.querySelectorAll(".like").forEach((e)=> {
  //   e.addEventListener("click", (e) => {
  //     e.target.parentNode.querySelector(".like"); 
  //     likePost(posts.postId)
  //     loadingPost()
  //   });
  // })

  

  // postCreat.querySelectorAll(".edit").forEach((e) => {
  //   e.addEventListener("click", (e) => {
  //     e.target.dataset.id.querySelector(".edit");
  //     editPost(posts.postId)
  //     loadingPost()
  //   });
  // })

 
  //MODELO EX ALUNA

  // feedArea.addEventListener('click', (event) => {
  //   const closestEditar = event.target.closest(btnEditar);
  //   if (closestEditar && feedArea.contains(closestEditar)) {
  //     const closestTextarea = closestEditar.parentNode.querySelector('.editar-post');
  //     closestTextarea.style.display = 'block';
  //     const closestBtnSalvarEdicao = closestEditar.parentNode.querySelector('.btn-salvar-editado');
  //     closestBtnSalvarEdicao.style.display = 'block';

  //     closestBtnSalvarEdicao.addEventListener('click', () => {
  //       closestTextarea.style.display = 'none';
  //       closestBtnSalvarEdicao.style.display = 'none';
  //       const closestPost = closestEditar.parentNode.querySelector('.texto-post');
  //       const postFinal = closestTextarea.value;
  //       closestPost.innerHTML = postFinal;
  //       const closestId = closestEditar.parentNode.querySelector('.id-escondido').innerText;






  

  // const showPosts = () => {
  //   const rootElement = document.createElement('div');
  //   const posts = getPosts()
  //   let element = ''

  //   posts.map(post => {
  //     element += `
  //       <p>${post.message} </p>
  //     `;
  //   });

  //   rootElement.innerHTML = element
  //   showPosts() 
  // };