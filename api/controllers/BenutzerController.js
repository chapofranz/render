const Sails = require("sails/lib/app/Sails");

module.exports = {

    create: async function (req, res) {

        sails.log.debug("Erstellt Benutzter....");
        let params = req.allParams();
        sails.log.debug("Benutzer-Modell: ", Benutzer)
        await Benutzer.create(params);
        res.redirect('/benutzer');
    },

    login: async function (req, res) {
        sails.log.debug("Benutzer einloggen....");
        let params = req.allParams();
        let nutzername = params.nutzername;


        let benutzer = await Benutzer.findOne({ nutzername: nutzername });

        if (!benutzer) {
            sails.log.debug("Benutzer nicht gefunden");
            return res.status(401).send("Benutzer nicht gefunden");
        }
        if (benutzer.passwort === params.passwort) {
            sails.log.debug("Benutzer authenthifiziert");

            res.view('pages/benutzer/dashboard', {benutzer: benutzer});
        } else {
            sails.log.debug("Falsches Passwort");
            res.status(401).send("Falsches Passwort");
            
        }
    },

    register: async function(req,res) {
        try {
            const studiengaenge = await Studiengang.find();
            return res.view('pages/benutzer/new', { studiengaenge });
          } catch (err) {
            return res.serverError(err);
          }
    },

    findOne: async function (req, res) {
        let id = req.param('id');
        let benutzer = await Benutzer.findOne({ id: id });

        if (!benutzer) {
            return res.status(404).send('Benutzer nicht gefunden');
        }

        res.view('pages/benutzer/show', { benutzer: benutzer });
    },

    findAll: async function (req, res) {
        let benutzers = await Benutzer.find();
        res.view('pages/benutzer/list', { benutzers: benutzers });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let updatedParams = req.allParams();
        await Benutzer.update({ id: id }, updatedParams);
        res.redirect(`/benutzer/${id}`);
    },

    editOne: async function (req, res) {
        sails.log.debug("Edit single meal....")
        let benutzer = await Benutzer.findOne({ id: req.params.id }).populate('category');
        res.view('pages/meal/edit', { benutzer: benutzer });
    },


    delete: async function (req, res) {
        let id = req.param('id');
        await Benutzer.destroy({ id: id });
        res.redirect('/benutzer');
    },
};