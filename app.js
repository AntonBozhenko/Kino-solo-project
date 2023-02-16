require('@babel/register');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { User } = require('./db/models');

const app = express();

// импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// подключение и настройка CORS
const corsOptions = {
  origin: 'https://api.kinopoisk.dev',
};
app.use(cors(corsOptions));

// настройка аутентификации через гугол
passport.use(new GoogleStrategy(
  {
  // all sensitive information should be in .env
    clientID: '649936205441-t9kl48v2tehvepgfr2pqi056p81vi521.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/guest/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    done(null, profile);
  },
));

passport.serializeUser((user, done) => {
  done(null, { userName: user.displayName, email: user.emails[0].value });
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// подключение и настройка сессий
const sessionConfig = {
  name: 'sid',
  store: new FileStore({}),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

app.use(async (req, res, next) => {
  if (req.session.passport) {
    const currentUser = await User.findOrCreate({ where: { name: req.session.passport.user.userName, email: req.session.passport.user.email } });
    req.session.user = { id: currentUser[0].id, name: currentUser[0].name };
  }
  res.locals.username = req.session?.user?.name;
  next();
});

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');
const guestRoutes = require('./routes/guestRoutes');

// импорт api
const randomApi = require('./api/randomApi');

// вызов функции проверки соединения с базоый данных
dbCheck();

app.use(express.static(path.resolve('public')));
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// роутеры
app.use('/', indexRoutes);
app.use('/guest', guestRoutes);

// api
app.use('/random', randomApi);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
