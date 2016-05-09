const User = require('../models/user');

exports.signup = function(req, res, next) {
  const requestUser = {
    email: req.body.email,
    password: req.body.password
  }

  if (!requestUser.email || !requestUser.password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // See if a user with a given email exists
  User.findOne({ email: requestUser.email }, function(err, existingUser) {
    if (err) { return next(err); }

    // If the user does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }
    // If the user does NOT exist, create and save user record
    const user = new User(requestUser);

    user.save(function(err) {
      if (err) { return next(err); }
      // Responde to request indicating the user was created
      res.json({ success: true });
    });
  });
}
