const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = (passport) => {
  passport.serializeUser( (user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser( (id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
