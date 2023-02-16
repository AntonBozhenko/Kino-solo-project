async function showMarkers(event) {
  event.preventDefault();
  try {
    const response = await fetch('/marker');

    const result = await response.json();

    const main = document.querySelector('main');

    if (!result.join()) {
      const mainChilds = main.children;
      for (let i = 0; i < mainChilds.length; i += 1) {
        mainChilds[i].classList.add('d-none');
      }

      const infoMessage = document.createElement('div');
      infoMessage.id = 'infoMessage';
      infoMessage.classList = 'd-flex flex-column align-items-center find p-2 text-center mx-auto';
      infoMessage.innerHTML = `
      <h2>У вас в закладках пока-что ничего нет</h2>
      `;
      main.appendChild(infoMessage);
    } else {
      const mainChilds = main.children;
      for (let i = 0; i < mainChilds.length; i += 1) {
        mainChilds[i].classList.add('d-none');
      }

      const markersWindow = document.createElement('div');
      markersWindow.id = 'markersWindow';
      markersWindow.classList = 'overflow-y-auto max-scroll align-self-center py-2';
      result.forEach((el) => {
        const timeAddition = getNoun(el.movieLength, 'минута', 'минуты', 'минут');

        let innerHTMLForTime;
        if (el.movieLength === 'null') {
          innerHTMLForTime = 'неизвестна';
        } else {
          innerHTMLForTime = `${el.movieLength} ${timeAddition}`;
        }
        markersWindow.innerHTML += `
        <div key="${el.id}" data-likeid="${el.id}" class="d-flex mx-auto flex-column align-items-center find p-2 text-center position-relative overflow-y-auto middle-scroll marker">
          <img id="delete" class="delete" src="https://cdn-icons-png.flaticon.com/512/9247/9247836.png" alt="удалить">
          <h2 class="my-0">${el.name}</h2>
          <div class="d-flex justify-content-between w-100">
            <div class="text-start">
              <p class="my-0 mobile-font"><span class="fw-bold">Тип</span>: ${el.type}</p>
              <p class="my-0 mobile-font"><span class="fw-bold">Год</span>: ${el.year}</p>
              <p class="my-0 mobile-font"><span class="fw-bold">Рейтинг</span>: ${el.rating} из 10 ${'⭐'.repeat(Math.round(el.rating)) + '☆'.repeat(10 - Math.round(el.rating))}</p>
              <p class="my-0 mobile-font"><span class="fw-bold">Продолжительность</span>: ${innerHTMLForTime}</p>
            </div>
    
            <img class="poster" src=${el.poster} alt="Постер" />
          </div>
          <p class="my-0 mobile-font text-start"><span class="fw-bold">Описание</span>: ${el.description}</p>
          </div>
        `;

        main.appendChild(markersWindow);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
