import User from '../models/user';
import passport from 'passport';

// index
exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (!err) {
      res.end(users);
    } else {
      console.log(err);
    }
  });
};

// Show
exports.getUser = (req, res) => {
  // TODO: figure out how to find a user depending on request body
};

// Post
exports.createUser = (req, res) => {

  console.log(req.body);
  
  passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup'
  });
};
