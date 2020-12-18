export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
      <h1>Olá, mundo!</h1>
      <h2> A importância dos livros </h2>
      <p> textotextotextotextotextotextotextotextotextotexto </p>
  `;
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
  const logoutlogin = document.createElement('div');

  logoutlogin.innerHTML = `
    <h1>Sair teste</h1>

  `
  return logoutlogin
 
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
