//import { registerUser } from '../../services/index.js';

export const Register = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <h1>Crie sua conta</h1>
    <form>
      <input type="name" class="input-name" id="name" placeholder="Nome"/>
      <input type="email" class="input-login" id ="email" placeholder ="E-mail"/>
      <input type="password" class="input-login" id="password" placeholder="Senha"/>
      <button type="submit" class="button-register" id="button-register">Registrar-se</button>
    </form>
  `;
  
  // rootElement.querySelector("#button-register").addEventListener("click", () => {
  //   const name = rootElement.querySelector("#name").value;
  //   const email = rootElement.querySelector("#email").value;
  //   const password = rootElement.querySelector("#password").value;
  //   return registerUser(email, password, name);
  // });

  return rootElement;
};