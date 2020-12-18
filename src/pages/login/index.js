export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <h1>A Menina que Trocava Livros</h1>
    <form class="container-web">
      <div class="items">
        <input type="email" class="input-login" id="email" placeholder ="E-mail"/>
        <input type="password" class="input-login" id="password" placeholder="Senha"/>
      </div>
      <div>
        <button type="submit" class="button-login" id="button-login">Entrar</button>
        <button type="submit" class="button-create-account" id="button-create-account">Criar Conta</button>
        <button class="button-google" id="button-google"><i class="fa fa-google" aria-hidden="true"></i></button>
      </div>
      <script type="module" src="./register/index.js"></script>
    </form>
    <div class="container-logo">
    <img class="logo" src="img/livro.png" <a href="https://www.flaticon.com/br/autor" alt="Logo">
    </div> 
  `;

  rootElement.querySelector("#button-login").addEventListener("click", () => {
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    return signIn(email, password);
  });

  rootElement.querySelector("#button-google").addEventListener("click", () => {
    return loginWithGoogle();
  });

  rootElement.querySelector("#button-create-account").addEventListener("click", () => {
    return Register();
  }); 
  
  return rootElement;
};


let createUserButton = document.getElementById('button-register')
let authEmailPassButton = document.getElementById('button-login')
let authGoogleButton = document.getElementById('button-login-google')
let logoutButton = document.getElementById('')


let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')

let displayName = document.getElementById('display-Name')


createUserButton.addEventListener('click', function(){
  firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function (){
      alert('Bem vindo ' + emailInput.value);
    })
    .catch(function(error){
      console.error(error.code);
      console.error(error.message);
      alert('Falha ao realizar o cadastro')
    });
});

authEmailPassButton.addEventListener('click', function(){
  firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function (result){
      console.log(result);
      displayName.innerText = 'Bem vindo, ' + emailInput.value;
      alert('Autenticado ' + emailInput.value);
    })
    .catch(function(error){
      console.error(error.code);
      console.error(error.message);
      alert('Falha ao realizar o login')
    });
});

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



authGoogleButton.addEventListener('clink', function (){
  // let provider = new firebase.auth.GoogleAuthProvider();
  // signIn(provider)

  let provider = new firebase.auth.GoogleAuthProvider();


  firebase.auth().signInWithPopup(provider).then(function(result) {
    let token = result.credential.accessToken;
    let user = result.user;
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  }) 
});




// function loginConfig () {
//   return {
//     signInFlow: "popup",
//     signInSucess: "#",
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ]
//   }
// }