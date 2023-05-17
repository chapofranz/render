module.exports = async function showAll(req, res) {
    if (!req.me || !req.me.isSuperAdmin) {
        return res.unauthorized();
      }

      try {
      const skripte = await Skript.find();
      const anleitungen = await Anleitung.find();

      let currentUser;
      let currentUserId = req.session.userId;
  
      currentUser = await User.findOne({id: currentUserId}).populate('studiengang');
      
        return res.view('pages/wirtschaftsinformatik/show', {
            skripte: skripte, 
            anleitungen: anleitungen,
            currentUser: currentUser
        })
      }catch (err) {
        return res.serverError(err);
      }
    }