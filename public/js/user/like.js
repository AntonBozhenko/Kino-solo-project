async function like(event) {
  if (event.target.id === 'like') {
    const {
      name, type, year, rating, movieLength, poster, description,
    } = event.target.dataset;

    console.log(event.target);

    try {
      const response = await fetch('/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, type, year, rating, movieLength, poster, description,
        }),
      });

      const result = await response.json();

      if (result[1]) {
        event.target.id = 'alradyLiked';
        event.target.src = 'https://cdn-icons-png.flaticon.com/512/535/535183.png';
      } else {
        const msg = document.getElementById('alradyLikeMessage');
        if (msg) msg.remove();

        const message = document.createElement('div');
        message.id = 'alradyLikeMessage';
        message.classList = 'text-center';
        message.textContent = 'Уже в закладках';

        const resultWindow = event.target.closest('div');
        resultWindow.appendChild(message);

        const ms = document.getElementById('alradyLikeMessage');
        setTimeout(() => ms.remove(), 1500);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
