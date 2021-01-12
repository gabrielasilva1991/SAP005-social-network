import { onNavigate } from '../../utils/history.js';

//PÁGINA DE LOGIN
export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user)
    //alert('Login realizado com sucesso')
    alert (`Olá ${firebase.auth().currentUser.displayName}`)
  })
  .catch(() => {
    alert('Você não conectou com o Google, tente novamente')
  });
};

export const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    const userName = firebase.auth().currentUser  
    users.userName.updateProfile({ displayName: userName })

    checkLogin(user)
    alert('Conta criada com sucesso')
    alert(`Olá, ${document.querySelector("#userRegister").value}`) //NÃO ESTÁ APARECENDO O NOME DO USUÁRIO: NULL
  })
  .catch(() => {
    alert('Falha ao realizar o cadastro')
  });
};

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    const user = firebase.auth().currentUser //`${}`
    checkLogin(user)
    alert('Login realizado com sucesso')
    alert (`Olá ${firebase.auth().currentUser.displayName}`) //NÃO ESTÁ APARECENDO O NOME DO USUÁRIO: NULL
  })
  .catch(() => {
    alert('Email e/ou senha incorretos')
  });
};

export const logOut = () => {
  firebase.auth().signOut()
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
export const creatPost = (postInitial) => {
  // const x = firebase.auth().currentUser
  // console.log(x)
  firebase.firestore().collection("posts").add({
    userName: `${firebase.auth().currentUser.displayName}`,
    userEmail: `${firebase.auth().currentUser.email}`, //identifica o usuário que está logado
    text: postInitial, // aqui vai o texto
    likes: [],
    //comments: [], // (array vazio de comentários)
    date: new Date().toLocaleString(),
  });
};


export const getPost = (showPosts) => {
  return firebase.firestore().collection("posts").orderBy("date", "desc").get()
  .then(results => {
    results.forEach(doc => {
      showPosts({
        postId: doc.id,
        userName: doc.data().userName,
        userEmail: doc.data().userEmail,
        text: doc.data().text,
        likes: doc.data().likes,
        date: doc.data().date,
        // comments: doc.data().comments,
      });
    });
  })
};

export const likePost = (postsId) => {
  return firebase.firestore().collection("posts").doc(postsId).update({
    likes: firebase.firestore.FieldValue.increment(1) 
    //aumenta valor numérico, úteis para implementar contadores
  })
};

// export const likePost = (postsId) => {
//   return firebase.firestore().collection("posts").doc(postsId).update({
//     likes: likes.includes(postsId)
//     //aumenta valor numérico, úteis para implementar contadores
//   })
// };



// const firestore = firebase.firestore();
// const collection = firestore.collection('posts');

// export const likePost = () => {
//   return collection.add({
//     liked: true, //firebase.firestore.FieldValue.increment(1)
//   })
//   .then(() => {
//     console.log("Deu certo")
//     return Promise.resolve(true);
//   })
//   .catch((error) => {
//     console.log("Deu ruim")
//     return Promise.reject(error);
//   })
// }



export const deletePost = (postId) => {
 return firebase.firestore().collection("posts").doc(postId).delete()
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