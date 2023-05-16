const Sails = require("sails/lib/app/Sails");

module.exports = {

    create: async function (req, res) {

        sails.log.debug("Erstellt Benutzter....");
        let params = req.allParams();
        sails.log.debug("Benutzer-Modell: ", Benutzer)
        sails.log.debug("Eingabeparameter: ", params);
        await Benutzer.create(params);
        let benutzer = await Benutzer.findOne({ nutzername: params.nutzername }).populate('role').populate('studiengang');

        if (!benutzer) {
            return res.status(404).send('Benutzer nicht gefunden');
        }

        req.session.userId = benutzer.id;
        req.session.userRole = benutzer.role.name;
        
        res.redirect(`/benutzer/dashboard/${benutzer.id}`);
    },

    login: async function (req, res) {
        sails.log.debug("Benutzer einloggen....");
        let params = req.allParams();
        let nutzername = params.nutzername;

        // let id = req.params.id;



        let benutzer = await Benutzer.findOne({ nutzername: nutzername }).populate('role');


        if (!benutzer) {
            sails.log.debug("Benutzer nicht gefunden");
            return res.status(401).send("Benutzer nicht gefunden");
        }
        if (benutzer.passwort === params.passwort) {

            sails.log.debug("Benutzer authenthifiziert");

            req.session.userId = benutzer.id;
            req.session.userRole = benutzer.role.name;

            res.redirect(`/benutzer/dashboard/${benutzer.id}`);

        } else {
            sails.log.debug("Falsches Passwort");
            res.status(401).send("Falsches Passwort");

        }
    },

    register: async function (req, res) {
        try {
            const studiengaenge = await Studiengang.find();
            const roles = await Role.find();
            return res.view('pages/benutzer/new', { studiengaenge, roles });
        } catch (err) {
            return res.serverError(err);
        }
    },

    findOne: async function (req, res) {
        let id = req.params.id;
        let benutzer = await Benutzer.findOne({ id: id });

        if (!benutzer) {
            return res.status(404).send('Benutzer nicht gefunden');
        }

        res.view('pages/benutzer/show', { benutzer: benutzer });
    },

    findOneDashboard: async function (req, res) {
        let id = req.params.id;
        let benutzer = await Benutzer.findOne({ id: id }).populate('studiengang').populate('role');

        if (!benutzer) {
            return res.status(404).send('Benutzer nicht gefunden');
        }

        res.view('pages/benutzer/dashboard', { benutzer: benutzer });
    },

    findAll: async function (req, res) {
        return res.json(benutzers);
    },

    updateOne: async function (req, res) {
        sails.log.debug("Update single user....")
        let benutzer = await Benutzer.updateOne({ id: req.params.id }).set(req.body);
        res.redirect('/benutzer');
    },

    editOne: async function (req, res) {
        sails.log.debug("Edit single user....")
        let benutzer = await Benutzer.findOne({ id: req.params.id }).populate('studiengang');
        res.view('pages/benutzer/edit', { benutzer: benutzer });
    },



    updateOne: async function (req, res) {
        sails.log.debug("Update single user....")
        let benutzer = await Benutzer.updateOne({ id: req.params.id }).set(req.body);
        res.redirect('/benutzer');
    },

    find: async function (req, res) {
        sails.log.debug("List all users....")
        let benutzers;
        if (req.query.q && req.query.q.length > 0) {
            benutzers = await Benutzer.find({
                nutzername: {
                    'contains': req.query.q
                }
            })
        } else {
            benutzers = await Benutzer.find().populate("studiengang");
        }
        res.view('pages/benutzer/index', { benutzers: benutzers });
    },

    destroyOne: async function (req, res) {
        sails.log.debug("Destroy single user....")
        let id = req.params.id;
        await Benutzer.destroyOne({ id: id });
        res.redirect('/benutzer');
    },


};