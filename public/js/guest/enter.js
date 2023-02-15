async function enter(event) {
  if (event.target.id === 'signInWindow') {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('/guest/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 203) {
        const enterEr = document.getElementById('enterError');
        if (enterEr) enterEr.remove();

        const enterError = document.createElement('p');
        enterError.id = 'enterError';
        enterError.classList = 'text-danger text-center py-0 my-0';
        enterError.textContent = 'Неверный email или пароль';

        const signInWindow = document.getElementById('signInWindow');
        const enterButt = document.getElementById('enter');

        signInWindow.insertBefore(enterError, enterButt);
      } else if (response.status === 200) {
        location.assign('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
