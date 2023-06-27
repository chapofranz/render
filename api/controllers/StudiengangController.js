
const Sails = require("sails/lib/app/Sails");
var viewEditAll = require('./admin/view-edit-all');

module.exports = {

  create: async function (req, res) {
    sails.log.debug("Erstellt Studiengang....");
    let params = req.allParams();

    sails.log.debug("Request params: ", params);
    sails.log.debug("Request body: ", req.body);


    if (!params.kuerzel) {
      sails.log.error("Fehlender Wert für kuerzel");
      return res.badRequest("Fehlender Wert für kuerzel");
    }

    sails.log.debug("Studiengang-Modell: ", Studiengang)
    await Studiengang.create(params);

    await viewEditAll(req, res);
   


  },

  edit: async function (req, res) {
    sails.log.debug("Edit a single Studiengang....")
    let studiengang = await Studiengang.findOne({ id: req.params.id });
    let studiengaenge = await Studiengang.find();
    let module = await Modul.find();

    res.view ('pages/studiengang/edit', { studiengang: studiengang, studiengaenge: studiengaenge } );
  },


  findOne: async function (req, res) {
    let id = req.param('id');
    let studiengang = await Studiengang.findOne({ id: id });

    if (!studiengang) {
      return res.status(404).send('Studiengang nicht gefunden');
    }

    res.view('pages/studiengang/show', { studiengang: studiengang });
  },

  findAll: async function (req, res) {
    let studiengangs = await Studiengang.find();
    res.view('pages/studiengang/list', { studiengangs: studiengangs });
  },

  update: async function (req, res) {
    sails.log.debug("Update Studiengang....")
    let params = req.allParams();
    await Studiengang.updateOne({id: req.params.id}).set(params);
    res.redirect ('/admin' );
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single studiengang....")
    let studiengang = await Studiengang.findOne({ id: req.params.id });
    res.view('pages/studiengang/edit', { studiengang: studiengang });
  },

  destroy: async function (req, res) {
    sails.log.debug("Delete a single Studiengang....")
    let user = await Studiengang.destroyOne({ id: req.params.id });
    // 
    res.redirect ('/admin' );
  },


  show: async function (req, res) {

    let currentUser;
    let currentUserId = req.session.userId;
    try {
      currentUser = await User.findOne({ id: currentUserId })
      const studiengaenge = await Studiengang.find();
      return res.view('pages/studiengang/show', { studiengaenge, user: currentUser });
    } catch (err) {
      return res.serverError(err);
    }
  },


  findOrCreate: async function (req, res) {
    const criteria = req.param("criteria");
    const values = req.allParams();

    const existingRecord = await Studiengang.findOne(criteria);

    if (existingRecord) {
      return res.json(existingRecord);
    } else {
      const newRecord = await Studiengang.create(values).fetch();
      return res.json(newRecord);
    }
  },

  find: async function (req, res) {
    sails.log.debug("List all Studiengange....")
    let studiengaenge;
    if (req.query.q && req.query.q.length > 0) {
      studiengaenge = await Studiengang.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
      studiengaenge = await Studiengang.find();
    }
    res.view('pages/studiengang/index', { studiengaenge: studiengaenge });
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy single Studiengang....")
    let id = req.params.id;
    await Studiengang.destroyOne({ id: id });
    res.redirect('/studiengang/edit');
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update single Studiengang....")
    let studiengang = await Studiengang.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/studiengang');
  },

};