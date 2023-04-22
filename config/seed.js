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

        for (const studiengang of studiengaenge) {
            await Studiengang.findOrCreate({ kuerzel: studiengang.kuerzel }, studiengang);
          }

        },
    };