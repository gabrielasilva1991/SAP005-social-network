import { logOut, creatPost, getPost } from "../../services/index.js";
import { showPosts } from "../../componentes/showposts.js";

export const Posts = () => {
  const rootElement = document.createElement("div");
  rootElement.innerHTML = `
    <header>
      <button id="logout">Sair</button>
    </header>
    <h1 class="user-name" id="user-name">Postagens</h1>
    <form action="" class="form-post" id="form-post">
      <textarea id="new-post" rows="5" cols="50" placeholder="Escreva sua publicação"></textarea>
      <button type="submit" id="submit-post">Publicar</button>
    </form>
    <div class="container-post" id="container-post"></div>
  `;

  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
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
