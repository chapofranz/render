module.exports = async function viewEditAll(req, res) {

    if (!req.me || !req.me.isSuperAdmin) {
      return res.unauthorized();
    }
  
    try {
      const users = await User.find();
      const studiengaenge = await Studiengang.find();
      const module = await Modul.find();
      const skripte = await Skript.find();
      const anleitungen = await Anleitung.find();
      
  
      return res.view('pages/admin/edit-all', { users, studiengaenge, module, skripte, anleitungen });
  
    } catch (err) {
    
      sails.log.error('Something went wrong in the view-edit-all controller:', err);
      return res.serverError();
    }
  };
  