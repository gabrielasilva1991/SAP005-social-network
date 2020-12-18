import { logOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
      <h1>Olá, mundo!</h1>
      <h2> A importância dos livros </h2>
      <p> textotextotextotextotextotextotextotextotextotexto </p>

      <nav>
      <ul>
        <li id='home'>Página Inicial</li>
        <li id='login'>Login</li>
        <li id='posts'>Postagens</li>
        <li id='profile'>Perfil</li>
        <li id='logout'>Sair</li>
      </ul>
    </nav>

    <button type="submit" class="button-logout" id="button-logout">Sair</button>
  `;

  rootElement.querySelector("#button-logout").addEventListener("click", (e) => {
    e.preventDefault();
    onNavigate('/')
    return logOut();
  });

  return rootElement;
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


export const Logout = () => {
  const logoutLogin = document.createElement('div');

  logoutLogin.innerHTML = `
    <h1>Sair teste</h1>

  `
  return logoutLogin
 
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
