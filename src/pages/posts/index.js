import { logOut, showPosts } from '../../services/index.js';
import { creatPost, loadingPost } from '../../services/index.js'

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

    <div id="post-creat" ></div>
  `;

  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
  });
  
  rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
    e.preventDefault();
    const postInitial = rootElement.querySelector("#new-post").value;
    creatPost(postInitial)  
    loadingPost().then(results => {
      document.querySelector("#post-creat").innerHTML= "";
      console.log(results)
      results.docs.map(doc => {
        showPosts({      
          id: doc.id,
          userId: doc.data().userId,
          text: doc.data().text,
          likes: doc.data().likes,
          comments: doc.data().comments,
        });
      });   
    });  
    console.log(loadingPost) 
  });
  return rootElement;
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