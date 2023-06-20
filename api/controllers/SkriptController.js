const Sails = require("sails/lib/app/Sails");
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const https = require('https');
const ModulController = require("./ModulController");


module.exports = {

  create: async function (req, res) {
    sails.log.debug("Erstellt Skript....");
    let params = req.allParams();

    sails.log.debug("Request params: ", params);
    sails.log.debug("Request body: ", req.body);

    if (!params.name || !params.data || !params.author) {
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
  },

  uploadDataForm: async function (req, res) {
    sails.log.debug("Upload data form....")
    let skript = await Skript.findOne({ id: req.params.id })

    res.view('pages/ressoucres/upload', { skript: skript });
  },

  uploadData: async function (req, res) {
    sails.log("Upload data for skript...");
    let params = {
      adapter: require('skipper-s3'),
      key: sails.config.s3accesskey,
      secret: sails.config.s3secret,
      bucket: 'wetebucket',
      region: 'us-west-2'
    };

    let uploadedFiles = await new Promise((resolve, reject) => {
      req.file('data').upload(params, (err, files) => {
        if (err) {
          sails.log.error("Error during file upload: ", err);
          return reject(err);
        }
        resolve(files);
      });
    });

    if (uploadedFiles && uploadedFiles.length > 0) {
      sails.log.debug(uploadedFiles[0])
      let fname = require('path').basename(uploadedFiles[0].fd);
      return fname; // Rückgabe des Dateinamens
    } else {
      sails.log("No files were uploaded.");
      return null;
    }
  },
  destroy: async function (req, res) {
    sails.log.debug("Delete a single Skript....")
    let skript = await Skript.destroyOne({ id: req.params.id });
    // 
    res.redirect('/admin');
  },


  update: async function (req, res) {
    sails.log.debug("Update Skript....")
    let params = req.allParams();

    let uploadParams = {
      adapter: require('skipper-s3'),
      key: sails.config.s3accesskey,
      secret: sails.config.s3secret,
      bucket: 'wetebucket',
    };

    let uploadedFiles = await new Promise((resolve, reject) => {
      req.file('data').upload(uploadParams, (err, files) => {
        if (err) {
          sails.log.error("Error during file upload: ", err);
          return reject(err);
        }
        resolve(files);
      });
    });

    if (uploadedFiles && uploadedFiles.length > 0) {
      sails.log.debug(uploadedFiles[0])
      let fpath = uploadedFiles[0].fd; // Pfad zur Datei auf S3
      params.data = fpath; // Setze den Dateipfad
    } else {
      sails.log("No files were uploaded.");
    }

    // Aktualisiere das Skript mit den neuen Daten
    await Skript.updateOne({ id: req.params.id }).set(params);

    res.redirect('/admin');
  },

  edit: async function (req, res) {
    sails.log.debug("Edit a single Skript....")
    let skript = await Skript.findOne({ id: req.params.id }).populate('modul');
    let studiengaenge = await Studiengang.find();
    let module = await Modul.find();

    res.view('pages/skript/edit', { skript: skript, studiengaenge: studiengaenge, module: module });
  },




};
