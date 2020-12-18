export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .catch((error) => {
    alert("Você não conectou com o Google, tente novamente")
  });
};

export const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(()=> {
    alert("Conta criada com sucesso")
  })
  .catch((error) => {
    alert("Falha ao realizar o cadastro")
  });
};

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    alert("Login realizado com sucesso")
  })
  .catch((error) => {
    alert("Email ou senha incorretos")
  });
};

export const logOut = () => {
  firebase.auth().signOut()
  .then(() => {
    history.pushState("",document.title, window.location.pathname)})
    alert("Desconectado")
  // .catch((error) => {
  //   alert("Ocorreu um erro, tente novamente")
  // });
};







// let authEmailPassButton = document.getElementById('button-login')
// let authGoogleButton = document.getElementById('button-login-google')
// let logoutButton = document.getElementById('')

// let emailInput = document.getElementById('email')
// let passwordInput = document.getElementById('password')

// let displayName = document.getElementById('display-Name')

// authEmailPassButton.addEventListener('click', function(){
//   firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value)
//     .then(function (result){
//       console.log(result);
//       displayName.innerText = 'Bem vindo, ' + emailInput.value;
//       alert('Autenticado ' + emailInput.value);
//     })
//     .catch(function(error){
//       console.error(error.code);
//       console.error(error.message);
//       alert('Falha ao realizar o login')
//     });
// });

// logoutButton.addEventListener('click', function(){
//   firebase.auth().signOut()
//     .then(function (){
//       displayName.innerText = 'Você não está autenticado';
//       alert('Desconectado');
//     })
//     .catch(function(error){
//       console.error(error);
//     });
// });



// authGoogleButton.addEventListener('clink', function (){
//   // let provider = new firebase.auth.GoogleAuthProvider();
//   // signIn(provider)

//   let provider = new firebase.auth.GoogleAuthProvider();


//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     let token = result.credential.accessToken;
//     let user = result.user;
//   })
//   .catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     var email = error.email;
//     var credential = error.credential;
//   }) 
// });








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