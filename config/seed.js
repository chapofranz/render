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

    for (const studiengang of studiengaenge) {
      await Studiengang.findOrCreate({ kuerzel: studiengang.kuerzel }, studiengang);
    }


    for (const role of roles) {
      await Role.findOrCreate({ name: role.name }, role);
    }

    for (const skript of skripte) {
      await Skript.findOrCreate({ name: skript.name }, skript);
    }

    for (const anleitung of anleitungen) {
      await Anleitung.findOrCreate({ name: anleitung.name }, anleitung);
    }

  }
};

