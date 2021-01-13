import { onNavigate } from '../../utils/history.js';

//PÁGINA DE LOGIN
export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user)
    alert(`Olá, ${firebase.auth().currentUser.displayName}`)
  })
  .catch(() => {
    alert("Você não conectou com o Google, tente novamente")
  });
};


export const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user)
    alert("Conta criada com sucesso")
    alert(`Olá, ${document.querySelector("#name").value}`)
  })
  .catch(() => {
    alert("Falha ao realizar o cadastro")
  });
};

// export const userId = () => {
//   return firebase.auth().currentUser.uid;
// };

// export const userUpdate = (userName, userEmail) => {
//   firebase.firestore().collection("users").add({
//     name: userName,
//     email: userEmail,
//   })
// };

// export const getUserUpdate = () => {
//   return firebase.firestore().collection('users').get()
// };

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user) 
     alert("Login realizado com sucesso")
     //alert(`Olá, ${firebase.auth().currentUser.displayName}`) //NÃO ESTÁ APARECENDO O NOME DO USUÁRIO: NULL
  })
  .catch(() => {
    alert("Email e/ou senha incorretos")
  });
};

export const logOut = () => {
  firebase.auth().signOut()
};

const checkLogin = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      onNavigate("/posts")
    } else {
      onNavigate("/")
    }
  });
};
 
//PÁGINA DE POSTS
export const creatPost = (postCreat) => {
  firebase.firestore().collection("posts").add({
    userName: firebase.auth().currentUser,
    userEmail: firebase.auth().currentUser.email, 
    text: postCreat, 
    likes: 0,
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
      });
    });
  })
};

export const likePost = (postId) => {
  return firebase.firestore().collection("posts").doc(postId).update({
    likes: firebase.firestore.FieldValue.increment(1)
  });
};

export const deletePost = (postId) => {
  return firebase.firestore().collection("posts").doc(postId).delete()
};

// export const editPost = (postId) => {
//   return firebase.firestore().collection("posts").doc(postId).update({
//     text: textArea.value
//   });
// };