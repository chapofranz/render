const Sails = require("sails/lib/app/Sails");

module.exports = {

    new: async function (req, res) {
        try {
            const studiengaenge = await Studiengang.find();
            const roles = await Role.find();
            const module = await Modul.find();
            return res.view('pages/upload', { studiengaenge, roles, module });
        } catch (err) {
            return res.serverError(err);
        }
    },

    save: async function (req, res) {
        const data = req.body;
        let params = req.allParams();
    //     req.file('file').upload(function (err, files) {
    //   if (err)
    //     return res.serverError(err);
    // })
        sails.log.debug("Eingabeparameter: ", params);

        if (data.kategorie === 'Skript') {
          await Skript.create(params);
        } else if (data.kategorie === 'Anleitung') {

          await Anleitung.create(params)

        } else {
          return res.status(400).json({ success: false, message: 'Ungültige Kategorie' });
        }
        return res.status(200).json({ success: true, message: 'Erfolgreich erstellt!' }) /*&& return res.json({
        message: files.length + ' file(s) uploaded successfully!', files: files });*/;
      }}

//   upload: function  (req, res) {
//     req.file('file').upload(function (err, files) {
//       if (err)
//         return res.serverError(err);
//     });
//   }
// }
