const React = require('react');
const Layout = require('./Layout');

function Home ({title}) {
  return (
    <Layout title={title}>
      <img className="spinner d-none" src="https://cdn-icons-png.flaticon.com/512/7854/7854835.png" alt=""/>
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-85 mx-auto rounded-bottom px-3 mobile-font-nav">
        <a id="home" className="navbar-brand d-flex align-items-center custom-link">
          <img src="https://cdn-icons-png.flaticon.com/512/777/777242.png" className="logo me-2" alt="лого" />
          <p className="m-0 f-5">WhatToWatch</p>
        </a>
        <a id="marker" className="nav-link d-flex align-items-center custom-link"><p className="m-0 me-2">Закладки</p><img className="little-ico" src="https://cdn-icons-png.flaticon.com/512/9431/9431303.png" alt="мои закладки" /></a>
        <a id="community-marker" className="nav-link d-flex align-items-center ms-3 custom-link"><p className="m-0 me-2">Закладки сообщества</p><img className="little-ico" src="https://cdn-icons-png.flaticon.com/512/3090/3090423.png" alt="закладки сообщества" /></a>
        <a id="logout" className="nav-link d-flex align-items-center ms-3 custom-link"><p className="m-0 me-2">Выйти</p><img className="little-ico" src="https://cdn-icons-png.flaticon.com/512/1286/1286853.png" alt="выйти" /></a>
      </nav>
      <main className="w-75 mx-auto mt-2 d-flex flex-column justify-content-center">
        <form id="find" className="mx-auto d-flex flex-column align-items-center find p-2">

          <button id="get-button" type="submit" className="mb-4 btn btn-outline-light">Найти случайный фильм!</button>

          <div className="d-flex px-3 justify-content-center w-100 text-center">
            <div className="me-3 w-50">
              <label htmlFor="year" className="form-label fw-bold">
                Год:
                {' '}
                <span id="year-span">любой</span>
              </label>
              <input type="range" name="year" className="form-range" min="1960" max="2023" step="1" id="year" defaultValue="1900" />
            </div>

            <div className="w-50">
              <label htmlFor="range-year-from" className="form-label fw-bold">Или в диапазоне:</label>
              <div id="diapazon" className="d-flex">
                <input type="text" name="yearFrom" className="form-control me-1 py-0" placeholder="от" id="range-year-from" pattern="196\d|19[7-9]\d|20[01]\d|202[0-3]" title="Год должен находиться в диапазоне от 1960 до 2023" />
                <p className="align-self-center my-0 py-0">-</p>
                <input type="text" name="yearTo" className="form-control ms-1 py-0" placeholder="до" id="range-year-to" pattern="196\d|19[7-9]\d|20[01]\d|202[0-3]" title="Год должен находиться в диапазоне от 1960 до 2023" />
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
              <input className="form-check-input" type="checkbox" name="film" id="film" value="1" />
              <label className="form-check-label" htmlFor="film">фильм</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="serial" id="serial" value="2" />
              <label className="form-check-label" htmlFor="serial">сериал</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="cartoon" id="cartoon" value="3" />
              <label className="form-check-label" htmlFor="cartoon">мультфильм</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="anime" id="anime" value="4" />
              <label className="form-check-label" htmlFor="anime">анимэ</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="animation" id="animation" value="5" />
              <label className="form-check-label" htmlFor="animation">анимационный-мультфильм</label>
            </div>
          </div>
        </form>
      </main>
      <script src="/js/goHome.js" />
      <script src="/js/getNoun.js" />
      <script src="/js/user/like.js" />
      <script src="/js/user/showMarkers.js" />
      <script src="/js/user/showAllMarkers.js" />
      <script src="/js/user/deleteMarker.js" />
      <script src="/js/user/dislike.js" />
      <script src="/js/range.js" />
      <script src="/js/user/logout.js" />
      <script src="/js/getRandom.js" />
      <script src="/js/user/user.js" />
    </Layout>
  );
}

module.exports = Home;
