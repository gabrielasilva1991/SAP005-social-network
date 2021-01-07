import { logOut } from '../../services/index.js';
import { creatPost, loadingPost, showPosts } from '../../services/index.js'

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

  // rootElement.querySelector("#user-name").innerHTML = `${user.displayName}`
  //   checkLogin();
  // };

  rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
    e.preventDefault();
    const postInitial = rootElement.querySelector("#new-post").value;
    creatPost(postInitial)  
    const postReturn = rootElement.querySelector("#post-creat").innerHTML = postInitial;
    loadingPost(postReturn)
    const showPost = rootElement.querySelector("#post-creat").innerHTML = postReturn;
    showPosts(showPost)
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


// ${Button({type="button", class="publish", title="Publicar", onclick=savePost})}

//DANIEL

// rootElement.querySelector("#form-post").addEventListener("submit", (e) => {
//   e.preventDefault();
//   document.querySelector("#new-post").value;  
//   const post = {
//     user_id: "Gabi", //(identifica o usuário que está logado)
//     text: 'text', // (uau, aqui vai o texto, minha nossa!!!)
//     likes: 0, // (array vazio de likes)
//     comments: [], // (array vazio de comentários)
//   }

//   const postsCollection = firebase.firestore().collection("posts");

//   postsCollection.add(post)

// });

// function loadingPosts() {
//   const postsCollection = firebase.firestore().collection("posts");
//   postsCollection.get().then(mensagem => {
//     mensagem.forEach(doc => {
//       console.log(doc.data())        
//     });
//   })
// }
// loadingPosts();

// return rootElement;
