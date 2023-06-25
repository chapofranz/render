module.exports = async function showAll(req, res) {
  if (!req.me) {
    return res.view('pages/entrance/login');
  }

  try {
    let currentUser;
    let currentUserId = req.session.userId;

    currentUser = await User.findOne({ id: currentUserId }).populate('studiengang');

    const kuerzel = req.params.kuerzel;
    
    const studiengang = await Studiengang.findOne({ kuerzel: kuerzel }); 

    console.log("Studiengang:", studiengang)

   
    if (!studiengang) {
      return res.serverError('Kein Studiengang mit diesem Kürzel gefunden');
    }


    const studiengangModulEinträge = await Studiengang_modul.find({ studiengang: studiengang.id });

    console.log("StudiengangMoudlEinträge", studiengangModulEinträge);

    
    const modulIds = studiengangModulEinträge.map(eintrag => eintrag.modul);

    console.log("ModulIDs:", modulIds)
    
    const skripte = await Skript.find({ modul: modulIds });
    const anleitungen = await Anleitung.find({ modul: modulIds });

    console.log("Skripte für" + kuerzel, skripte);
    
    console.log("Anleitungen für" + kuerzel, anleitungen);

    return res.view('pages/ressources/showAll', {
      skripte: skripte,
      anleitungen: anleitungen,
      currentUser: currentUser,
      kuerzel: kuerzel
    });
  } catch (err) {
    return res.serverError(err);
  }
};