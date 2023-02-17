const { Op } = require('sequelize');

const { PrivateLike } = require('../db/models');
const { AllLike } = require('../db/models');

const render = require('../lib/render');
const Home = require('../views/Home');

exports.renderHomePage = (req, res) => {
  render(Home, { title: 'WhatToWatch' }, res);
};

exports.addLike = async (req, res) => {
  const {
    name, type, year, rating, movieLength, poster, description,
  } = req.body;
  const { id: userId } = req.session.user;
  try {
    await AllLike.findOrCreate({
      where: { name, type },
      defaults: {
        year, rating, movieLength, poster, description,
      },
    });

    const newLike = await PrivateLike.findOrCreate({
      where: { name, type, userId },
      defaults: {
        year, rating, movieLength, poster, description,
      },
    });

    res.json(newLike);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteLike = async (req, res) => {
  const {
    name, type,
  } = req.body;
  const { id: userId } = req.session.user;
  try {
    await PrivateLike.destroy({ where: { name, type, userId } });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

exports.lookAllMarkers = async (req, res) => {
  const { id: userId } = req.session.user;
  try {
    const userMarkers = await PrivateLike.findAll({ where: { userId } });

    res.json(userMarkers);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteOneMarker = async (req, res) => {
  const { id: userId } = req.session.user;
  const { id } = req.body;
  try {
    await PrivateLike.destroy({ where: { id, userId } });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

exports.getCommunityMarkersButNotUsers = async (req, res) => {
  const { id: userId } = req.session.user;
  try {
    const userMarkers = await PrivateLike.findAll({ where: { userId } });
    const userMoviesNames = [];
    userMarkers.forEach((el) => userMoviesNames.push(el.name));

    const communityMarkers = await AllLike.findAll();
    const usersMoviesNames = [];

    communityMarkers.forEach((el) => usersMoviesNames.push(el.name));

    const diff = [];

    usersMoviesNames.forEach((el) => {
      if (!userMoviesNames.includes(el)) diff.push(el);
    });

    const difCommunityMarkers = await AllLike.findAll({ where: { name: { [Op.like]: { [Op.any]: diff } } } });

    const random = Math.floor(Math.random() * (difCommunityMarkers.length - 0 + 1)) + 0;

    res.json(difCommunityMarkers[random]);
  } catch (error) {
    console.log(error);
  }
};
