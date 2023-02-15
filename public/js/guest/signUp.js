function signUp(event) {
  event.preventDefault();

  const find = document.getElementById('find');
  const main = document.querySelector('main');

  const mainChildren = main.children;
  for (let i = 0; i < mainChildren.length; i += 1) {
    if (mainChildren[i].id !== 'find') mainChildren[i].remove();
  }

  find.classList.add('d-none');

  const signUpWindow = document.createElement('form');
  signUpWindow.id = 'signUpWindow';
  signUpWindow.classList = 'd-flex flex-column align-items-center find p-2 text-center';
  signUpWindow.innerHTML = `
  <h2 class="mb-2">Регистрация</h2>
  <div class="mb-2 w-50">
    <label for="name" class="form-label">Ваше имя:</label>
    <input type="text" class="form-control py-0" name="name" id="name"">
  </div>
  <div class="mb-2 w-50">
    <label for="exampleInputEmail1" class="form-label">Ваш адрес электронной почты:</label>
    <input type="email" class="form-control py-0" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-2 w-50">
    <label for="exampleInputPassword1" class="form-label">Ваш пароль:</label>
    <input type="password" name="password" class="form-control py-0" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-outline-light mb-2 w-25 py-1">Зарегистрироваться</button>
  `;

  main.appendChild(signUpWindow);
}
