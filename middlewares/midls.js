const bcrypt = require('bcrypt');

const { User } = require('../db/models');

exports.isAuth = (req, res, next) => {
  if (req.session?.user) next();
  else res.redirect('/guest');
};

exports.checkSession = async (req, res, next) => {
  if (req.session.passport) {
    const name = req.session.passport.user.userName;
    const { email } = req.session.passport.user;
    const hashPass = await bcrypt.hash(name + email, 10);
    const currentUser = await User.findOrCreate({ where: { name, email }, defaults: { password: hashPass } });
    req.session.user = { id: currentUser[0].id, name: currentUser[0].name };
  }
  res.locals.username = req.session?.user?.name;
  next();
};
