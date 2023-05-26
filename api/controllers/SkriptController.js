const Sails = require("sails/lib/app/Sails");
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

module.exports = {

    create: async function (req, res) {
        sails.log.debug("Erstellt Skript....");
        let params = req.allParams();

        sails.log.debug("Request params: ", params);
        sails.log.debug("Request body: ", req.body);

        if (!params.name || !params.pfad || !params.author) {
            sails.log.error("Fehlende Werte");
            return res.badRequest("Fehlende Werte");
        }

        sails.log.debug("Skript-Modell: ", Skript)
        await Skript.create(params);
        res.redirect('/skript');
    },

    findOne: async function (req, res) {
        let id = req.param('id');
        let skript = await Skript.findOne({ id: id });

        if (!skript) {
            return res.status(404).send('Skript nicht gefunden');
        }

        res.view('pages/skript/show', { skript: skript });
    },

    findAll: async function (req, res) {
        let skripte = await Skript.find();
        res.view('pages/skript/list', { skripte: skripte });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let updatedParams = req.allParams();
        await Skript.update({ id: id }, updatedParams);
        res.redirect(`/skript/${id}`);
    },

    updateOne: async function (req, res) {
        sails.log.debug("Update single Skript...")
        let skript = await Skript.updateOne({ id: req.params.id }).set(req.body);
        res.redirect('/skript');
    },

    editOne: async function (req, res) {
        sails.log.debug("Edit single skript....")
        let skript = await Skript.findOne({ id: req.params.id });
        res.view('pages/skript/edit', { skript: skript });
    },

    destroyOne: async function (req, res) {
        sails.log.debug("Destroy single Skript....")
        let id = req.params.id;
        await Skript.destroyOne({ id: id });
        res.redirect('/skript/edit');
      },
    download: async function (req, res) {
        let id = req.param('id');
        let skript = await Skript.findOne({ id: id });
      
        if (!skript) {
          return res.status(404).send('Skript nicht gefunden');
        }
      
        let filePath = skript.pfad;

        sails.log.debug("Pfad", filePath);
        sails.los.debug("Name", skript.name)
        res.download(filePath);
      },

    find: async function (req, res) {
        sails.log.debug("List all Skripte....")
        let skripte;
        if (req.query.q && req.query.q.length > 0) {
            skripte = await Skript.find({
                name: {
                    'contains': req.query.q
                }
            })
        } else {
            skripte = await Skript.find();
        }
        res.view('pages/skript/index', { skripte: skripte });
    },
    findOrCreate: async function (req, res) {
        const criteria = {
          name: req.param("name"),
          // modul: req.param("modul")
        };
        let values = req.allParams();
      
        const existingRecord = await Skript.findOne(criteria);
      
        if (existingRecord) {
          return res.json(existingRecord);
        } else {
        
          if (values.averageRating === undefined) {
            values.averageRating = 0;
          }
          const newRecord = await Skript.create(values).fetch();
          return res.json(newRecord);
        }
      }
};
