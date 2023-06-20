const Sails = require("sails/lib/app/Sails");
var SkriptController = require('./SkriptController');
var AnleitungController = require('./AnleitungController');

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
      // Zuerst die Datei hochladen
      let uploadedFileName = await SkriptController.uploadData(req, res);

      // Dann den Datensatz erstellen
      if (uploadedFileName) {
        let createdSkript = await Skript.create({ ...params, data: uploadedFileName }).fetch();
        sails.log.debug("Created Skript ID: ", createdSkript.id), "Created Skript Data: ", createdSkript.data ;
      } else {
        sails.log.debug("File upload failed.");
      }
    } else if (data.kategorie === 'Anleitung') {

      let uploadedFileName = await AnleitungController.uploadData(req, res);

      // Dann den Datensatz erstellen
      if (uploadedFileName) {
        let createdAnleitung = await Anleitung.create({ ...params, data: uploadedFileName }).fetch();
        sails.log.debug("Created Anleitung ID: ", createdAnleitung.id), "Created Anleitung Data: ", createdAnleitung.data ;
      } else {
        sails.log.debug("File upload failed.");
      }
    } else {
      req.session.message = 'Bitte alle Felder ausfüllen!';
      req.session.messageClass = 'text-warning';
      res.view('pages/ressources/upload', { messageClass: req.session.messageClass, message: req.session.message, studiengaenge, module });
      req.session.message = null;
      req.session.messageClass = null;
      return;
    }
    req.session.message = 'Erfolgreich erstellt!';
    req.session.messageClass = 'text-success';
    res.view('pages/ressources/upload', { messageClass: req.session.messageClass, message: req.session.message, studiengaenge, module });
    req.session.message = null;
    req.session.messageClass = null;
    return;
  }

}