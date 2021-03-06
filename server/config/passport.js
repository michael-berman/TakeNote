import mongoose from 'mongoose';
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = mongoose.model('User');
const configAuth = require('./auth');

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
          email: email
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

  passport.use(new GoogleStrategy({
    clientID : configAuth.googleAuth.clientId,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackUrl
  },
  function(token, refreshToken, profile, done) {

    process.nextTick(function() {

      User.findOne({ 'google.id': profile.id }, function(err, user) {

        if (err) return done(err);
        if (user) {
          return done(null, user);
        } else {
          let newUser = new User();

          newUser.google.id = profile.id;
          newUser.google.token = token;
          newUser.google.name = profile.displayName;
          newUser.google.email = profile.emails[0].value;

          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }
  ));

};
