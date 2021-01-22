export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const saveUserUpdate = (name) => {
  firebase.auth().currentUser.updateProfile({
    displayName: name,
  })
    .then(() => true)
    .catch((error) => error);
};

export const saveUser = (user, userEmail, userName) => {
  firebase.firestore().collection('users').doc(userEmail).set({
    userId: user.uid,
    name: userName,
    email: userEmail,
  })
    .then(() => true)
    .catch((error) => error);
};

export const registerUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const logOut = () => firebase.auth().signOut();

export const checkLogin = () => {
  return firebase.auth().onAuthStateChanged((user) => {
    return user;
  });
};

export const creatPost = (postCreat) => {
  return firebase.firestore().collection('posts').add({
    userName: firebase.auth().currentUser.displayName,
    userEmail: firebase.auth().currentUser.email,
    userUid: firebase.auth().currentUser.uid,
    text: postCreat,
    likes: [],
    date: new Date().toLocaleString(),
  });
};

export const getPost = () => {
  return firebase.firestore().collection('posts').orderBy('date', 'desc').get();
};

export const likePost = (idPost) => {
  return firebase.firestore().collection('posts').doc(idPost).update({
    likes: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid),
  });
};

export const disLikePost = (idPost) => {
  return firebase.firestore().collection('posts').doc(idPost).update({
    likes: firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.uid),
  });
};

export const deletePost = (postId) => {
  return firebase.firestore().collection('posts').doc(postId).delete();
};

export const editPost = (id, editedPost) => {
  return firebase.firestore().collection('posts').doc(id).update({
    text: editedPost,
  })
    .then(() => true)
    .catch((error) => error);
};
