const User = require('./user');
const bodyParser = require('bodyParser');

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
  const newUser = new User ({
    // TODO: input user parameters
  });
  newUser.save().then(() => {
    res.end();
  });
};
