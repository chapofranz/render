module.exports = function (req, res, next) {
    if (req.session.userId) {
      return next();
    } else {
      return res.forbidden("Sie müssen eingeloggt sein, um diese Seite anzuzeigen.");
    }
  };