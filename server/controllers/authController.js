import passport from 'passport';

exports.getGoogleAuth = (req, res) => {
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })(req, res);
};

exports.getGoogleCallback = (req, res) => {
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
  })(req, res);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};
