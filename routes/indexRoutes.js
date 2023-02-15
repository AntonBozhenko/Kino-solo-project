const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const Home = require('../views/Home');

const { isAuth } = require('../middlewares/midls');

route.get('/', isAuth, (req, res) => {
  render(Home, { title: 'WhatToWatch' }, res);
});

module.exports = route;
