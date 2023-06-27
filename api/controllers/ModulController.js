
const Sails = require("sails/lib/app/Sails");
var viewEditAll = require('./admin/view-edit-all');


module.exports = {


    getModulesForStudiengang: async function (req, res) {
        const studiengangId = req.params.id;
        const studiengang_modul = await Studiengang_modul.find({ studiengang: studiengangId });
        const moduleIds = studiengang_modul.map(sm => sm.modul);
        const module = await Modul.find({ id: moduleIds });
        return res.json(module);
    },


    new: async function (req, res) {

        let studiengaenge = await Studiengang.find();

        sails.log.debug("Studiengane", studiengaenge);
        res.view('pages/modul/new', { studiengaenge: studiengaenge });
    },

    create: async function (req, res) {
        sails.log.debug("Erstellt Modul....");
        let params = req.allParams();

        sails.log.debug("Request params: ", params);
 

        // Erstellen Sie das Modul zuerst
        const createdModul = await Modul.create(params).fetch();

      
        const studiengaenge = req.body.studiengang;


        sails.log.debug("params.stud", studiengaenge)
        
        if (Array.isArray(studiengaenge)) {
            for (const studiengangId of studiengaenge) {
                sails.log.debug("Id", studiengangId);
                await Studiengang_modul.create({ studiengang: studiengangId, modul: createdModul.id });
            }
        }

        await viewEditAll(req, res);
    },

    destroy: async function (req, res) {
        sails.log.debug("Delete a single Modul....")
        let modul = await Modul.destroyOne({ id: req.params.id });
        // 
        res.redirect('/admin');
    },

    edit: async function (req, res) {
        sails.log.debug("Edit a single Modul....")
        const modul = await Modul.findOne({ id: req.params.id }).populate('studiengang_modul');

        let studiengaenge = await Studiengang.find();

        res.view('pages/modul/edit', { modul: modul, studiengaenge: studiengaenge });
    },

    update: async function (req, res) {
        sails.log.debug("Update Modul....");
        let params = req.allParams();
    
    
        await Modul.updateOne({ id: req.params.id }).set(params);
    
     
        await Studiengang_modul.destroy({ modul: req.params.id });
    
       
        const studiengaenge = req.body.studiengang;

        sails.log.debug("stud", studiengaenge);

        if (Array.isArray(studiengaenge)) {
            for (const studiengangId of studiengaenge) {
                sails.log.debug("studID", studiengangId);
                await Studiengang_modul.create({ studiengang: studiengangId, modul: req.params.id });
            }
        }
    
        res.redirect('/admin');
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