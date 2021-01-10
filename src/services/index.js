import { onNavigate } from '../../utils/history.js';

//PÁGINA DE LOGIN
export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user)
    //alert('Login realizado com sucesso')
    //alert (`Olá ${firebase.auth().currentUser.displayName}`)
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
    //alert('Login realizado com sucesso')
    //alert (`Olá ${firebase.auth().currentUser.displayName}`)
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
export const creatPost = (postInicial) => {
  firebase.firestore().collection("posts").add({
    userName: `${firebase.auth().currentUser.displayName}`,
    userEmail: `${firebase.auth().currentUser.email}`, //identifica o usuário que está logado
    text: postInicial, // aqui vai o texto
    likes: [], 
    comments: [], // (array vazio de comentários)
    //date: date.toLocaleString(),
    //time: date.getTime(),
  });
};

export const loadingPost = () => {
  return firebase.firestore().collection("posts").get()
}

// export const loadingPost = () => {
//   const getPosts = firebase
//   .firestore().collection("posts").orderBy("date", "desc")
//   return getPosts.get()

//   //.orderBy("time", "desc")
//   //orderBy especificar a ordem de classificação dos dados
// };


// export const likePost = () => {
//   return firebase.firestore().collection("post").doc(id) 
// };

export const likePost = (id) => {
  firebase.firestore().collection("posts").doc(id).update({
    likes: firebase.firestore.FieldValue.increment(1) 
    //aumenta valor numérico, úteis para implementar contadores
  })
}

export const deletePost = (postId) => {
 firebase.firestore().collection("posts").doc(postId).delete()
};



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

//var updateTimestamp = docRef.update({
  //timestamp: firebase.firestore.FieldValue.serverTimestamp()
//configura um campo no documento como um carimbo de data/hora do servidor 
//que detecta quando o servidor recebe a atualização.