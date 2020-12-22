import { logOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Home  = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <h1>Olá, mundo!</h1>
  <h2> A importância dos livros </h2>
  <p> textotextotextotextotextotextotextotextotextotexto </p>
  <nav>
      <ul>
        <li id='home'>Página Inicial</li>
        <li id='posts'>Postagens</li>
        <li id='profile'>Perfil</li>
        <li id='logout'>Sair</li>
      </ul>
    </nav>
  `;

  rootElement.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    onNavigate('/home');
  });

  rootElement.querySelector("#posts").addEventListener("click", (e) => {
    e.preventDefault();
    onNavigate('/posts');
  });

  rootElement.querySelector("#profile").addEventListener("click", (e) => {
    e.preventDefault();
    onNavigate('/profile');
  });

  rootElement.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault();
    return logOut();
  });
    
  return rootElement;
};
