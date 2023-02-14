const getButton = document.getElementById('get-button');

const year = document.getElementById('year');
const yearSpan = document.getElementById('year-span');

const yearFrom = document.getElementById('range-year-from');
const yearTo = document.getElementById('range-year-to');

const grade = document.getElementById('grade');
const gradeRange = document.getElementById('gradeRange');

const stars = document.getElementById('stars');

const find = document.getElementById('find');
const signIn = document.getElementById('signin');
const main = document.querySelector('main');
const home = document.getElementById('home');

year.addEventListener('input', () => {
  yearFrom.value = '';
  yearTo.value = '';
  yearSpan.textContent = year.value;
});

[yearFrom, yearTo].forEach((el) => el.addEventListener('input', () => {
  yearSpan.textContent = 'любой';
  year.value = '';
}));

gradeRange.addEventListener('input', () => {
  grade.textContent = gradeRange.value;
  stars.textContent = ('⭐'.repeat(gradeRange.value) + '☆'.repeat(10 - gradeRange.value));
});

signIn.addEventListener('click', (event) => {
  event.preventDefault();

  if (document.getElementById('signInWindow')) document.getElementById('signInWindow').remove();
  if (document.getElementById('signUpWindow')) document.getElementById('signUpWindow').remove();

  find.classList.add('d-none');

  const signInWindow = document.createElement('form');
  signInWindow.id = 'signInWindow';
  signInWindow.classList = 'd-flex flex-column align-items-center find p-2 text-center d-inline my-auto';
  signInWindow.innerHTML = `
  <h2 class="mb-2">Вход</h2>
  <div class="mb-2 w-50">
    <label for="exampleInputEmail1" class="form-label">Ваш адрес электронной почты:</label>
    <input type="email" class="form-control py-0" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-2 w-50">
    <label for="exampleInputPassword1" class="form-label">Ваш пароль:</label>
    <input type="password" name="password" class="form-control py-0" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-outline-light mb-2 w-25">Войти</button>
  <h3 class="mb-2">Войти через:</h3>
  <div class="d-flex justify-content-around">
  <a id="google"><img class="ico me-5" src="https://cdn-icons-png.flaticon.com/512/733/733583.png" alt="google" /></a>
  <a id="vk"><img class="ico" src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="VK" /></a>
  </div>
  `;

  main.appendChild(signInWindow);
});

home.addEventListener('click', (event) => {
  event.preventDefault();

  if (document.getElementById('signInWindow')) document.getElementById('signInWindow').remove();
  if (document.getElementById('signUpWindow')) document.getElementById('signUpWindow').remove();

  find.classList.remove('d-none');
});

getButton.addEventListener('click', async () => {
  try {
    console.log('1');
    // const response = await fetch('/random/?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=JP42CP0-59N4D5T-PT07QM1-0HTHQPV');
  } catch (error) {
    console.log(error);
  }
});
