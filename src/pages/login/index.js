import { signIn, loginWithGoogle } from '../../services/index.js';
import { Register } from '../register/index.js';

export const Login = () => {
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

//function loginConfig () {
  //return {
    //signInFlow: "popup",
    //signInSucess: "#",
    //signInOptions: [
      //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //]
  //}
//}