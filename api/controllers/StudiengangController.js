
const Sails = require("sails/lib/app/Sails");

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
    res.redirect('/studiengang');
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
    let id = req.param('id');
    let updatedParams = req.allParams();
    await Studiengang.update({ id: id }, updatedParams);
    res.redirect(`/studiengang/${id}`);
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single studiengang....")
    let studiengang = await Studiengang.findOne({ id: req.params.id });
    res.view('pages/studiengang/edit', { studiengang: studiengang });
  },

  delete: async function (req, res) {
    let id = req.param('id');
    await Studiengang.destroy({ id: id });
    res.redirect('/studiengang');
  },


  show: async function (req, res) {

    let currentUser;
    let currentUserId = req.session.userId;
    let currentUserRole = req.session.userRole;
    sails.log.debug("CurrentUserId", currentUserId)
            sails.log.debug("CurrentUserRole", currentUserRole)


    try {
      currentUser = await Benutzer.findOne({id: currentUserId}).populate('role');
      const studiengaenge = await Studiengang.find();
      return res.view('pages/studiengang/show', { studiengaenge, currentUser });
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
        studiengaenge= await Studiengang.find();
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