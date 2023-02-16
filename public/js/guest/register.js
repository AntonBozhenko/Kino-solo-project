async function register(event) {
  if (event.target.id === 'signUpWindow') {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('/guest/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 203) {
        const registerEr = document.getElementById('registerError');
        if (registerEr) registerEr.remove();

        const registerError = document.createElement('p');
        registerError.id = 'registerError';
        registerError.classList = 'text-danger text-center py-0 my-0';
        registerError.textContent = 'Пользователь с таким именем или email уже существует';

        const signUpWindow = document.getElementById('signUpWindow');
        const regButt = document.getElementById('register');

        signUpWindow.insertBefore(registerError, regButt);
      } else if (response.status === 200) {
        location.assign('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
