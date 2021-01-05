import { logOut } from '../../services/index.js';
import { creatPost, loadingPost} from '../../services/index.js'

export const Posts = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <header>
      <button id='logout'>Sair</button>
    </header>
    <h1>Postagem teste</h1>
    <form action="" class="form-post" id="form-post">
      <textarea id="new-post" rows="5" cols="50" placeholder="Escreva sua publicação"></textarea>
      <button type="submit" id="submit-post">Publicar</button>
      <textarea id="post-creat" rows="5" cols="50" ></textarea>
    </form>
  `;

  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
  });



  rootElement.querySelector("#form-post").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#new-post").value;
    return creatPost()  
  });

  rootElement.querySelector("#post-creat").addEventListener("submit", (e) => {
    e.preventDefault();
    return loadingPost()  
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