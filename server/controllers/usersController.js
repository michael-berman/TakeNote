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
  const user = req.body.user;

  passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup'
  });

  // const newUser = new User({
  //   email: user.email,
  //   password: user.password,
  //   created_at: Date.now(),
  //   updated_at: Date.now()
  // });
  // newUser.save( (err) => {
  //   if (err) console.log(err);
  //   res.send({});
  // });
};
