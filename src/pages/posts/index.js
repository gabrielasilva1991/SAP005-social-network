import { logOut, creatPost, loadingPost, likePost, deletePost } from '../../services/index.js'

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

    <div id="post-creat"></div>

  `;

  const postCreat = rootElement.querySelector("#new-post");
  const btnLogout = rootElement.querySelector("#logout");
  const btnPost = rootElement.querySelector("#submit-post");
    
  btnLogout.addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
  });

<<<<<<< HEAD
  
  const loadPost = () => {
    loadingPost().then(results => {
      document.querySelector("#post-creat").innerHTML= "";
      results.docs.map(doc => {
        showPosts({
          //date: doc.data().date.toDate().toLocaleString('pt-BR'),
          postId: doc.id,
          name: doc.data().name,
          userEmail: doc.data().userEmail,
          text: doc.data().text,
          likes: doc.data().likes,
          comments: doc.data().comments,
          date: doc.data().date,
          //time: data.getTime(),
          //dataString: `${data.toLocaleDateString()} ${data.getHours()}:${data.getMinutes()}`,
        });
      });
    });
  };

  postCreat.onload = loadPost();

  btnPost.addEventListener("click", (e) => {
    e.preventDefault();
    const postInitial = rootElement.querySelector("#new-post").value;
    creatPost(postInitial)
    document.querySelector("#post-creat").innerHTML= "Carregando..."
    loadPost()
=======
  const newPost = rootElement.querySelector("#new-post")
  newPost.onload = getPost(showPosts);

  rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
    e.preventDefault();
    const postCreat = rootElement.querySelector("#new-post").value;
    creatPost(postCreat)
    getPost(showPosts)
    newPost.value = ""
    rootElement.querySelector("#container-post").innerHTML= "";
>>>>>>> dc364face951a95c1fb640a8299a597a1fe9a743
  });
    
  return rootElement;
};

<<<<<<< HEAD
const showPosts = (posts) => {

  const postCreat = document.querySelector("#post-creat")
  

  const postsTemplates = `
    <div id="${posts.id}">
      <p>${posts.text}</p>
      <p>${posts.likes}</p>
      <button class="likes" id="likes">Curtir</button>
      <button class="edit" id="edit">Editar</button>
      <button class="delete" id="delete" div-id=${posts.id}>Deletar</button>
    </div>
  `
  postCreat.innerHTML += postsTemplates; 

  

  // const btnLike = document.querySelector("#likes");
  // btnLike.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   likePost(posts)
  // });
 

  // postCreat.querySelectorAll("#delete").forEach((e)=> {
  //   e.addEventListener("click", (e) => {
  //     const btnDelete = e.target.parentNode.querySelector("#delete"); 
  //     //e.target.parentNode.querySelector("#delete") 
  //     //parent aplica para todos os delete da pagina
  //     deletePost(btnDelete.dataset.postId)
  //     loadingPost()
  //     onNavigate('/posts')
  //   });
  // }) 

  postCreat.querySelectorAll("#delete").forEach((e)=> {
    e.addEventListener("click", (e) => {
      e.target.parentNode.querySelector("#delete") 
      //parent aplica para todos os delete da pagina
      deletePost(posts.postId)
    });
  }) 
};




=======
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
>>>>>>> dc364face951a95c1fb640a8299a597a1fe9a743

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