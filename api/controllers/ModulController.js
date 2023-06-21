
const Sails = require("sails/lib/app/Sails");

module.exports = {


    create: async function (req, res) {
        sails.log.debug("Erstellt Modul....");
        let params = req.allParams();

        sails.log.debug("Request params: ", params);
        sails.log.debug("Request body: ", req.body);



        await Modul.create(params);
        res.redirect('/modul');
    },

    destroy: async function (req, res) {
        sails.log.debug("Delete a single Modul....")
        let modul = await Modul.destroyOne({ id: req.params.id });
        // 
        res.redirect ('/admin' );
      },

      edit: async function (req, res) {
        sails.log.debug("Edit a single Moduk....")
        let modul = await Modul.findOne({ id: req.params.id });
        let studiengaenge = await Studiengang.find();
    
        res.view ('pages/modul/edit', { modul: modul, studiengaenge: studiengaenge } );
      },
    
    update: async function (req, res) {
        sails.log.debug("Update Modul....")
        let params = req.allParams();
        await Modul.updateOne({id: req.params.id}).set(params);
        res.redirect ('/admin' );
      },
    

    findOne: async function (req, res) {
        let id = req.param('id');
        let modul = await Modul.findOne({ id: id });

        if (!modul) {
            return res.status(404).send('Modul nicht gefunden');
        }

        res.view('/', { studiengang: studiengang });
    },

    find: async function (req, res) {
        sails.log.debug("List all Module...")
        let module;
        if (req.query.q && req.query.q.length > 0) {
            module = await Modul.find({
                name: {
                    'contains': req.query.q
                }
            })
        } else {
            module = await Modul.find();
        }
        res.view('pages/modul/index', { module: module });
    },

    findOrCreate: async function (req, res) {
        const criteria = req.param("criteria");
        const values = req.allParams();

        const existingRecord = await Modul.findOne(criteria);

        if (existingRecord) {
            return res.json(existingRecord);
        } else {
            const newRecord = await Modul.create(values).fetch();
            return res.json(newRecord);
        }
    }
};