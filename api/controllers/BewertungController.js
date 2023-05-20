const Sails = require("sails/lib/app/Sails");

module.exports = {

  create: async function (req, res) {

    const { userId, itemId, bewertung, type } = req.body;


    console.log("Received userId: ", userId);
    console.log("Received itemId: ", itemId);
    console.log("Received bewertung: ", bewertung);
    console.log("Received type: ", type);

    let bestehendeBewertung, bewertungen;
    let durchschnittBewertung, gesamtBewertungen;

    if (type==="skript") {
      try {
        bestehendeBewertung = await Bewertung.findOne({ user: userId, skript: itemId });
      } catch (error) {
        console.log("Fehler beim Abrufen der Bewertung - Skript : ", error)
      }

      if (bestehendeBewertung) {
        await Bewertung.updateOne({ id: bestehendeBewertung.id }).set({ wert: bewertung });
      } else {
        await Bewertung.create({ wert: bewertung, user: userId, skript: itemId });
      }

      try {
      bewertungen = await Bewertung.find({ skript: itemId });
      } catch (error) {
        console.log("Fehler beim Abrufen der Bewertungen - Skript: ", error)
      }

      gesamtBewertungen = bewertungen.reduce((sum, bewertung) => sum + bewertung.wert, 0);
      durchschnittBewertung = gesamtBewertungen / bewertungen.length;

      await Skript.updateOne({ id: itemId }).set({ averageRating: durchschnittBewertung });

    } else if (type==="anleitung") {
      try {
        bestehendeBewertung = await Bewertung.findOne({ user: userId, anleitung: itemId });
      } catch (error) {
        console.log("Fehler beim Abrufen der Bewertung: ", error);
      }
      
      if (bestehendeBewertung) {
        await Bewertung.updateOne({ id: bestehendeBewertung.id }).set({ wert: bewertung });
      } else {
        await Bewertung.create({ wert: bewertung, user: userId, anleitung: itemId });
      }

      try {
        bewertungen = await Bewertung.find({ anleitung: itemId });
      } catch (error) {
        console.log("Fehler beim Abrufen der Bewertungen - Anleitung: ", error)
      }

      gesamtBewertungen = bewertungen.reduce((sum, bewertung) => sum + bewertung.wert, 0);
      durchschnittBewertung = gesamtBewertungen / bewertungen.length;

      await Anleitung.updateOne({ id: itemId }).set({ averageRating: durchschnittBewertung });
    }

    console.log("bestehendeBewertung: ", bestehendeBewertung);
    console.log("bewertungen: ", bewertungen);
    console.log("gesamtBewertungen: ", gesamtBewertungen);
    console.log("durchschnittBewertung: ", durchschnittBewertung);

    return res.json({ averageRating: durchschnittBewertung });
  },

  findOne: async function (req, res) {
    let id = req.param('id');
    try {
      let bewertung = await Bewertung.findOne({ id: id });

      if (!bewertung) {
        return res.status(404).send('Bewertung nicht gefunden');
      }

      res.view('pages/bewertung/show', { bewertung: bewertung });
    } catch (error) {
      sails.log.error("Fehler beim Abrufen der Bewertung:", error);
      res.serverError("Fehler beim Abrufen der Bewertung");
    }
  },

  findAll: async function (req, res) {
    try {
      let bewertungen = await Bewertung.find();
      res.view('pages/bewertung/list', { bewertungen: bewertungen });
    } catch (error) {
      sails.log.error("Fehler beim Abrufen der Bewertungen:", error);
      res.serverError("Fehler beim Abrufen der Bewertungen");
    }
  },

  updateOne: async function (req, res) {

    let id = req.param('id');
    let updatedParams = req.allParams();

    try {
      await Bewertung.updateOne({ id: id }).set(updatedParams);
      res.redirect(`/bewertung/${id}`);
    } catch (error) {
      sails.log.error("Fehler beim Aktualisieren der Bewertung:", error);
      res.serverError("Fehler beim Aktualisieren der Bewertung");
    }
  },

  delete: async function (req, res) {
    let id = req.param('id');
    try {
      await Bewertung.destroyOne({ id: id });
      res.redirect('/bewertungen');
    } catch (error) {
      sails.log.error("Fehler beim Löschen der Bewertung:", error);
      res.serverError("Fehler beim Löschen der Bewertung");
    }
  },
  
  find: async function (req, res) {
    sails.log.debug("List all bewertungen....")
    let bewertungen;
    if (req.query.userId) {
      bewertungen = await Bewertung.find({ user: req.query.userId });
    } else if (req.query.anleitungId) {
      bewertungen = await Bewertung.find({ anleitung: req.query.anleitungId });
    } else if (req.query.skriptId) {
      bewertungen = await Bewertung.find({ skript: req.query.skriptId });
    } else {
      bewertungen = await Bewertung.find();
    }
    res.view('pages/bewertung/index', { bewertungen: bewertungen });
  },
};
