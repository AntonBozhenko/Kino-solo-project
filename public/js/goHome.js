function goHome(event) {
  event.preventDefault();

  const main = document.querySelector('main');
  const find = document.getElementById('find');

  const mainChildren = main.children;
  for (let i = 0; i < mainChildren.length; i += 1) {
    if (mainChildren[i].id !== 'find') mainChildren[i].remove();
  }

  const infoMessag = document.getElementById('infoMessage');
  if (infoMessag) infoMessag.remove();

  find.classList.remove('d-none');
}
