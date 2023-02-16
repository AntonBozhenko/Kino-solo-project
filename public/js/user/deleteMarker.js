async function deleteMarker(event) {
  if (event.target.id === 'delete') {
    const { likeid: id } = event.target.closest('div').dataset;
    console.log(id);

    try {
      const response = await fetch('/marker', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
        }),
      });

      if (response.status === 200) {
        const markersWindow = document.getElementById('markersWindow');
        if (markersWindow.children.length === 1) {
          event.target.closest('#markersWindow').remove();

          const main = document.querySelector('main');

          const infoMessage = document.createElement('div');
          infoMessage.id = 'infoMessage';
          infoMessage.classList = 'd-flex flex-column align-items-center find p-2 text-center mx-auto';
          infoMessage.innerHTML = `
          <h2>У вас в закладках пока-что ничего нет</h2>
          `;

          main.appendChild(infoMessage);
        } else {
          event.target.closest('div').remove();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
