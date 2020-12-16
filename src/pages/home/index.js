export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
      <h1>Olá, mundo!</h1>
      <h2> A importância dos livros </h2>
      <p> textotextotextotextotextotextotextotextotextotexto </p>
  `;
  return rootElement;
};

export const Posts = () => {
  const postsCreated = document.createElement('div');

  postsCreated.innerHTML = `
    <h1>Postagem teste</h1>

  `;
  return postsCreated

};


export const Profile = () => {
  const profileCreated = document.createElement('div');

  profileCreated.innerHTML = `
   <h1>Profile teste</h1>
  
  `
  return profileCreated
 
};


export const Getout = () => {
  const getoutlogin = document.createElement('div');

  getoutlogin.innerHTML = `
    <h1>Sair teste</h1>

  `
  return getoutlogin
 
};