const Sails = require("sails/lib/app/Sails");

module.exports = {
    show: async function (req, res) {
      try {
        const skripte = await Skript.find();
        const anleitungen = await Anleitung.find();

        let currentUser;
        let currentUserId = req.session.userId;
    
        currentUser = await Benutzer.findOne({id: currentUserId}).populate('role');
  
        return res.view('pages/wirtschaftsinformatik', {
          skripte: skripte,
          anleitungen: anleitungen,
          currentUser: currentUser
        });
      } catch (err) {
        return res.serverError(err);
      }
    },
  };
