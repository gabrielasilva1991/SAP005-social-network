import { logOut } from '../../services/index.js';

export const Posts = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <header>
      <button id='logout'>Sair</button>
    </header>
    <h1>Postagem teste</h1>
    <input id='newPost' placeholder='Escreva seu post'/>

`;

rootElement.querySelector("#logout").addEventListener("click", (e) => {
  e.preventDefault();
  return logOut();
});

  return rootElement;
};

//import { getPosts, createPost } from '../../services/index.js'

// export const Home = () => {
//   // Coloque sua página
//   const rootElement = document.createElement('div');

//   const showPosts = () => {
//     const posts = getPosts()
//     let element = ''
  
//     posts.map(post => {
//       element += `
//         <p>${post.message} </p>
//       `;
//     })

//     rootElement.innerHTML = element
//   }
//   document.querySelector('button').addEventListener('click', () =>{
//     createPost('Post')
//     showPosts()
//   })
  
//   //showPosts() 
//   return rootElement;
// }
