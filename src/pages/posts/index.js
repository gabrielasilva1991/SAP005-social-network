import { logOut, creatPost, getPost, likePost, deletePost } from '../../services/index.js'

export const Posts = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <header>
      <button id='logout'>Sair</button>
    </header>
    <h1>Postagens</h1>
    <form action="" class="form-post" id="form-post">
      <textarea id="new-post" rows="5" cols="50" placeholder="Escreva sua publicação"></textarea>
      <button type="submit" id="submit-post">Publicar</button>
    </form>
    <div id="container-post"></div>
  `;
    
  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
  });

  const newPost = rootElement.querySelector("#new-post")
  newPost.onload = getPost(showPosts);

  rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
    e.preventDefault();
    const postCreat = rootElement.querySelector("#new-post").value;
    creatPost(postCreat)
    getPost(showPosts)
    newPost.value = "",
    rootElement.querySelector("#container-post").innerHTML= "";
  });
    
  return rootElement;
};

const showPosts = (posts) => {
  console.log(posts)

  const postCreat = document.querySelector("#container-post")
  
  postCreat.innerHTML += `
    <div class="post-individual" id="${posts.postId}">

      <div class="post-name>
        <h2 class="user-name" id="${posts.userName}"></h2>
        <img src="teste.jpeg">
      </div>

      <div class="post-text">
        <textarea class="post-area" ${posts.id}>${posts.text}</textarea>
        <p id="show-date">${posts.date} </p> 
        <p id="show-like" >${posts.likes}</p>
      </div>

      <div class="post-edit">
        
      </div>

      <div class="button">

        <button class="like" data-like="${posts.postId}">Curtir</button>
        <button class="edit" data-edit="${posts.postId}">Editar</button>
        <button class="delete" data-id="${posts.postId}">Deletar</button>
      </div>


    </div>  
  `
  
  postCreat.querySelectorAll(".like").forEach((e)=> {
    e.addEventListener("click", (e) => {
      e.target.parentNode.querySelector(".like") // e.target pega o elemento que cliquei
      //parent aplica para todos os delete da pagina
      likePost(posts.postId)
    });
  }) 

  // const btnLike = document.querySelectorAll(".like");

  // btnLike.forEach((btn)=> {
  //   btn.addEventListener("click", (e) => {
  //     executeLike(e)
  //   });
  // }) 

  // const executeLike = (e) => {
  //   likePost().then(() => {
  //     e.target.classList.add('liked');
  //     console.log("curtiu")
  //   })
  //   .catch(() => {
  //     alert("Tente curtir novamente")
  //   });
  // }



  postCreat.querySelectorAll(".delete").forEach((e)=> {
    e.addEventListener("click", (e) => {
      e.target.parentNode.querySelector(".delete") // e.target pega o elemento que cliquei  
      //parent aplica para todos os delete da pagina // sempre volta a uma casa anteriror(div)
      deletePost(posts.postId)
    });
  }) 

  // const btnDelete = document.querySelectorAll(".delete");

  // btnDelete.forEach((btn)=> {
  //   btn.addEventListener("click", (e) => {
  //     executeDelete(e)
  //   });
  // }) 

  // const executeDelete = (e) => {
  //   deletePost().then(() => {
  //     console.log("deletou")
  //   })
  //   .catch(() => {
  //     alert("Tente deletar novamente")
  //   });
  // }
 
};




// export const Posts = () => {
//   const rootElement = document.createElement('div');
//   rootElement.innerHTML = `
//     <header>
//       <button id='logout'>Sair</button>
//     </header>
//     <h1 class="user-name" id="user-name">Postagens</h1>
//     <form action="" class="form-post" id="form-post">
//       <textarea id="new-post" rows="5" cols="50" placeholder="Escreva sua publicação"></textarea>
//       <button type="submit" id="submit-post">Publicar</button>
//     </form>
//     <div id="post-creat"></div>
//   `;
    
//   rootElement.querySelector("#logout").addEventListener("click", (e) => {
//     e.preventDefault();
//     return logOut();
//   });

//   const loadPost = () => {
//     loadingPost().then(results => {
           
//       document.querySelector("#post-creat").innerHTML= "",

//       results.forEach(doc => {
//         showPosts({
//           //date: doc.data().date.toDate().toLocaleString('pt-BR'),
//           postId: doc.id,
//           userName: doc.data().userName,
//           userEmail: doc.data().userEmail,
//           text: doc.data().text,
//           likes: doc.data().likes,
//           //comments: doc.data().comments,
//           date: doc.data().date,
//           //time: data.getTime(),
//           //date: `${data.toLocaleDateString()} ${data.getHours()}:${data.getMinutes()}`,
//         });
//       });

//       //cardPost.appendChild(div)
//     });

//   };

//   rootElement.querySelector("#new-post").onload = loadPost();

//   rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
//     e.preventDefault();
//     const postInitial = rootElement.querySelector("#new-post").value;
//     creatPost(postInitial)
//     document.querySelector("#post-creat").innerHTML= "Carregando..."
//     loadPost()
//   });
    
//   return rootElement;
// };

// const showPosts = (posts) => {
//   console.log(posts)

//   const postCreat = document.querySelector("#post-creat")
  

//   const postsTemplates = `
//     <div class="post-individual" id="${posts.postId}">
//       <p>${posts.userName}</p>
//       <p>${posts.date}</p>
//       <p>${posts.text}</p>
//       <p>${posts.likes}</p>
//       <p>${posts.date}</p>

//       <button class="like" data-like="${posts.postId}">Curtir</button>
//       <button class="edit" data-edit="${posts.postId}">Editar</button>
//       <button class="delete" data-id="${posts.postId}">Deletar</button>
//     </div>
//   `
//   postCreat.innerHTML += postsTemplates; 



//FUNCIONA
// postCreat.querySelectorAll(".like").forEach((e)=> {
//   e.addEventListener("click", (e) => {
//     e.target.parentNode.querySelector(".like") // e.target pega o elemento que cliquei
//     //parent aplica para todos os delete da pagina
//     likePost(posts.postId)
//   });
// }) 

//FUNCIONA
//   postCreat.querySelectorAll(".delete").forEach((e)=> {
//     e.addEventListener("click", (e) => {
//       e.target.parentNode.querySelector(".delete") // e.target pega o elemento que cliquei  
//       //parent aplica para todos os delete da pagina // sempre volta a uma casa anteriror(div)
//       deletePost(posts.postId)
//     });
//   }) 



// postCreat.querySelectorAll("#likes").forEach((e)=> {
//   e.addEventListener("click", (e) => {
//     const btnlike = e.target.parentNode.querySelector("#likes"); 
//     //e.target.parentNode.querySelector("#likes") 
//     //parent aplica para todos os delete da pagina
//     likePost(btnlike.dataset.postId)
//     loadingPost()
//     onNavigate('/posts')
//   });
// }) 

// postCreat.querySelectorAll(".delete").forEach((e)=> {
//   e.addEventListener("click", (e) => {
//     const btnDelete = e.target.parentNode.querySelector(".delete"); 
//     //e.target.parentNode.querySelector("#delete") 
//     //parent aplica para todos os delete da pagina
//     deletePost(btnDelete.dataset.postId)
//     loadingPost()
//     onNavigate('/posts')
//   });
// }) 


//OFICINA EVE

//   const btnLike = document.querySelectorAll(".like");

//   btnLike.forEach((btn)=> {
//     btn.addEventListener("click", (e) => {
//       executeLike(e)
//     });
//   }) 

//   const executeLike = (e) => {
//     likePost().then(() => {
//       e.target.classList.add('liked');
//       console.log("curtiu")
//     })
//     .catch(() => {
//       alert("Tente curtir novamente")
//     });
//   }



//   const btnDelete = document.querySelectorAll(".delete");

//   btnDelete.forEach((btn)=> {
//     btn.addEventListener("click", (e) => {
//       executeDelete(e)
//     });
//   }) 

//   // const executeDelete = (e) => {
//   //   deletePost().then(() => {
//   //     console.log("deletou")
//   //   })
//   //   .catch(() => {
//   //     alert("Tente deletar novamente")
//   //   });
//   // }
  
// };



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