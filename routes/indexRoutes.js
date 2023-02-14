const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const Home = require('../views/Home');

route.get('/', (req, res) => {
  render(Home, { title: 'WhatToWatch' }, res);
});

route.get('/random', async (req, res) => {
  console.log(req.url.slice(8));
  const response = await fetch(`https://api.kinopoisk.dev/movie${req.url.slice(8)}`);
  const result = await response.json();
  console.log(result);
});

module.exports = route;
