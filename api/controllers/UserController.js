const Sails = require("sails/lib/app/Sails");


module.exports = {

  create: async function (req, res) {
    sails.log.debug("Create user....")
    let params = req.allParams();
    await User.create(params);
    let user = await User.findOne({userName: params.userName}).populate("studiengang");
    if (!user) {
      return res.status(404).send('Benutzer nicht gefunden');
  }
    res.redirect ('/user/dashboard' );
  },

  find: async function (req, res) {
    sails.log.debug("List all users....")
    let users = await User.find();
    if (req.query.q && req.query.q.length > 0) {
      users = await User.find({
          userName: {
              'contains': req.query.q
          }
      })
  } else {
      users = await User.find().populate("studiengang");
  }
    res.view ('pages/user/index', { users: users } );
  },


  findOne: async function (req, res) {
    sails.log.debug("List a single user....")
    let user = await User.findOne({ id: req.params.id });
    res.view ('pages/user/show', { user: user } );
  },
  
  edit: async function (req, res) {
    sails.log.debug("Edit a single user....")
    let user = await User.findOne({ id: req.params.id }).populate('studiengang');
    let studiengaenge = await Studiengang.find();

    res.view ('pages/user/edit', { user: user, studiengaenge: studiengaenge } );
  },

  destroy: async function (req, res) {
    sails.log.debug("Delete a single user....")
    let user = await User.destroyOne({ id: req.params.id });
    // 
    res.redirect ('/admin' );
  },
  update: async function (req, res) {
    sails.log.debug("Update users....")
    let params = req.allParams();
    await User.updateOne({id: req.params.id}).set(params);
    res.redirect ('/admin' );
  },

  findAll: async function (req, res) {
    let benutzers = await User.find();
    return res.json(benutzers);
},

};
