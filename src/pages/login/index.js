export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Login!</h1>

  `;
  return rootElement;
};







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