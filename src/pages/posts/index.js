
export const Posts = () => {
  const postsCreated = document.createElement('div');
  postsCreated.innerHTML = `
    <h1>Postagem teste</h1>

  `;
  return postsCreated
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
