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

export const creatPost = (postInicial) => {
  firebase.firestore().collection("posts").add({
    user_id: `${firebase.auth().currentUser.email}`, //(identifica o usuário que está logado)
    text: `${postInicial}`, // (uau, aqui vai o texto, minha nossa!!! innerText/innerHtml)
    likes: [], // (array vazio de likes)
    comments: [], // (array vazio de comentários)
  });
};


export const loadingPost = () => {
  firebase.firestore().collection("posts").get() // (eu tenho uma coleção. get= vai lá no banco de dados e me trás esses dados)
  .then(snap => { // (quando os dados chegarem, serão jogados na variavel snap e me retornar uma função)
    snap.forEach(doc => {
     const id = doc.id
     const userId = doc.data().user_id
     const text = doc.data().text
     const likes = doc.data().likes
     const comments = doc.data().comments
     return showPosts(id, userId, text, likes, comments)    
    });
  })
};

export const showPosts = (id, userId, text, likes, comments) => {
  //console.log(id, userId, text, likes, comments )
  const posts = `
    <p id="${id}>
      ${text} ${userId} ❤️${likes} ${comments}
    </p>
  `
  return posts;
  
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
