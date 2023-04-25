module.exports = async function (req, res, next) {
    if (req.session.userId) {
      const currSessionBenutzer = await Benutzer.findOne({ id: req.session.userId }).populate('role');
      res.locals.benutzer = currSessionBenutzer;
    }
    return next();
  };