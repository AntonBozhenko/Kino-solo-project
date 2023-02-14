const React = require('react');
const Layout = require('./Layout');

function Index({ title }) {
  return (
    <Layout title={title} script="/js/application.js">
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-85 mx-auto rounded-bottom px-3">
        <a id="home" className="navbar-brand d-flex align-items-center" href="#">
          <img src="https://cdn-icons-png.flaticon.com/512/777/777242.png" className="logo me-2" alt="лого" />
          <p className="m-0">WhatToWatch</p>
        </a>
        <a id="signin" className="nav-link me-3" href="#">Войти</a>
        <a id="signup" className="nav-link me-3" href="#">Зарегистрироваться</a>
        <a id="about" className="nav-link" href="#">О сервисе</a>
      </nav>
      <main className="w-75 mx-auto mt-2 d-flex flex-column justify-content-center">
        <form id="find" className="mx-auto d-flex flex-column align-items-center find p-2">

          <button id="get-button" type="button" className="mb-4 btn btn-outline-light">Найти случайный фильм!</button>

          <div className="d-flex px-3 justify-content-center w-100 text-center">
            <div className="me-3 w-50">
              <label htmlFor="year" className="form-label fw-bold">
                Год:
                {' '}
                <span id="year-span">любой</span>
              </label>
              <input type="range" name="year" className="form-range" min="1900" max="2023" step="1" id="year" />
            </div>

            <div className="w-50">
              <label htmlFor="range-year-from" className="form-label fw-bold">Или в диапазоне:</label>
              <div className="d-flex">
                <input type="text" name="year-from" className="form-control me-1 py-0" placeholder="от" id="range-year-from" />
                <p className="align-self-center my-0 py-0">-</p>
                <input type="text" name="year-to" className="form-control ms-1 py-0" placeholder="до" id="range-year-to" />
              </div>
            </div>
          </div>

          <div className="d-flex px-3 mt-2 justify-content-center w-100 text-center">
            <div className="w-50 me-3">
              <label htmlFor="gradeRange" className="form-label fw-bold">
                Оценка от:
                {' '}
                <span id="grade">7</span>
              </label>
              <p id="stars">⭐⭐⭐⭐⭐⭐⭐☆☆☆</p>
            </div>
            <input type="range" name="grade" className="form-range" min="1" max="10" step="1" defaultValue="7" id="gradeRange" />
          </div>

          <p className="fw-bold">Выберите категорию:</p>
          <div className="d-flex mx-auto flex-wrap justify-content-evenly align-items-center">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="film" value="1" />
              <label className="form-check-label" htmlFor="film">фильм</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="serial" value="2" />
              <label className="form-check-label" htmlFor="serial">сериал</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="cartoon" value="3" />
              <label className="form-check-label" htmlFor="cartoon">мультфильм</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="anime" value="4" />
              <label className="form-check-label" htmlFor="anime">анимэ</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="animation" value="5" />
              <label className="form-check-label" htmlFor="animation">анимационный-мультфильм</label>
            </div>
            <div className="form-check form-check-inline me-0">
              <input className="form-check-input" type="checkbox" id="tv-show" value="6" />
              <label className="form-check-label" htmlFor="tv-show">тв-шоу</label>
            </div>
          </div>
        </form>
      </main>
      <script src="/js/guest/guest.js" />
    </Layout>
  );
}

module.exports = Index;
