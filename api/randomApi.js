const express = require('express');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const responseForTotal = await fetch(`https://api.kinopoisk.dev/movie${req.url}`);
    const resultForTotal = await responseForTotal.json();

    if (resultForTotal.total === 0) {
      const fail = 'Совпадений не найдено, попробуйте изменить параметры поиска';
      res.json({ fail });
    } else {
      const total = resultForTotal.pages;
      const randomPage = Math.floor(Math.random() * (total - 1 + 1)) + 1;

      const response = await fetch(`https://api.kinopoisk.dev/movie${req.url}&page=${randomPage}`);
      const resulta = await response.json();

      const result = resulta.docs[0];

      let isAuth = false;
      if (req.session?.user) isAuth = true;

      const name = result?.name || 'Название неизвестно';
      const type = result?.type || 'неизвестно';
      const year = result?.year || 'неизвестный';
      const description = result?.description || 'нет информации';
      const movieLength = result?.movieLength;
      const url = result?.poster?.url || 'https://cdn-icons-png.flaticon.com/512/5726/5726775.png';
      const kp = result?.rating?.kp || 'неизвестный';

      res.json({
        name, type, year, movieLength, description, url, kp, isAuth,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
