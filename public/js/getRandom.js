async function getRandom(event) {
  event.preventDefault();

  const main = document.querySelector('main');
  const find = document.getElementById('find');

  const spinner = document.querySelector('.spinner');
  spinner.classList.remove('d-none');

  let years;
  if (
    !event.target.yearTo.value
    && !event.target.yearFrom.value
    && document.getElementById('year-span').textContent === 'любой') {
    const randomYear = Math.floor(Math.random() * (2023 - 1960 + 1)) + 1960;
    years = [randomYear, randomYear, 'random'];
  } else if (
    !event.target.yearTo.value
    && !event.target.yearFrom.value
    && document.getElementById('year-span').textContent !== 'любой') {
    years = [event.target.year.value, event.target.year.value];
  } else {
    years = [event.target.yearFrom.value, event.target.yearTo.value];
  }

  const rate = [event.target.grade.value, '10'];

  let isRandomType = false;
  let type;
  document.querySelectorAll('[type="checkbox"]').forEach((el) => {
    if (el.checked === true) {
      type = el.value;
    }
  });

  if (!type) {
    type = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    isRandomType = true;
  }

  try {
    const response = await fetch(`/random/?field=rating.kp&search=${rate[0]}-${rate[1]}&field=year&search=${years[0]}-${years[1]}&field=typeNumber&search=${type}&sortField=year&sortType=1&token=1YX1XTK-JSY4M7P-MJ1DSQP-F4RHVJ1&limit=1`);

    const result = await response.json();

    spinner.classList.add('d-none');

    find.classList.add('d-none');

    if (result.fail) {
      const resultWindow = document.createElement('div');
      resultWindow.id = 'resultWindow';
      resultWindow.classList = 'd-flex flex-column align-items-center find p-2 text-center';
      resultWindow.innerHTML = `
      <button id="change-button" type="button" class="btn btn-outline-light me-5">Изменить параметры</button>
      <h2 class="my-0">${result.fail}</h2>
      `;

      main.appendChild(resultWindow);

      const changeButton = document.getElementById('change-button');
      changeButton.addEventListener('click', goHome);
    } else {
      const resultType = result.type;
      let filmType;

      resultType === 'movie' ? filmType = 'фильм'
        : resultType === 'tv-series' ? filmType = 'сериал'
          : resultType === 'cartoon' ? filmType = 'мультфильм'
            : resultType === 'anime' ? filmType = 'анимэ'
              : resultType === 'animated-series' ? filmType = 'анимационный-мультфильм'
                : filmType = 'тв-шоу';

      const timeAddition = getNoun(result.movieLength, 'минута', 'минуты', 'минут');

      let innerHTMLForTime;
      if (!result.movieLength) {
        innerHTMLForTime = 'неизвестна';
      } else {
        innerHTMLForTime = `${result.movieLength} ${timeAddition}`;
      }

      const resultWindow = document.createElement('div');
      resultWindow.id = 'resultWindow';
      resultWindow.classList = 'd-flex flex-column align-items-center find p-2 text-center position-relative overflow-y-auto max-scroll';
      resultWindow.innerHTML = `
      <div class="d-flex justify-content-center flex-wrap w-100 mb-2">
        <button id="change-button" type="button" class="btn btn-outline-light me-5">Изменить параметры</button>
        <button id="more-button" type="button" class="btn btn-outline-light">Следующий фильм!</button>
      </div>
      <h2 class="my-0">${result.name}</h2>
      <div class="d-flex justify-content-between w-100">
        <div class="text-start">
          <p class="my-0 mobile-font"><span class="fw-bold">Тип</span>: ${filmType}</p>
          <p class="my-0 mobile-font"><span class="fw-bold">Год</span>: ${result.year}</p>
          <p class="my-0 mobile-font"><span class="fw-bold">Рейтинг</span>: ${result.kp} из 10 ${'⭐'.repeat(Math.round(result.kp)) + '☆'.repeat(10 - Math.round(result.kp))}</p>
          <p class="my-0 mobile-font"><span class="fw-bold">Продолжительность</span>: ${innerHTMLForTime}</p>
        </div>
  
        <img class="poster" src=${result.url} alt="Постер" />
      </div>
      <p class="my-0 mobile-font text-start"><span class="fw-bold">Описание</span>: ${result.description}</p>
      `;

      if (result.isAuth) {
        const like = document.createElement('img');
        like.id = 'like';
        like.src = 'https://cdn-icons-png.flaticon.com/512/1000/1000621.png';
        like.alt = 'лайк';
        like.classList = 'like';

        like.dataset.name = result.name;
        like.dataset.type = filmType;
        like.dataset.year = result.year;
        like.dataset.rating = result.kp;
        like.dataset.movieLength = result.movieLength;
        like.dataset.poster = result.url;
        like.dataset.description = result.description;

        resultWindow.appendChild(like);
      }

      main.appendChild(resultWindow);

      const changeButton = document.getElementById('change-button');
      changeButton.addEventListener('click', goHome);

      const moreButton = document.getElementById('more-button');
      moreButton.addEventListener('click', async () => {
        try {
          spinner.classList.remove('d-none');
          if (years[2]) {
            const newRandomYear = Math.floor(Math.random() * (2023 - 1960 + 1)) + 1960;
            years = [newRandomYear, newRandomYear, 'random'];
          }

          if (isRandomType) {
            type = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          }

          const newResponse = await fetch(`/random/?field=rating.kp&search=${rate[0]}-${rate[1]}&field=year&search=${years[0]}-${years[1]}&field=typeNumber&search=${type}&sortField=year&sortType=1&token=1YX1XTK-JSY4M7P-MJ1DSQP-F4RHVJ1&limit=1`);

          const newResult = await newResponse.json();

          spinner.classList.add('d-none');

          if (newResult.fail) {
            document.getElementById('resultWindow').remove();

            const newResultWindow = document.createElement('div');
            newResultWindow.id = 'resultWindow';
            newResultWindow.classList = 'd-flex flex-column align-items-center find p-2 text-center';
            newResultWindow.innerHTML = `
            <button id="change-button" type="button" class="btn btn-outline-light me-5">Изменить параметры</button>
            <h2 class="my-0">${newResult.fail}</h2>
            `;

            main.appendChild(newResultWindow);

            const newChangeButton = document.getElementById('change-button');
            newChangeButton.addEventListener('click', goHome);
          } else {
            const alradyLiked = document.getElementById('alradyLiked');
            if (alradyLiked) {
              alradyLiked.id = 'like';
              alradyLiked.src = 'https://cdn-icons-png.flaticon.com/512/1000/1000621.png';
            }

            const newResultType = newResult.type;
            let newFilmType;

            newResultType === 'movie' ? newFilmType = 'фильм'
              : newResultType === 'tv-series' ? newFilmType = 'сериал'
                : newResultType === 'cartoon' ? newFilmType = 'мультфильм'
                  : newResultType === 'anime' ? newFilmType = 'анимэ'
                    : newResultType === 'animated-series' ? newFilmType = 'анимационный-мультфильм'
                      : newFilmType = 'тв-шоу';

            const newTimeAddition = getNoun(newResult.movieLength, 'минута', 'минуты', 'минут');

            let newInnerHTMLForTime;
            if (!newResult.movieLength) {
              newInnerHTMLForTime = 'неизвестна';
            } else {
              newInnerHTMLForTime = `${newResult.movieLength} ${newTimeAddition}`;
            }

            const newLike = document.getElementById('like');
            newLike.dataset.name = newResult.name;
            newLike.dataset.type = newFilmType;
            newLike.dataset.year = newResult.year;
            newLike.dataset.rating = newResult.kp;
            newLike.dataset.movieLength = newResult.movieLength;
            newLike.dataset.poster = newResult.url;
            newLike.dataset.description = newResult.description;

            const resultW = document.getElementById('resultWindow');
            const resWChil = resultW.children;

            resWChil[1].textContent = newResult.name;

            const textChilds = resWChil[2].firstElementChild.children;
            textChilds[0].innerHTML = `<span class="fw-bold">Тип</span>: ${newFilmType}`;
            textChilds[1].innerHTML = `<span class="fw-bold">Год</span>: ${newResult.year}`;
            textChilds[2].innerHTML = `<span class="fw-bold">Рейтинг</span>: ${newResult.kp} из 10 ${'⭐'.repeat(Math.round(newResult.kp)) + '☆'.repeat(10 - Math.round(newResult.kp))}`;
            textChilds[3].innerHTML = `<span class="fw-bold">Продолжительность</span>: ${newInnerHTMLForTime}`;

            const poster = resWChil[2].children[1];
            poster.src = newResult.url;

            resWChil[3].innerHTML = `<span class="fw-bold">Описание</span>: ${newResult.description}`;
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}
