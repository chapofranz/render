module.exports = {

  async seed() {


    async function uploadFile(filePath) {
      const params = {
        adapter: require('skipper-s3'),
        key: sails.config.s3accesskey,
        secret: sails.config.s3secret,
        bucket: 'wetebucket',
        region: 'us-west-2'
      };

      return new Promise((resolve, reject) => {
        fs.createReadStream(filePath).pipe(require('skipper-s3')(params).receive({
          dirname: path.dirname(filePath)
        }, (err, files) => {
          if (err) return reject(err);
          resolve(files[0].extra.Key);
        }));
      });
    }


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



    const skripte = [
      {
        name: 'Einführung in die Informatik',
        beschreibung: 'Grundlagen der Informatik für Anfänger',
        data: 'TestRessourcen/Skripte/SWAR_01.pdf',
        author: 'Prof. Dr. Max Mustermann',
      },
      {
        name: 'Datenbanken',
        beschreibung: 'Konzepte und Techniken der Datenbanken',
        data: 'TestRessourcen/Skripte/SWAR_02.pdf',
        author: 'Prof. Dr. Erika Musterfrau',
      },
      {
        name: 'Software Engineering',
        beschreibung: 'Methoden und Praktiken für die Softwareentwicklung',
        data: 'TestRessourcen/Skripte/SWAR_03.pdf',
        author: 'Dr. John Doe',
      },
      {
        name: 'Künstliche Intelligenz',
        beschreibung: 'Grundlagen und Anwendungen der KI',
        data: 'TestRessourcen/Skripte/SWAR_04.pdf',
        author: 'Dr. Jane Smith',
      },
      {
        name: 'Betriebssysteme',
        beschreibung: 'Grundlagen und Funktionen von Betriebssystemen',
        data: 'TestRessourcen/Skripte/SWAR_05.pdf',
        author: 'Prof. Dr. Laura Müller',
      },
      {
        name: 'IT-Sicherheit',
        beschreibung: 'Sicherheitsaspekte und Schutzmaßnahmen in der IT',
        data: 'TestRessourcen/Skripte/PythonThinkstats2.pdf',
        author: 'Dr. Peter Schneider',
      },



      {
        name: 'E-Commerce',
        beschreibung: 'Geschäftsmodelle und Technologien im E-Commerce',
        data: 'TestRessourcen/Skripte/ProgrammierFragenNew.pdf',
        author: 'Dr. Maria Lopez',
      },
      {
        name: 'Data Science',
        beschreibung: 'Grundlagen und Anwendungen der Data Science',
        data: 'TestRessourcen/Skripte/ProgrammierungFragen.pdf',
        author: 'Prof. Dr. Thomas Müller',
      },
      {
        name: 'Informationssysteme',
        beschreibung: 'Grundlagen und Architekturen von Informationssystemen',
        data: 'TestRessourcen/Skripte/ProgTheorie.pdf',
        author: 'Dr. Anna Weber',
      },

    ];

    const anleitungen = [
      {
        name: 'Anleitung A',
        beschreibung: 'Beschreibung für Anleitung A',
        data: 'TestRessourcen/Anleitungen/BesyFragenKlausur.pdf',
        author: 'Autor A',

      },
      {
        name: 'Anleitung B',
        beschreibung: 'Beschreibung für Anleitung B',
        data: 'TestRessourcen/Anleitungen/IRW_Vorlesung_SoSe22_Verfahren_Kostenträgerrechnung.pdf',
        author: 'Autor B',
      },
      {
        name: 'Anleitung C',
        beschreibung: 'Beschreibung für Anleitung C',
        data: 'TestRessourcen/Anleitung/PapulaMathematikFuerIngenieure.pdf',
        author: 'Autor C',
      },
      {
        name: 'Anleitung D',
        beschreibung: 'Beschreibung für Anleitung D',
        data: 'TestRessourcen/Anleitungen/Datenbanken_Übungen.pdf',
        author: 'Autor D',
      },
      {
        name: 'Anleitung E',
        beschreibung: 'Beschreibung für Anleitung E',
        data: 'TestRessourcen/Anleitungen/ERP_Systeme_Einführung.pdf',
        author: 'Autor E',
      },
      {
        name: 'Anleitung F',
        beschreibung: 'Beschreibung für Anleitung F',
        data: 'TestRessourcen/Anleitung/Programmieren_in_Java.pdf',
        author: 'Autor F',
      },
      {
        name: 'Programmieren mit Python',
        beschreibung: 'Einführung in die Programmierung mit Python',
        data: 'TestRessourcen/Anleitungen/Python_Programmierung.pdf',
        author: 'Autor G',
      },
      {
        name: 'Web-Entwicklung',
        beschreibung: 'Entwicklung von Web-Anwendungen mit HTML, CSS und JavaScript',
        data: 'TestRessourcen/Anleitungen/Web_Entwicklung.pdf',
        author: 'Autor H',
      },
      {
        name: 'IT-Management',
        beschreibung: 'Grundlagen und Praktiken des IT-Managements',
        data: 'TestRessourcen/Anleitungen/IT_Management.pdf',
        author: 'Autor I',
      },
      {
        name: 'Data Mining',
        beschreibung: 'Grundlagen und Techniken des Data Mining',
        data: 'TestRessourcen/Anleitungen/Data_Mining.pdf',
        author: 'Autor J',
      },
      {
        name: 'IT-Recht',
        beschreibung: 'Grundlagen und Praktiken des IT-Rechts',
        data: 'TestRessourcen/Anleitungen/IT_Recht.pdf',
        author: 'Autor K',
      },
    ];

    const module = [

      {
        name: 'Programmieren 1',
        beschreibung: 'Einführung in die Programmierung mit Java',
        studiengang_modul: [],
        anleitung: [],
        skript: [],
      },

      {
        name: 'BWL 1',
        beschreibung: 'Einführung in die Betriebswirtschaftslehre',
        studiengang_modul: [],
        anleitung: [],
        skript: [],

      },
      {
        name: 'Internes Rechnungswesen',
        beschreibung: 'Einführung in das intere RW',
        studiengang_modul: [],
        anleitung: [],
        skript: [],

      },
      {
        name: 'Externes Rechnungswesen',
        beschreibung: 'Einführung in das exteren RW',
        studiengang_modul: [],
        anleitung: [],
        skript: [],

      },

      {
        name: 'Programmieren 2',
        beschreibung: 'Programmieren für Fortgeschrittene',
        studiengang_modul: [],
        anleitung: [],
        skript: [],

      }


    ]

    for (const modul of module) {
      await Modul.findOrCreate({ name: modul.name }, modul)
    }

    for (const studiengang of studiengaenge) {
      await Studiengang.findOrCreate({ kuerzel: studiengang.kuerzel }, studiengang);
    }
    for (const skript of skripte) {
      // const uploadedFilePath = await uploadFile(skript.data);
      // skript.data = uploadedFilePath;
      await Skript.findOrCreate({ name: skript.name }, skript);
    }

    for (const anleitung of anleitungen) {
      // const uploadedFilePath = await uploadFile(anleitung.data);
      // anleitung.data = uploadedFilePath;
      await Anleitung.findOrCreate({ name: anleitung.name }, anleitung);
    }
  }

};