import { loginWithGoogle, signIn } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  const rootElement = document.createElement("div");
  rootElement.innerHTML = `
    <div class="container"
      <div>
        <form class="container-login">
          <h1 class="title">A Menina que Trocava Livros</h1>              
          <input type="email" class="input-login" id="e-mail" placeholder ="E-mail"/>
          <input type="password" class="input-login" id="my-password" placeholder="Senha"/>       
          <button type="submit" class="button-login" id="button-login">Entrar</button>
          <button type="submit" class="button-create-account" id="button-create-account">Criar Conta</button>
          <button class="button-google" id="button-google"><img id="img-google" src="img/google.png" alt="img-google"></button>
          <label class="google" >Entrar com o Google</label>
          <script type="module" src="./register/index.js"></script>
        </form>

        <img class="container-logo" src="img/livro.png" <a href="https://www.flaticon.com/br/autor" alt="Logo">

      </div>
    </div>

    <footer>
    <ul class="footer">
      <a href="https://github.com/BiancaSherika" target="_blank"><strong>@Bianca Sherika</strong></a>
      <a href="https://github.com/ly-cardozo" target="_blank"><strong>@Eliane Cardozo</strong></a>
      <a href="https://github.com/gabrielasilva1991" target="_blank"><strong>@Gabriela Silva</strong></a>
      <a href="https://www.laboratoria.la/" target="_blank"><strong>by Laboratória</strong></a>
    </ul>
    </footer>
    `;
  
  rootElement.querySelector("#button-login").addEventListener("click", (e) => {
    const email = rootElement.querySelector("#e-mail").value;
    const password = rootElement.querySelector("#my-password").value;
    e.preventDefault();
    return signIn(email, password);
  });

  rootElement.querySelector("#button-google").addEventListener("click", (e) => {
    e.preventDefault();
    return loginWithGoogle();
  });

  rootElement.querySelector("#button-create-account").addEventListener("click", (e) => {
    e.preventDefault();
    onNavigate("/register");
  });

  return rootElement;
};