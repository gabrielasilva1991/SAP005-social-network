import { Home, Posts, Profile, Logout } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { Register } from './pages/register/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Home,
    '/login': Login,
    '/register': Register,
    '/posts': Posts,
    '/profile': Profile,
    '/logout': Logout,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('home')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/')
    });
    
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/login')
    });

  document
    .getElementById('posts')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/posts')
    });

  document
    .getElementById('profile')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/profile')
    });

  document
    .getElementById('logout')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/logout')
    });

  routeRender();
});
