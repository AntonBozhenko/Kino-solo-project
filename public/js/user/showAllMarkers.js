async function showAllMarkers(event) {
  event.preventDefault();
  try {
    const response = await fetch('/community');

    const result = await response.json();

    const main = document.querySelector('main');

    const mainChilds = main.children;
    for (let i = 0; i < mainChilds.length; i += 1) {
      mainChilds[i].classList.add('d-none');
    }

    const timeAddition = getNoun(result.movieLength, 'минута', 'минуты', 'минут');

    let innerHTMLForTime;
    if (result.movieLength === 'null') {
      innerHTMLForTime = 'неизвестна';
    } else {
      innerHTMLForTime = `${result.movieLength} ${timeAddition}`;
    }

    const allMarkersWindow = document.createElement('div');
    allMarkersWindow.id = 'allMarkersWindow';
    allMarkersWindow.classList = 'd-flex flex-column align-items-center find p-2 text-center position-relative overflow-y-auto max-scroll';

    const like = document.createElement('img');
    like.id = 'like';
    like.src = 'https://cdn-icons-png.flaticon.com/512/1000/1000621.png';
    like.alt = 'лайк';
    like.classList = 'like';

    like.dataset.name = result.name;
    like.dataset.type = result.type;
    like.dataset.year = result.year;
    like.dataset.rating = result.rating;
    like.dataset.movieLength = result.movieLength;
    like.dataset.poster = result.poster;
    like.dataset.description = result.description;

    allMarkersWindow.appendChild(like);

    allMarkersWindow.innerHTML += `
          <button id="next-button" type="button" class="btn btn-outline-light mb-2">Следующая закладка!</button>
          <h2 class="my-0">${result.name}</h2>
          <div class="d-flex justify-content-between w-100">
            <div class="text-start">
              <p class="my-0 mobile-font"><span class="fw-bold">Тип</span>: ${result.type}</p>
              <p class="my-0 mobile-font"><span class="fw-bold">Год</span>: ${result.year}</p>
              <p class="my-0 mobile-font"><span class="fw-bold">Рейтинг</span>: ${result.rating} из 10 ${'⭐'.repeat(Math.round(result.rating)) + '☆'.repeat(10 - Math.round(result.rating))}</p>
              <p class="my-0 mobile-font"><span class="fw-bold">Продолжительность</span>: ${innerHTMLForTime}</p>
            </div>
    
            <img class="poster" src=${result.poster} alt="Постер" />
          </div>
          <p class="my-0 mobile-font text-start"><span class="fw-bold">Описание</span>: ${result.description}</p>
        `;

    main.appendChild(allMarkersWindow);

    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', async () => {
      const respons = await fetch('/community');

      const newResult = await respons.json();

      const alradyLiked = document.getElementById('alradyLiked');
      if (alradyLiked) {
        alradyLiked.id = 'like';
        alradyLiked.src = 'https://cdn-icons-png.flaticon.com/512/1000/1000621.png';
      }

      const newTimeAddition = getNoun(newResult.movieLength, 'минута', 'минуты', 'минут');

      let newInnerHTMLForTime;
      if (newResult.movieLength === 'null') {
        newInnerHTMLForTime = 'неизвестна';
      } else {
        newInnerHTMLForTime = `${newResult.movieLength} ${newTimeAddition}`;
      }

      const newLike = document.getElementById('like');
      newLike.dataset.name = newResult.name;
      newLike.dataset.type = newResult.type;
      newLike.dataset.year = newResult.year;
      newLike.dataset.rating = newResult.rating;
      newLike.dataset.movieLength = newResult.movieLength;
      newLike.dataset.poster = newResult.poster;
      newLike.dataset.description = newResult.description;

      const allMarkersW = document.getElementById('allMarkersWindow');
      const resWChil = allMarkersW.children;

      resWChil[2].textContent = newResult.name;

      const textChilds = resWChil[3].firstElementChild.children;
      textChilds[0].innerHTML = `<span class="fw-bold">Тип</span>: ${newResult.type}`;
      textChilds[1].innerHTML = `<span class="fw-bold">Год</span>: ${newResult.year}`;
      textChilds[2].innerHTML = `<span class="fw-bold">Рейтинг</span>: ${newResult.rating} из 10 ${'⭐'.repeat(Math.round(newResult.rating)) + '☆'.repeat(10 - Math.round(newResult.rating))}`;
      textChilds[3].innerHTML = `<span class="fw-bold">Продолжительность</span>: ${newInnerHTMLForTime}`;

      const poster = resWChil[3].children[1];
      poster.src = newResult.poster;

      resWChil[4].innerHTML = `<span class="fw-bold">Описание</span>: ${newResult.description}`;
    });
  } catch (error) {
    console.log(error);
  }
}
