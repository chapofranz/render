module.exports = async function (req, res, next) {
    if (!req.session.userId) {
      return res.forbidden("Sie müssen eingeloggt sein, um diese Seite anzuzeigen.");
    }
  
    const benutzer = await Benutzer.findOne({ id: req.session.userId }).populate('role');
  
    if (benutzer && benutzer.role.name !== 'Admin') {
      return next();
    } else {
      return res.forbidden("Diese Seite ist für Administratoren nicht zugänglich.");
    }
  };