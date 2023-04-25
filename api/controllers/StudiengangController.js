
const Sails = require("sails/lib/app/Sails");

module.exports = {

    create: async function (req, res) {
      sails.log.debug("Erstellt Studiengang....");
      let params = req.allParams();
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
  };