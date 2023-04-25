module.exports.seed = {

  async seed() {

    const studiengaenge = [
      {
        name: 'Informatik',
        kuerzel: 'INF',
      },
      {
        name: 'Wirtschaftsinformatik',
        kuerzel: 'WIN',
      },
      {
        name: 'Gesundheitsinformatik',
        kuerzel: 'GIB',
      },
      {
        name: 'Maschinenbau Entwicklung und Produktion',
        kuerzel: 'MEP',
      },
      {
        name: 'Betriebswirtschaftslehre',
        kuerzel: 'BWL',
      },
      {
        name: 'Angewandte Informatik',
        kuerzel: 'AIN',
      },

    ];

    const roles = [
      {
        name: 'Admin',
        beschreibung: 'Administrator der Anwendung',
      },
      {
        name: 'Benutzer',
        beschreibung: 'Standardbenutzer der Anwendung',
      },
    ];

    for (const studiengang of studiengaenge) {
      await Studiengang.findOrCreate({ kuerzel: studiengang.kuerzel }, studiengang);
    }


    for (const role of roles) {
      await Role.findOrCreate({ name: role.name }, role);
    }
  }
};
    
