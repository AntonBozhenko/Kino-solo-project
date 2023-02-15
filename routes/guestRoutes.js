const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

const route = express.Router();

const render = require('../lib/render');
const Guest = require('../views/Guest');

route.get('/', (req, res) => {
  render(Guest, { title: 'WhatToWatch' }, res);
});

route.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.sendStatus(203);

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.sendStatus(203);

    req.session.user = { id: user.id, name: user.name };
    res.sendStatus(200);
  } catch (error) {
    console.log('\x1b[31m', 'SignIn Error:', error);
  }
});

// route.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;
//   const hashPass = await bcrypt.hash(password, 10);
//   try {
//     const user = await User.create({ name, email, password: hashPass });

//     req.session.user = { id: user.id, name: user.name };
//     res.json({ err: 0 });
//   } catch (error) {
//     res.json({ err: 1 });
//   }
// });

route.get('/loguot', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.clearCookie('sid');
    res.sendStatus(200);
  });
});

module.exports = route;
