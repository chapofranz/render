const Sails = require("sails/lib/app/Sails");


module.exports = {

create: async function (req, res) {
    sails.log.debug("Erstellt Rolle....");
    let params = req.allParams();
    await Role.create(params);
    res.redirect('/role');
  },

  findOne: async function (req, res) {
    let id = req.param('id');
    let role = await Role.findOne({ id: id });

    if (!role) {
      return res.status(404).send('Rolle nicht gefunden');
    }

    res.view('pages/role/show', { role: role });
  },

  findAll: async function (req, res) {
    let roles = await Role.find();
    return res.json(roles);
  },

  update: async function (req, res) {
    let id = req.param('id');
    let updatedParams = req.allParams();
    await Role.update({ id: id }, updatedParams);
    res.redirect(`/role/${id}`);
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single role....")
    let role = await Role.findOne({ id: req.params.id });
    res.view('pages/role/edit', { role: role });
  },

  delete: async function (req, res) {
    let id = req.param('id');
    await Role.destroy({ id: id });
    res.redirect('/role');
  },

  findOrCreate: async function (req, res) {
    const criteria = req.param("criteria");
    const values = req.allParams();

    const existingRecord = await Role.findOne(criteria);

    if (existingRecord) {
      return res.json(existingRecord);
    } else {
      const newRecord = await Role.create(values).fetch();
      return res.json(newRecord);
    }
  },
};