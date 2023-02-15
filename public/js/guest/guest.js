const home = document.getElementById('home');
const signInLink = document.getElementById('signin');
const signUpLink = document.getElementById('signup');
const aboutLink = document.getElementById('about');
const find = document.getElementById('find');

home.addEventListener('click', goHome);

signInLink.addEventListener('click', signIn);

signUpLink.addEventListener('click', signUp);

aboutLink.addEventListener('click', getInfoAbout);

find.addEventListener('submit', getRandom);

window.addEventListener('submit', enter);
