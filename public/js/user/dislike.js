async function dislike(event) {
  if (event.target.id === 'alradyLiked') {
    const {
      name, type,
    } = event.target.dataset;

    try {
      const response = await fetch('/like', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, type,
        }),
      });

      if (response.status === 200) {
        event.target.id = 'like';
        event.target.src = 'https://cdn-icons-png.flaticon.com/512/1000/1000621.png';
      }
    } catch (error) {
      console.log(error);
    }
  }
}
