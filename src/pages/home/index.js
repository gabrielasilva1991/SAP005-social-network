import { logOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Olá, mundo!</h1>
      <h2> A importância dos livros </h2>
      <p> textotextotextotextotextotextotextotextotextotexto </p>
    <nav>
      <ul>
        <li id='home'>Página Inicial</li>
        <li id='posts'>Postagens</li>
        <li id='profile'>Perfil</li>
        <li id='logout'>Sair</li>
      </ul>
    </nav>
  `;

  rootElement.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    onNavigate('/home');
  });

  rootElement.querySelector("#posts").addEventListener("click", (e) => {
    e.preventDefault();
    onNavigate('/posts');
  });

  rootElement.querySelector("#profile").addEventListener("click", (e) => {
    e.preventDefault();
    onNavigate('/profile');
  });

  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
  });

  return rootElement;
};

export const initialPage = () => {
  const aboutText = document.createElement('div');
  aboutText.innerHTML = `
   <h1>Sobre a página</h1>
   <h1>Trocas:benefícios</h1>
   <h1>Resíduos de papel de livros jogasdos fora</h1>
  `
  return profileCreated
};

export const Posts = () => {
  const postsCreated = document.createElement('div');
  postsCreated.innerHTML = `
    <h1>Postagem teste</h1>

  `;
  return postsCreated
};

export const Profile = () => {
  const profileCreated = document.createElement('div');
  profileCreated.innerHTML = `
   <h1>Profile teste</h1>
  
  `
  return profileCreated
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
