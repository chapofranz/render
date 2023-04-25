// api/policies/isNotLoggedIn.js
module.exports = function (req, res, next) {
    if (!req.session.userId) {
      return next();
    } else {
      return res.redirect('/'); // Oder eine andere geeignete Route
    }
  };
  