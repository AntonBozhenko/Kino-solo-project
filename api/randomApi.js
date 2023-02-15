const express = require('express');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    // const responseForTotal = await fetch(`https://api.kinopoisk.dev/movie${req.url.slice(8)}`);
    // const resultForTotal = await responseForTotal.json();

    // if (!resultForTotal.total) {
    //   const fail = 'Совпадений не найдено, попробуйте изменить параметры поиска';
    //   res.json({ fail });
    // } else {
    //   const total = resultForTotal.pages;
    //   const randomPage = Math.floor(Math.random() * (total - 1 + 1)) + 1;

    //   const response = await fetch(`https://api.kinopoisk.dev/movie${req.url.slice(8)}&page=${randomPage}`);
    //   const resulta = await response.json();

    //   const result = resulta.docs[0];

    const result = {
      externalId: {
        kpHD: '4bedfdc451d2b82ca7b9af64b0d08d91',
        imdb: null,
        _id: '6361490111f1fd7ff10eafa8',
      },
      logo: { _id: '62f3a99f252c8469ef381951', url: null },
      poster: {
        _id: '63397ccac22d011bb58280e0',
        url: 'https://st.kp.yandex.net/images/film_big/1007436.jpg',
        previewUrl: 'https://st.kp.yandex.net/images/film_iphone/iphone360_1007436.jpg',
      },
      rating: {
        kp: 7.567,
        imdb: 6.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 98.08,
        _id: '63ebb21f68d824d6ca79d3c9',
      },
      votes: {
        kp: 4490,
        imdb: 60,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 130,
        _id: '63ebb21f68d824d6ca79d3ca',
      },
      watchability: { items: [[Object], [Object]], _id: '63e6f03868d824d6cad00dfb' },
      id: 1007436,
      type: 'tv-series',
      name: 'Зорге',
      description: 'В основе сюжета драматическая жизнь и судьба легендарного разведчика, Героя Советского Союза Рихарда Зорге. Особое внимание уделяется периоду работы Зорге журналистом при посольстве Германии в Японии – уже резидента разведки с псевдонимом Рамзай, вхожего в самые высокие круги и имеющего доступ к секретной информации.',
      year: 2017,
      alternativeName: null,
      enName: null,
      names: [{ _id: '63397ccac22d011bb58280dd', name: 'Зорге' }],
      movieLength: 55,
      shortDescription: 'Гений шпионажа пытается повлиять на ход Второй мировой. Александр Домогаров в роли легенды советской разведки',
      releaseYears: [{ start: 2017, end: 2017, _id: '6361490111f1fd7ff10eafaa' }],
    };

    const name = result.name || 'Название неизвестно';
    const type = result.type || 'неизвестно';
    const year = result.year || 'неизвестный';
    const description = result.description || 'нет информации';
    const { movieLength } = result;
    const url = result.poster.url || 'https://cdn-icons-png.flaticon.com/512/5726/5726775.png';
    const kp = result.rating.kp || 'неизвестный';

    res.json({
      name, type, year, movieLength, description, url, kp,
    });
    // }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
