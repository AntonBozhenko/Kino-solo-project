const express = require('express');

const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

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

app.use((req, res, next) => {
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
app.use(morgan('dev'));
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
