import { logOut } from '../../services/index.js';
//import { getPosts, createPost} from '../../services/index.js'

export const Posts = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <header>
      <button id='logout'>Sair</button>
    </header>
    <h1>Postagem teste</h1>
    <form>
      <textarea id='newPost' rows="5" cols="50" placeholder='Escreva sua publicação'></textarea>
      <button id='submit-post'>Publicar</button>
    </form>
  `;

  rootElement.querySelector("#submit-post").addEventListener('click', (e) =>{
  e.preventDefault();
    createPost('Post')
    // showPosts()
    console.log(createPost)
  });

  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
  });

  return rootElement;
};

const showPosts = () => {
  const rootElement = document.createElement('div');
  const posts = getPosts()
  let element = ''

  posts.map(post => {
    element += `
      <p>${post.message} </p>
    `;
  });

  rootElement.innerHTML = element
  showPosts() 
};


// ${Button({type="button", class="publish", title="Publicar", onclick=savePost})}