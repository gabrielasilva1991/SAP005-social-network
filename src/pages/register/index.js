import { registerUser } from '../../services/index.js';

export const Register = () => {
  const rootElement = document.createElement("div");
  rootElement.innerHTML = `
    <h1>Crie sua conta</h1>
    <form>
      <input type="name" class="input-register" id="name" placeholder="Nome"/>
      <input type="email" class="input-register" id ="email" placeholder ="E-mail"/>
      <input type="password" class="input-register" id="password" placeholder="Senha"/>
      <button type="submit" class="button-register" id="button-register">Registrar-se</button>
    </form>
  `;
  
  rootElement.querySelector("#button-register").addEventListener("click", (e) => {
    //const name = rootElement.querySelector("#name").value;
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    e.preventDefault();
    registerUser(email, password);
    //userUpdate(name, email)
  });
  return rootElement;
};