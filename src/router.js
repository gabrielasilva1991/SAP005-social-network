import { Posts } from './pages/posts/index.js';
import { Login } from './pages/login/index.js';
import { Register } from './pages/register/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Login,
    '/register': Register,
    '/posts': Posts,
  };
  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/')
    });
  routeRender();
});