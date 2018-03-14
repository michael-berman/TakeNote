import User from '../models/user';

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

  const newUser = new User({
    email: user.email,
    created_at: Date.now(),
    updated_at: Date.now()
  });
  console.log(newUser);
  newUser.save( (err) => {
    if (err) console.log(err);
    res.send({});
  });
};
