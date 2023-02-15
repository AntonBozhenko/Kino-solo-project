const home = document.getElementById('home');
const logoutLink = document.getElementById('logout');
const find = document.getElementById('find');

home.addEventListener('click', goHome);

find.addEventListener('submit', getRandom);

logoutLink.addEventListener('click', logout);
