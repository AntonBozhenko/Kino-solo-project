function getInfoAbout(event) {
  event.preventDefault();

  const find = document.getElementById('find');
  const main = document.querySelector('main');

  const mainChildren = main.children;
  for (let i = 0; i < mainChildren.length; i += 1) {
    if (mainChildren[i].id !== 'find') mainChildren[i].remove();
  }

  find.classList.add('d-none');

  const aboutWindow = document.createElement('div');
  aboutWindow.id = 'aboutWindow';
  aboutWindow.classList = 'd-flex flex-column align-items-center find p-2 text-center';
  aboutWindow.innerHTML = '<h2 class="mb-2">Информация о сервисе:</h2>';

  const aboutText = document.createElement('p');
  aboutText.classList = 'fst-italic fs-5';
  aboutText.textContent = `
  Привет! Тебе скучно по вечерам или в отпуске? 
  Не знаешь, что посмотреть? Тогда ты пришел по адресу! 
  Наш сервис WhatToWatch предоставляет тебе возможность найти случайный фильм,
  задав несколько параметров для поиска. Регистрация на нашем сайте также позволит тебе
  сохранять понравившиеся тебе фильмы в закладки, а также смотреть дополнительный контент сообщества!
  `;

  aboutWindow.appendChild(aboutText);

  main.appendChild(aboutWindow);
}
