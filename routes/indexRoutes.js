const express = require('express');

const route = express.Router();

const { isAuth } = require('../middlewares/midls');

const {
  renderHomePage, addLike, deleteLike, lookAllMarkers, deleteOneMarker, getCommunityMarkersButNotUsers,
} = require('../controllers/indexControllers');

route.get('/', isAuth, renderHomePage);

route.post('/like', isAuth, addLike);

route.delete('/like', isAuth, deleteLike);

route.get('/marker', isAuth, lookAllMarkers);

route.delete('/marker', isAuth, deleteOneMarker);

route.get('/community', isAuth, getCommunityMarkersButNotUsers);

module.exports = route;
