const Sails = require("sails/lib/app/Sails");

module.exports = {
  create: async function (req, res) {
    sails.log.debug("Erstellt Anleitung....");
    let params = req.allParams();

    sails.log.debug("Request params: ", params);
    sails.log.debug("Request body: ", req.body);

    if (!params.name) {
      sails.log.error("Fehlender Wert für name");
      return res.badRequest("Fehlender Wert für name");
    }

    sails.log.debug("Anleitung-Modell: ", Anleitung)
    await Anleitung.create(params);
    res.redirect('/anleitung');
  },

  findOne: async function (req, res) {
    let id = req.param('id');
    let anleitung = await Anleitung.findOne({ id: id });

    if (!anleitung) {
      return res.status(404).send('Anleitung nicht gefunden');
    }

    res.view('pages/anleitung/show', { anleitung: anleitung });
  },

  findAll: async function (req, res) {
    let anleitungen = await Anleitung.find();
    res.view('pages/anleitung/list', { anleitungen: anleitungen });
  },

  update: async function (req, res) {
    let id = req.param('id');
    let updatedParams = req.allParams();
    await Anleitung.update({ id: id }, updatedParams);
    res.redirect(`/anleitung/${id}`);
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update single anleitung...")
    let anleitung = await Anleitung.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/anleitung');
},

  editOne: async function (req, res) {
    sails.log.debug("Edit single anleitung....")
    let anleitung = await Anleitung.findOne({ id: req.params.id });
    res.view('pages/anleitung/edit', { anleitung: anleitung });
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy single anleitung....")
    let id = req.params.id;
    await Anleitung.destroyOne({ id: id });
    res.redirect('/anleitung/edit');
  },
  

  findOrCreate: async function (req, res) {
    const criteria = req.param("criteria");
    const values = req.allParams();

    const existingRecord = await Anleitung.findOne(criteria);

    if (existingRecord) {
      return res.json(existingRecord);
    } else {
      if (values.averageRating==undefined) {
        values.averageRating = 0;
      }
      const newRecord = await Anleitung.create(values).fetch();
      return res.json(newRecord);
    }
  },

  show: async function (req, res) {

    let currentUser;
    let currentUserId = req.session.userId;
    let currentUserRole = req.session.userRole;
    sails.log.debug("CurrentUserId", currentUserId)
    sails.log.debug("CurrentUserRole", currentUserRole)


    try {
      currentUser = await Benutzer.findOne({ id: currentUserId }).populate('role');
      const anleitungen = await Anleitung.find();
      return res.view('pages/anleitung/show', { anleitungen, currentUser });
    } catch (err) {
      return res.serverError(err);
    }
  },


  find: async function (req, res) {
    sails.log.debug("List all anleitungen....")
    let anleitungen;
    if (req.query.q && req.query.q.length > 0) {
      anleitungen = await Anleitung.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
      anleitungen = await Anleitung.find();
    }
    res.view('pages/anleitung/index', { anleitungen: anleitungen });
  },

  download: async function (req, res) {
    let id = req.param('id');
    let anleitung = await Anleitung.findOne({ id: id });

    if (!anleitung) {
      return res.status(404).send('Anleitung nicht gefunden');
    }

    let filePath = anleitung.pfad;

    sails.log.debug("Pfad", filePath);
    sails.log.debug("Name", anleitung.name)

    res.download(filePath);
  },
};