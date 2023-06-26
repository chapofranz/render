const Sails = require("sails/lib/app/Sails");

module.exports = {
  list: async function (req, res) {
    try {
      const dozenten = await Dozent.find();
      res.view('pages/dozenten/show', { dozenten });
    } catch (error) {
      res.serverError(error);
    }
  }
};
