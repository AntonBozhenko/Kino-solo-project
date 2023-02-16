const home = document.getElementById('home');
const logoutLink = document.getElementById('logout');
const find = document.getElementById('find');
const marker = document.getElementById('marker');
const communityMarker = document.getElementById('community-marker');

home.addEventListener('click', goHome);

marker.addEventListener('click', showMarkers);

communityMarker.addEventListener('click', showAllMarkers);

logoutLink.addEventListener('click', logout);

find.addEventListener('submit', getRandom);

window.addEventListener('click', like);

window.addEventListener('click', dislike);

window.addEventListener('click', deleteMarker);
