import { onNavigate } from '../../utils/history.js';
//PÁGINA DE LOGIN
export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user)
    alert('Login realizado com sucesso')
  })
  .catch(() => {
    alert('Você não conectou com o Google, tente novamente')
  });
};

export const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user)
    alert('Conta criada com sucesso')
  })
  .catch(() => {
    alert('Falha ao realizar o cadastro')
  });
};

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user)
    alert('Login realizado com sucesso')
  })
  .catch(() => {
    alert('Email e/ou senha incorretos')
  });
};

export const logOut = () => {
  firebase.auth().signOut()
  .then(() => {
    history.pushState(null, null, window.location.pathname)})
    alert('Desconectado')
};

export const checkLogin = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      onNavigate('/posts')
    } else {
      onNavigate('/')
    }
  });
};

export const creatPost = (postInitial) => {
  firebase.firestore().collection("posts").add({
    userId: `${firebase.auth().currentUser.email}`, //(identifica o usuário que está logado)
    text: `${postInitial}`, // (uau, aqui vai o texto, minha nossa!!! innerText/innerHtml)
    likes: [], // (array vazio de likes)
    comments: [], // (array vazio de comentários)
  });
};


// export const loadingPost = () => {
//   firebase.firestore().collection("posts").get() // (eu tenho uma coleção. get= vai lá no banco de dados e me trás esses dados)
//   .then(snap => { // (quando os dados chegarem, serão jogados na variavel snap e me retornar uma função)
//     snap.forEach(doc => {
//      //console.log(doc)
//      const id = doc.id
//      const userId = doc.data().userId
//      const text = doc.data().text
//      const likes = doc.data().likes
//      const comments = doc.data().comments
//      //const postLoading = doc.data()
//      //return showPosts(id, userId, text, likes, comments)
//      const test = showPosts(id, userId, text, likes, comments)    
//      console.log(test)  
//     });
//   })
// };

export const loadingPost = () => {
  const postsA = [];
  firebase.firestore().collection("posts")
  .onSnapshot(snap => { 
    snap.forEach(doc => {
      const id = doc.id
      const userId = doc.data().userId
      const text = doc.data().text
      const likes = doc.data().likes
      const comments = doc.data().comments
      const postUnic = {id, userId, text, likes, comments}
      postsA.push(postUnic)
      //console.log("Current data: ", doc.data());
      //const test = showPosts(id, userId, text, likes, comments)
      //console.log(test)
    });
    return postsA
  });
  return postsA
}

export const showPosts = (posts) => {
  console.log(posts)
  const postReturn = "";
  posts.map(post => {
    console.log(post)
    postReturn += `
    <p id="${post.id} ></p>
    <p ${post.userId} ></p>
    <p ${post.text} ></p>   
    <p ❤️${post.likes} ></p>
    <p ${post.comments} ></p>
  `
  console.log(postReturn)
  return postReturn
  })
  
  // const postIndividual = `
  //  <p id="${id} ></p>
  //  <p ${userId} ></p>
  //  <p ${text} ></p>   
  //  <p ❤️${likes} ></p>
  //  <p ${comments} ></p>
    
  // `
  //return posts;
  
}

export const deletePost = () => {
  firebase.firestore().collection("posts")
  .then(doc => {
    doc.delete()
    console.log("Post excluido com sucesso!");
  }).catch((error) => {
    console.error("Erro ao remover post", error);
  })
  loadingPost()
}






//PÁGINA DE POSTS ISA

// const posts = [
//   {message: 'Post 1'},
//   {message: 'Post 2'},
//   {message: 'Post 3'}
// ]
// export const getPosts = () => {
//   //alterar para o get do firebase
//   return posts
// }

// export const createPost = (post) => {
//   //alterar parao add do firebase
//   posts.push ({
//     message: `${post} ${posts.length + 1}`
//   })
// }


//FIREBASE FIRESTORE

// export const savePost = () => {
//   firebase.firestore().collection('post').add({
//     user_id: firebase.auth().currentUser.id,
//     text: ''.value, 
//     likes: [], 
//     comments: [],
//   });
// };
