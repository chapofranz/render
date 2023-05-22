const Sails = require("sails/lib/app/Sails");

module.exports = {

  new: async function (req, res) {
    try {
      const studiengaenge = await Studiengang.find();
      const module = await Modul.find();
      return res.view('pages/ressources/upload', { studiengaenge, module });
    } catch (err) {
      return res.serverError(err);
    }
  },

  save: async function (req, res) {
    const data = req.body;
    let params = req.allParams();
    const studiengaenge = await Studiengang.find();
    const module = await Modul.find();


    sails.log.debug("Eingabeparameter: ", params);

    if (data.kategorie === 'Skript') {
      await Skript.create(params);
    } else if (data.kategorie === 'Anleitung') {

      await Anleitung.create(params)

    } else {
      req.session.message = 'Bitte alle Felder ausfüllen!'; // Speichern Sie die Nachricht in einer Sitzungsvariable
      req.session.messageClass= 'text-warning';
      res.view('pages/ressources/upload', {messageClass: req.session.messageClass, message: req.session.message, studiengaenge, module }); // Weiterleitung zur Fehlerseite
      req.session.message = null;
      req.session.messageClass = null; 
      return;
    }
    req.session.message = 'Erfolgreich erstellt!'; // Speichern Sie die Erfolgsmeldung in einer Sitzungsvariable
    req.session.messageClass= 'text-success';
    res.view('pages/ressources/upload', { messageClass: req.session.messageClass, message: req.session.message, studiengaenge, module }); // Weiterleitung zur Erfolgsseite
    req.session.message = null;
    req.session.messageClass = null; 
    return;
  }

}