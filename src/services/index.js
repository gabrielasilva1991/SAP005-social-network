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

const saveUserUpdate = (name) => {
  console.log(firebase.auth().currentUser);
  firebase.auth().currentUser.updateProfile({
    displayName: name,
    photoURL: "../img/olho.png",
  })
  .then(() => {
    console.log("deu certo saveuserupdate"); 
  })
  .catch((error) => {
    console.log("deu ruim saveuserupdate");
    console.log(error);
  });     
};

const saveUser = (user, userEmail, userName) => {
  console.log(user.uid, userEmail, userName)
  firebase.firestore().collection("users").doc(userEmail).set({
    userId: user.uid,
    name: userName,
    email: userEmail,
  })
  .then(() => {
    console.log("deu certo save user");
  })
  .catch((error) => {
    console.log("deu ruim save user");
    console.log(error);
  });  
};

export const registerUser = (name, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userUpdate) => {
    console.log(userUpdate);
    saveUserUpdate(name)
    saveUser(userUpdate.user, email, name)
    alert("Conta criada com sucesso");
    onNavigate("/")
  })    
  .catch((error) => {
    console.log(error);
    alert("Falha ao realizar o cadastro")
  });
};

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    const user = firebase.auth().currentUser
    checkLogin(user) 
     alert("Login realizado com sucesso")
     alert(`Olá, ${firebase.auth().currentUser.displayName}`)
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
    userName: firebase.auth().currentUser.displayName,
    userEmail: firebase.auth().currentUser.email, 
    userUid: firebase.auth().currentUser.uid,
    text: postCreat, 
    likes: [],
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

// export const likePost = async(postId, userId) => {
//   const postCollection = firebase.firestore().collection('posts');
//   const arrayUserAdd = firebase.firestore.FieldValue.arrayUnion(userId);
//   const arrayUserDlt = firebase.firestore.FieldValue.arrayRemove(userId);
//   console.log(data().likes)
//   return await postCollection.doc(postId).get()
//     .then(function callBackCompareUser(doc) {
//       if (doc.data().likes.includes(userId)) {
//         postCollection.doc(postId).update({
//             likes: arrayUserAdd,
//           })
//           .catch((error) => {
//             const errorObject = new ErrorDictionary(error);
//             console.log(errorObject.translate(false));
//           });
//       } else {
//         postCollection.doc(postId).update({
//             likes: arrayUserDlt,
//           })
//           .catch((error) => {
//             const errorObject = new ErrorDictionary(error);
//             console.log(errorObject.translate(false));
//           });
//       }
// //     });
// // }

// export const likePost = (postId, userId) => {
//   return firebase.firestore().collection("posts").doc(postId).get()
//     .then((doc) => {
//       let postLikesArray = doc.data().likes || [];

//       if (posts.likes.indexOf(userId) != -1) {
//         likes.splice(likes.indexOf(userId), 1);

//       } else {
//         likes.push(userId)
//       }
//       return firebase.firestore().collection('posts').doc(postId)
//         .update({
//           likes: likes
//         });
//   });
// };

export const likePost = async(idPost) => {
  return await firebase.firestore().collection("posts").doc(idPost).update({
    likes: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid)
  })
};

export const disLikePost = async(idPost) => {
  return await firebase.firestore().collection("posts").doc(idPost).update({
    likes: firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.uid)
  })
};

export const deletePost = (postId) => {
  return firebase.firestore().collection("posts").doc(postId).delete()
};

export const editPost = (id, editedPost) => {
  return firebase.firestore().collection("posts").doc(id).update({
    text: editedPost
  })
  .then(() => true)
  .catch((error) => error);
};