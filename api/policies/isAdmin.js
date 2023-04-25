module.exports = async function (req, res, proceed) {
    if (req.session.userRole === 'Admin') {
      return proceed();
    }
    return res.forbidden('Zugriff verweigert. Sie müssen ein Administrator sein, um diese Seite zu besuchen.');
  };