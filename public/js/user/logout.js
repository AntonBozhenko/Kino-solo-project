async function logout(event) {
  event.preventDefault();
  const main = document.querySelector('main');

  const mainChilds = main.children;
  for (let i = 0; i < mainChilds.length; i += 1) {
    mainChilds[i].classList.add('d-none');
  }

  const infoMessage = document.createElement('div');
  infoMessage.id = 'infoMessage';
  infoMessage.classList = 'd-flex flex-column align-items-center find p-2 text-center mx-auto';
  infoMessage.innerHTML = `
  <h2>Вы действительно хотите выйти?</h2>
  <div class="d-flex justify-content-center w-100 mb-2">
    <button id="yes" type="button" class="btn btn-outline-light me-5 w-25">Да</button>
    <button id="no" type="button" class="btn btn-outline-light w-25">Нет</button>
  </div>
  `;
  main.appendChild(infoMessage);

  const noButton = document.getElementById('no');

  noButton.addEventListener('click', () => {
    for (let i = 0; i < mainChilds.length; i += 1) {
      if (mainChilds[i].id === 'find') {
        mainChilds[i].classList.remove('d-none');
      } else {
        mainChilds[i].remove();
      }
    }

    const infoMessag = document.getElementById('infoMessage');
    if (infoMessag) infoMessag.remove();
  });

  const yesButton = document.getElementById('yes');

  yesButton.addEventListener('click', async () => {
    try {
      const response = await fetch('/guest/loguot');
      if (response.status === 200) location.assign('/');
    } catch (error) {
      console.log(error);
    }
  });
}
