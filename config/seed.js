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

   

    const skripte = [
      {
        name: 'Einführung in die Informatik',
        beschreibung: 'Grundlagen der Informatik für Anfänger',
        pfad: '/TestRessourcen/Skripte/SWAR_01.pdf',
        author: 'Prof. Dr. Max Mustermann',
      },
      {
        name: 'Datenbanken',
        beschreibung: 'Konzepte und Techniken der Datenbanken',
        pfad: '/TestRessourcen/Skripte/SWAR_02.pdf',
        author: 'Prof. Dr. Erika Musterfrau',
      },
      {
        name: 'Software Engineering',
        beschreibung: 'Methoden und Praktiken für die Softwareentwicklung',
        pfad: '/TestRessourcen/Skripte/SWAR_03.pdf',
        author: 'Dr. John Doe',
      },
      {
        name: 'Künstliche Intelligenz',
        beschreibung: 'Grundlagen und Anwendungen der KI',
        pfad: '/TestRessourcen/Skripte/SWAR_04.pdf',
        author: 'Dr. Jane Smith',
      },
      {
        name: 'Betriebssysteme',
        beschreibung: 'Grundlagen und Funktionen von Betriebssystemen',
        pfad: '/TestRessourcen/Skripte/SWAR_05.pdf',
        author: 'Prof. Dr. Laura Müller',
      },
      {
        name: 'IT-Sicherheit',
        beschreibung: 'Sicherheitsaspekte und Schutzmaßnahmen in der IT',
        pfad: '/TestRessourcen/Skripte/SWAR_06.pdf',
        author: 'Dr. Peter Schneider',
      },
      {
        name: 'IT-Projektmanagement',
        beschreibung: 'Methoden und Techniken für erfolgreiches IT-Projektmanagement',
        pfad: '/TestRessourcen/Skripte/SWAR_07.pdf',
        author: 'Prof. Dr. Sabine Meier',
      },

      {
        name: 'Business Intelligence',
        beschreibung: 'Konzepte und Anwendungen von BI im Unternehmen',
        pfad: '/TestRessourcen/Skripte/SWAR_08.pdf',
        author: 'Prof. Dr. Hans Schmidt',
      },
      {
        name: 'E-Commerce',
        beschreibung: 'Geschäftsmodelle und Technologien im E-Commerce',
        pfad: '/TestRessourcen/Skripte/SWAR_09.pdf',
        author: 'Dr. Maria Lopez',
      },
      {
        name: 'Data Science',
        beschreibung: 'Grundlagen und Anwendungen der Data Science',
        pfad: '/TestRessourcen/Skripte/SWAR_10.pdf',
        author: 'Prof. Dr. Thomas Müller',
      },
      {
        name: 'Informationssysteme',
        beschreibung: 'Grundlagen und Architekturen von Informationssystemen',
        pfad: '/TestRessourcen/Skripte/SWAR_11.pdf',
        author: 'Dr. Anna Weber',
      },
      {
        name: 'ERP-Systeme',
        beschreibung: 'Grundlagen und Implementierung von ERP-Systemen',
        pfad: '/TestRessourcen/Skripte/SWAR_12.pdf',
        author: 'Prof. Dr. Markus Schmitz',
      },
    ];

    const anleitungen = [
      {
        name: 'Anleitung A',
        beschreibung: 'Beschreibung für Anleitung A',
        pfad: '/TestRessourcen/Anleitungen/BesyFragenKlausur.pdf',
        author: 'Autor A',
      },
      {
        name: 'Anleitung B',
        beschreibung: 'Beschreibung für Anleitung B',
        pfad: '/TestRessourcen/Anleitungen/IRW_Vorlesung_SoSe22_Verfahren_Kostenträgerrechnung.pdf',
        author: 'Autor B',
      },
      {
        name: 'Anleitung C',
        beschreibung: 'Beschreibung für Anleitung C',
        pfad: '/TestRessourcen/Anleitung/PapulaMathematikFuerIngenieure.pdf',
        author: 'Autor C',
      },
      {
        name: 'Anleitung D',
        beschreibung: 'Beschreibung für Anleitung D',
        pfad: '/TestRessourcen/Anleitungen/Datenbanken_Übungen.pdf',
        author: 'Autor D',
      },
      {
        name: 'Anleitung E',
        beschreibung: 'Beschreibung für Anleitung E',
        pfad: '/TestRessourcen/Anleitungen/ERP_Systeme_Einführung.pdf',
        author: 'Autor E',
      },
      {
        name: 'Anleitung F',
        beschreibung: 'Beschreibung für Anleitung F',
        pfad: '/TestRessourcen/Anleitung/Programmieren_in_Java.pdf',
        author: 'Autor F',
      },
      {
        name: 'Programmieren mit Python',
        beschreibung: 'Einführung in die Programmierung mit Python',
        pfad: '/TestRessourcen/Anleitungen/Python_Programmierung.pdf',
        author: 'Autor G',
      },
      {
        name: 'Web-Entwicklung',
        beschreibung: 'Entwicklung von Web-Anwendungen mit HTML, CSS und JavaScript',
        pfad: '/TestRessourcen/Anleitungen/Web_Entwicklung.pdf',
        author: 'Autor H',
      },
      {
        name: 'IT-Management',
        beschreibung: 'Grundlagen und Praktiken des IT-Managements',
        pfad: '/TestRessourcen/Anleitungen/IT_Management.pdf',
        author: 'Autor I',
      },
      {
        name: 'Data Mining',
        beschreibung: 'Grundlagen und Techniken des Data Mining',
        pfad: '/TestRessourcen/Anleitungen/Data_Mining.pdf',
        author: 'Autor J',
      },
      {
        name: 'IT-Recht',
        beschreibung: 'Grundlagen und Praktiken des IT-Rechts',
        pfad: '/TestRessourcen/Anleitungen/IT_Recht.pdf',
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
        name: 'BWL 2',
        beschreibung: 'Einführung in die Absatzplanung',
        studiengang_modul: [],
        anleitung: [],
        skript: [],

      }

    ]
    const dozenten = [
      {
        email: 'rebekka.axthelm@htwg-konstanz.de',
        vorname: 'Rebekka',
        nachname: 'Axthelm',
        telefonnummer: '+49 7531 206-503',
        studiengang: []
      },
      {
        email: 'bittel@htwg-konstanz.de',
        vorname: 'Oliver',
        nachname: 'Bittel',
        telefonnummer: '+49 7531 206-626',
        studiengang: []
      },
      {
        email: 'mblaich@htwg-konstanz.de',
        vorname: 'Michael',
        nachname: 'Blaich',
        telefonnummer: '+49 7531 206-514',
        studiengang: []
      },
      {
        email: 'marko.boger@htwg-konstanz.de',
        vorname: 'Marko',
        nachname: 'Boger',
        telefonnummer: '+49 7531 206-631',
        studiengang: []
      },
      {
        email: 'doris.bohnet@htwg-konstanz.de',
        vorname: 'Doris',
        nachname: 'Bohnet',
        telefonnummer: '+49 7531 206-508',
        studiengang: []
      },
      {
        email: 'renato.dambe@htwg-konstanz.de',
        vorname: 'Renato',
        nachname: 'Dambe',
        telefonnummer: '+49 7531 206-781',
        studiengang: []
      },
      {
        email: 'drachen@htwg-konstanz.de',
        vorname: 'Heiko',
        nachname: 'Drachenfels',
        telefonnummer: '+49 7531 206-643',
        studiengang: []
      },
      {
        email: 'oliver.duerr@htwg-konstanz.de',
        vorname: 'Oliver',
        nachname: 'Dürr',
        telefonnummer: '+49 7531 206-507',
        studiengang: []
      },
      {
        email: 'eck@htwg-konstanz.de',
        vorname: 'Oliver',
        nachname: 'Eck',
        telefonnummer: '+49 7531 206-630',
        studiengang: []
      },
      {
        email: 'meiglspe@htwg-konstanz.de',
        vorname: 'Markus Joachim',
        nachname: 'Eiglsperger',
        telefonnummer: '+49 7531 206-462',
        studiengang: []
      },
      {
        email: 'mfranz@htwg-konstanz.de',
        vorname: 'Matthias',
        nachname: 'Franz',
        telefonnummer: '+49 7531 206-651',
        studiengang: []
      },
      {
        email: 'haase@htwg-konstanz.de',
        vorname: 'Oliver',
        nachname: 'Haase',
        telefonnummer: '+49 7531 206-9140',
        studiengang: []
      },
      {
        email: 'Alexander.Hoffmann@htwg-konstanz.de',
        vorname: 'Alexander',
        nachname: 'Hoffmann',
        telefonnummer: '+49 7531 206-596',
        studiengang: []
      },
      {
        email: 'hanno.langweg@htwg-konstanz.de',
        vorname: 'Hanno',
        nachname: 'Langweg',
        telefonnummer: '+49 7531 206-9024',
        studiengang: []
      },
      {
        email: 'maechtel@htwg-konstanz.de',
        vorname: 'Michael',
        nachname: 'Mächtel',
        telefonnummer: '+49 7531 206-632',
        studiengang: []
      },
      {
        email: 'rmartin@htwg-konstanz.de',
        vorname: 'Reiner',
        nachname: 'Martin',
        telefonnummer: '+49 7531 206-509',
        studiengang: []
      },
      {
        email: 'marco.mevius@htwg-konstanz.de',
        vorname: 'Marco',
        nachname: 'Mevius',
        telefonnummer: '+49 7531 206-515',
        studiengang: []
      },
      {
        email: 'Sonja.Meyer@htwg-konstanz.de',
        vorname: 'Sonja',
        nachname: 'Meyer',
        telefonnummer: '+49 7531 206-398',
        studiengang: []
      },

      {
        email: 'rainer.mueller@htwg-konstanz.de',
        vorname: 'Rainer',
        nachname: 'Mueller',
        telefonnummer: '+49 7531 206-329',
        studiengang: []
      },
      {
        email: 'juergen.neuschwander@htwg-konstanz.de',
        vorname: 'Jürgen',
        nachname: 'Neuschwander',
        telefonnummer: '-',
        studiengang: []
      },
      {
        email: 'christopher.rentrop@htwg-konstanz.de',
        vorname: 'Christopher',
        nachname: 'Rentrop',
        telefonnummer: '+49 7531 206-499',
        studiengang: []
      },
      {
        email: 'ralf.schimkat@htwg-konstanz.de',
        vorname: 'Ralf',
        nachname: 'Schimkat',
        telefonnummer: '+49 7531 206-720',
        studiengang: []
      },
      {
        email: 'johannes.schneider@htwg-konstanz.de',
        vorname: 'Johannes',
        nachname: 'Schneider',
        telefonnummer: '+49 7531 206-9043',
        studiengang: []
      },
      {
        email: 'irenaeus.schoppa@htwg-konstanz.de',
        vorname: 'Irenäus',
        nachname: 'Schoppa',
        telefonnummer: '+49 7531 206-644',
        studiengang: []
      },
      {
        email: 'ralf.seepold@htwg-konstanz.de',
        vorname: 'Ralf',
        nachname: 'Seepold',
        telefonnummer: '+49 7531 206-633',
        studiengang: []
      },
      {
        email: 'stefan.sohn@htwg-konstanz.de',
        vorname: 'Stefan',
        nachname: 'Sohn',
        telefonnummer: '+49 7531 206-506',
        studiengang: []
      },
      {
        email: 'barbara.staehle@htwg-konstanz.de',
        vorname: 'Barbara',
        nachname: 'Staehle',
        telefonnummer: '+49 7531 206-627',
        studiengang: []
      },
      {
        email: 'dirk.staehle@htwg-konstanz.de',
        vorname: 'Dirk',
        nachname: 'Staehle',
        telefonnummer: '+49 7531 206-645',
        studiengang: []
      },
      {
        email: 'umlauf@htwg-konstanz.de',
        vorname: 'Georg',
        nachname: 'Umlauf',
        telefonnummer: '+49 7531 206-702',
        studiengang: []
      },
      {
        email: 'christian.wache@htwg-konstanz.de',
        vorname: 'Christian',
        nachname: 'Wache',
        telefonnummer: '+49 7531 206-9017',
        studiengang: []
      },
      {
        email: 'juergen.waesch@htwg-konstanz.de',
        vorname: 'Jürgen',
        nachname: 'Wäsch',
        telefonnummer: '+49 7531 206-502',
        studiengang: []
      }

    ]

    for (const modul of module) {
      await Modul.findOrCreate({name: modul.name}, modul)
    }

    for (const studiengang of studiengaenge) {
      await Studiengang.findOrCreate({ kuerzel: studiengang.kuerzel }, studiengang);
    }

    for (const skript of skripte) {
      await Skript.findOrCreate({ name: skript.name }, skript);
    }

    for (const anleitung of anleitungen) {
      await Anleitung.findOrCreate({ name: anleitung.name }, anleitung);
    }

    for (const dozent of dozenten) {
      await Dozent.findOrCreate({nachname: dozent.nachname}, dozent);
    }
  }
};

