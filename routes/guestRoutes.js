const express = require('express');

const route = express.Router();

const passport = require('passport');

const {
  renderGuestPage, signInAndSendStatus, signUpAndSendStatus, logOut,
} = require('../controllers/guestControllers');

route.get('/', renderGuestPage);

route.post('/signin', signInAndSendStatus);

route.post('/signup', signUpAndSendStatus);

route.get('/loguot', logOut);

route.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
route.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login', successReturnToOrRedirect: '/' }));

module.exports = route;
