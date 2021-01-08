import { logOut, creatPost, loadingPost, likePost } from '../../services/index.js'

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
    e.preventDefault();
    return logOut();
  });

  const loadPost = () => {
    loadingPost().then(results => {
      document.querySelector("#post-creat").innerHTML= "";
      results.docs.map(doc => {
        showPosts({
          //date: doc.data().date.toDate().toLocaleString('pt-BR'),
          id: doc.id,
          userId: doc.data().userId,
          text: doc.data().text,
          likes: doc.data().likes,
          comments: doc.data().comments,
        });
      });
    });
  };

  rootElement.querySelector("#post-creat").onload = loadPost();

  rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
    e.preventDefault();
    const postInitial = rootElement.querySelector("#new-post").value;
    creatPost(postInitial)
    loadPost()
  });
  
  return rootElement;
};

const showPosts = (posts) => {
  const postsTemplates = `
    <div id="${posts.id}">
      <p>${posts.text}</p>
      <p>${posts.likes}</p>
      <button class="like" id="like">Curtir</button>
      <button class="edit" id="edit">Editar</button>
      <button class="delete" id="delete">Delete</button>
    </div>
  `
  document.querySelector("#post-creat").innerHTML += postsTemplates; 

  // document.querySelector("#like").addEventListener("click", (e) => {
  //   e.preventDefault();
  //   likePost(idPost)
  
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