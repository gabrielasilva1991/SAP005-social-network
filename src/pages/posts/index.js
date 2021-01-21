import { logOut, creatPost, getPost } from "../../services/index.js";
import { showPosts } from "../../componentes/showposts.js";
import { onNavigate } from "../../utils/history.js";

export const Posts = () => {
  const rootElement = document.createElement("div");

  rootElement.innerHTML = `
    <header class="header">
      <h3 class="word">Uma casa sem livros é um corpo sem alma</h3>
      <button class="logout" id="logout"><img class="img-logout" src="img/sair.png"></button>
    </header>
    <div class="container-form">
      <form action="" class="form-post" id="form-post">
        <textarea class="text-area" id="new-post" rows="5" cols="30" placeholder=" O que você quer trocar hoje?"></textarea>
        <button type="submit" class="submit" id="submit-post">Publicar</button>
      </form>
    </div>
    <div class="container-post" id="container-post"></div>
  `;
  
  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    logOut()
    .then(()=> {
      onNavigate("/");
    })
  });

  const newPost = rootElement.querySelector("#new-post");
  getPost().then((results) => {
    results.forEach((doc) => {
      rootElement.querySelector("#container-post").appendChild(
        showPosts({
          postId: doc.id,
          userName: doc.data().userName,
          userEmail: doc.data().userEmail,
          text: doc.data().text,
          likes: doc.data().likes,
          date: doc.data().date,
        })
      );
    });
  });

  rootElement.querySelector("#submit-post").addEventListener("click", (e) => {
    e.preventDefault();
    const postCreat = rootElement.querySelector("#new-post").value;
    creatPost(postCreat).then(() => {
      (rootElement.querySelector("#container-post").innerHTML = ""),
        getPost().then((results) => {
          results.forEach((doc) => {
            rootElement.querySelector("#container-post").appendChild(
              showPosts({
                postId: doc.id,
                userName: doc.data().userName,
                userEmail: doc.data().userEmail,
                text: doc.data().text,
                likes: doc.data().likes,
                date: doc.data().date,
              })
            );
          });
        });
      newPost.value = "";
    });
  });

  return rootElement;
};
