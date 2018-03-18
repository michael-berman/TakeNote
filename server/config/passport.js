const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, email, password, done) {

      process.nextTick(function() {

        User.findOne({
          'local.email': email
        }, function(err, user) {
          if (err)
            return done(err);

          if (user) {
            return done(null, false, req.flash('signupMessage',
              'That email is already taken.'));
          } else {

            const newUser = new User();

            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);

            newUser.save(function(error) {
              if (error)
                throw error;
              return done(null, newUser);
            });
          }

        });

      });

    }));

};