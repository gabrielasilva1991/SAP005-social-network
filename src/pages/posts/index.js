import { logOut, creatPost, loadingPost, deletePost } from '../../services/index.js'

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
      let cardPost = document.querySelector("#post-creat")
      cardPost.innerHTML= "";
      
      const div = document.createElement("div")
      div.classList.add("post-creat")
      
      results.forEach(doc => {
        showPosts({
          //date: doc.data().date.toDate().toLocaleString('pt-BR'),
          postId: doc.id,
          userName: doc.data().userName,
          userEmail: doc.data().userEmail,
          text: doc.data().text,
          likes: doc.data().likes,
          // comments: doc.data().comments,
          date: doc.data().date,
          //time: data.getTime(),
          //dataString: `${data.toLocaleDateString()} ${data.getHours()}:${data.getMinutes()}`,
        });
      });

      //cardPost.appendChild(div)
    });
  };

  rootElement.querySelector("#new-post").onload = loadPost();

  rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
    e.preventDefault();
    const postInitial = rootElement.querySelector("#new-post").value;
    creatPost(postInitial)
    document.querySelector("#post-creat").innerHTML= "Carregando..."
    loadPost()
  });
    
  return rootElement;
};

const showPosts = (posts) => {

  const postCreat = document.querySelector("#post-creat")
  

  const postsTemplates = `
    <div id="${posts.id}">
      <p>${posts.userName}</p>
      <p>${posts.date}</p>
      <p>${posts.text}</p>
      <p>${posts.likes}</p>
      

      <button class="likes" id="likes">Curtir</button>
      <button class="edit" id="edit">Editar</button>
      <button class="delete" id="delete" div-id=${posts.id}>Deletar</button>
    </div>
  `
  postCreat.innerHTML += postsTemplates; 

  postCreat.querySelectorAll("#delete").forEach((e)=> {
    e.addEventListener("click", (e) => {
      e.target.parentNode.querySelector("#delete"); 
      //e.target.parentNode.querySelector("#delete") 
      //parent aplica para todos os delete da pagina
      deletePost(posts.postId)
      loadingPost()
    });
  })
};

// postCreat.querySelector("#edit").forEach((e) => {
//   e.addEventListener("click", (e) => {
//     e.target.dataset.id

// })

// const btnLike = document.querySelector("#likes");
  // btnLike.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   likePost(posts)
  // });
 

  













// feedArea.addEventListener('click', (event) => {
//   const closestEditar = event.target.closest(btnEditar);
//   if (closestEditar && feedArea.contains(closestEditar)) {
//     const closestTextarea = closestEditar.parentNode.querySelector('.editar-post');
//     closestTextarea.style.display = 'block';
//     const closestBtnSalvarEdicao = closestEditar.parentNode.querySelector('.btn-salvar-editado');
//     closestBtnSalvarEdicao.style.display = 'block';

//     closestBtnSalvarEdicao.addEventListener('click', () => {
//       closestTextarea.style.display = 'none';
//       closestBtnSalvarEdicao.style.display = 'none';
//       const closestPost = closestEditar.parentNode.querySelector('.texto-post');
//       const postFinal = closestTextarea.value;
//       closestPost.innerHTML = postFinal;
//       const closestId = closestEditar.parentNode.querySelector('.id-escondido').innerText;




// const editPost = (e) => {
//   const postId = e.target.dataset.id;
//   e.target.disabled = true;
//   const postContent = document
//     .getElementById(postId)
//     .querySelector('.post-content');
//   postContent.innerHTML = ` 
//   ${window.textarea.component({
//     class: 'edit-textarea',
//     text: postContent.innerHTML
//   })}
//   ${window.button.component({
//     dataId: postId,
//     id: 'edit-button',
//     class: 'oval-button ',
//     title: 'Salvar',
//     call: window.home.saveEdit
//   })} `;
// }

// function editPost(event) {
//   const id = event.target.dataset.id;
//   document.getElementById('post_' + id).contentEditable = true;
//   document.getElementById('post_' + id).style.border = '1px solid black';
//   document.querySelector('#edit-' + id).innerHTML = '✔️';
//   document.querySelector('#edit-' + id).addEventListener('click', window.feed.saveEdit);
// }

// function saveEdit() {
//   const id = event.target.dataset.id;
//   document.getElementById('post_' + id).contentEditable = false;
//   document.getElementById('post_' + id).style.border = '';
//   document.querySelector('#edit-' + id).innerHTML = '✏️';
//   const text = document.querySelector('#post_' + id).textContent;
//   const timestamp = new Date().toLocaleDateString('pt-BR') + ' - ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
//   firebase.firestore().collection('posts').doc(id).update({ text, timestamp });
//   document.querySelector('#edit-' + id).removeEventListener('click', window.feed.saveEdit);

  // const likesStored = rootElement.querySelector("#like").value;

 

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