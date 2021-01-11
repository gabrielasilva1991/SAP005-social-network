import { onNavigate } from '../../utils/history.js';

//PÁGINA DE LOGIN
export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user)
    // alert('Login realizado com sucesso')
    alert(`Olá, ${firebase.auth().currentUser.displayName}`)
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
    alert(`Olá, ${document.querySelector("#name").value}`)
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
     alert(`Olá, ${firebase.auth().currentUser.displayName}`) //NÃO ESTÁ APARECENDO O NOME DO USUÁRIO: NULL
  })
  .catch(() => {
    alert('Email e/ou senha incorretos')
  });
};

export const logOut = () => {
  firebase.auth().signOut()
  .then(() => {
    history.pushState(null, null, window.location.pathname)
    alert('Desconectado')
  });
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
 
//PÁGINA DE POSTS
export const creatPost = (postInicial, likesStored) => {
  firebase.firestore().collection("posts").add({
    userName: `${firebase.auth().currentUser.displayName}`,
    userEmail: `${firebase.auth().currentUser.email}`, //(identifica o usuário que está logado)
    text: `${postInicial}`, // (uau, aqui vai o texto, minha nossa!!! innerText/innerHtml)
    likes: `${likesStored}`, // (array vazio de likes)
    // comments: [], // (array vazio de comentários)
    //date: new date(),
    //date: date.toLocaleString(),
    //time: date.getTime(),
  });
};

export const loadingPost = (postList) => {
  return firebase.firestore().collection("posts").get()
  //.orderBy("date", "desc")
};

// export const likePost = (postId) => {
//   return firebase.firestore().collection("posts").doc(postId).update({
//     likes: firebase.firestore.FieldValue.increment(1) 
//     //aumenta valor numérico, úteis para implementar contadores
//   });
// };

// export const editPost = (postId) => {
//   return firebase.firestore().collection("posts").doc(postId).update({
//     text: textArea.value
//   });
// };

export const deletePost = (postId) => {
  return firebase.firestore().collection("posts").doc(postId).delete()
};

//export const commentsPosts = (postId) => {
  //return firebase.firestore().collection("posts").doc(postId) 
//};


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