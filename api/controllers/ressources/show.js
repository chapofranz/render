module.exports = async function showAll(req, res) {
    if (!req.me) {
        return res.view('pages/entrance/login')
      }

      try {
      let skripte = await Skript.find();
      let anleitungen = await Anleitung.find();


      let currentUser;
      let currentUserId = req.session.userId;
  
      currentUser = await User.findOne({id: currentUserId}).populate('studiengang');
      
        return res.view('pages/ressources/show', {
            skripte: skripte, 
            anleitungen: anleitungen,
            currentUser: currentUser
        })
      }catch (err) {
        return res.serverError(err);
      }
    }