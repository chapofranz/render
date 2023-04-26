const Sails = require("sails/lib/app/Sails");

module.exports = {

    new: async function (req, res) {
        try {
            const studiengaenge = await Studiengang.find();
            const roles = await Role.find();
            return res.view('pages/upload', { studiengaenge, roles });
        } catch (err) {
            return res.serverError(err);
        }
    },

}