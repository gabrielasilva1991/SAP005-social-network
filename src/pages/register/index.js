import { registerUser, saveUserUpdate, saveUser } from '../../services/index.js';

export const Register = () => {
  const rootElement = document.createElement("div");
  rootElement.innerHTML = `
    <form class="container-register">
      <h1 class="paragrafe">Crie sua conta</h1>
      <input type="name" class="input-register" id="name" placeholder="Nome"/>
      <input type="email" class="input-register" id ="email" placeholder ="E-mail"/>
      <input type="password" class="input-register" id="password" placeholder="Senha"/>
      <p class="instruction">A senha deve ter no mínimo 6 dígitos</p>
      <button type="submit" class="button-register" id="button-register">Registrar-se</button>
    </form>
  `;
  
  rootElement.querySelector("#button-register").addEventListener("click", (e) => {
    const name = rootElement.querySelector("#name").value;
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    e.preventDefault();
    registerUser(email, password)
    .then((userUpdate) => {
      saveUserUpdate(name)
      saveUser(userUpdate.user, email, name)
      alert("Conta criada com sucesso");
      onNavigate("/")
    })    
    .catch((error) => {
      console.log(error);
      alert("Falha ao realizar o cadastro")
    });
  });
  return rootElement;
};