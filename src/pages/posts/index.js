import { logOut, creatPost, loadingPost, likePost, deletePost } from '../../services/index.js'

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

  const postCreat = rootElement.querySelector("#new-post");
  const btnLogout = rootElement.querySelector("#logout");
  const btnPost = rootElement.querySelector("#submit-post");
    
  btnLogout.addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
  });

  
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
  });
    
  return rootElement;
};

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