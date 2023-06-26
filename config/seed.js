module.exports = {

  async seed() {


    const dozenten = [
      {
        email: 'rebekka.axthelm@htwg-konstanz.de',
        vorname: 'Rebekka',
        nachname: 'Axthelm',
        telefonnummer: '+49 7531 206-503'
      },
      {
        email: 'bittel@htwg-konstanz.de',
        vorname: 'Oliver',
        nachname: 'Bittel',
        telefonnummer: '+49 7531 206-626'
      },
      {
        email: 'mblaich@htwg-konstanz.de',
        vorname: 'Michael',
        nachname: 'Blaich',
        telefonnummer: '+49 7531 206-514'
      },
      {
        email: 'marko.boger@htwg-konstanz.de',
        vorname: 'Marko',
        nachname: 'Boger',
        telefonnummer: '+49 7531 206-631'
      },
      {
        email: 'doris.bohnet@htwg-konstanz.de',
        vorname: 'Doris',
        nachname: 'Bohnet',
        telefonnummer: '+49 7531 206-508'
      },
      {
        email: 'renato.dambe@htwg-konstanz.de',
        vorname: 'Renato',
        nachname: 'Dambe',
        telefonnummer: '+49 7531 206-781'
      },
      {
        email: 'drachen@htwg-konstanz.de',
        vorname: 'Heiko',
        nachname: 'Drachenfels',
        telefonnummer: '+49 7531 206-643'
      },
      {
        email: 'oliver.duerr@htwg-konstanz.de',
        vorname: 'Oliver',
        nachname: 'Dürr',
        telefonnummer: '+49 7531 206-507'
      },
      {
        email: 'eck@htwg-konstanz.de',
        vorname: 'Oliver',
        nachname: 'Eck',
        telefonnummer: '+49 7531 206-630'
      },
      {
        email: 'meiglspe@htwg-konstanz.de',
        vorname: 'Markus Joachim',
        nachname: 'Eiglsperger',
        telefonnummer: '+49 7531 206-462'
      },
      {
        email: 'mfranz@htwg-konstanz.de',
        vorname: 'Matthias',
        nachname: 'Franz',
        telefonnummer: '+49 7531 206-651'
      },
      {
        email: 'haase@htwg-konstanz.de',
        vorname: 'Oliver',
        nachname: 'Haase',
        telefonnummer: '+49 7531 206-9140'
      },
      {
        email: 'Alexander.Hoffmann@htwg-konstanz.de',
        vorname: 'Alexander',
        nachname: 'Hoffmann',
        telefonnummer: '+49 7531 206-596'
      },
      {
        email: 'hanno.langweg@htwg-konstanz.de',
        vorname: 'Hanno',
        nachname: 'Langweg',
        telefonnummer: '+49 7531 206-9024'
      },
      {
        email: 'maechtel@htwg-konstanz.de',
        vorname: 'Michael',
        nachname: 'Mächtel',
        telefonnummer: '+49 7531 206-632'
      },
      {
        email: 'rmartin@htwg-konstanz.de',
        vorname: 'Reiner',
        nachname: 'Martin',
        telefonnummer: '+49 7531 206-509'
      },
      {
        email: 'marco.mevius@htwg-konstanz.de',
        vorname: 'Marco',
        nachname: 'Mevius',
        telefonnummer: '+49 7531 206-515'
      },
      {
        email: 'Sonja.Meyer@htwg-konstanz.de',
        vorname: 'Sonja',
        nachname: 'Meyer',
        telefonnummer: '+49 7531 206-398'
      },

      {
        email: 'rainer.mueller@htwg-konstanz.de',
        vorname: 'Rainer',
        nachname: 'Mueller',
        telefonnummer: '+49 7531 206-329'
      },
      {
        email: 'juergen.neuschwander@htwg-konstanz.de',
        vorname: 'Jürgen',
        nachname: 'Neuschwander',
        telefonnummer: '-'
      },
      {
        email: 'christopher.rentrop@htwg-konstanz.de',
        vorname: 'Christopher',
        nachname: 'Rentrop',
        telefonnummer: '+49 7531 206-499'
      },
      {
        email: 'ralf.schimkat@htwg-konstanz.de',
        vorname: 'Ralf',
        nachname: 'Schimkat',
        telefonnummer: '+49 7531 206-720'
      },
      {
        email: 'johannes.schneider@htwg-konstanz.de',
        vorname: 'Johannes',
        nachname: 'Schneider',
        telefonnummer: '+49 7531 206-9043'
      },
      {
        email: 'irenaeus.schoppa@htwg-konstanz.de',
        vorname: 'Irenäus',
        nachname: 'Schoppa',
        telefonnummer: '+49 7531 206-644'
      },
      {
        email: 'ralf.seepold@htwg-konstanz.de',
        vorname: 'Ralf',
        nachname: 'Seepold',
        telefonnummer: '+49 7531 206-633'
      },
      {
        email: 'stefan.sohn@htwg-konstanz.de',
        vorname: 'Stefan',
        nachname: 'Sohn',
        telefonnummer: '+49 7531 206-506'
      },
      {
        email: 'barbara.staehle@htwg-konstanz.de',
        vorname: 'Barbara',
        nachname: 'Staehle',
        telefonnummer: '+49 7531 206-627'
      },
      {
        email: 'dirk.staehle@htwg-konstanz.de',
        vorname: 'Dirk',
        nachname: 'Staehle',
        telefonnummer: '+49 7531 206-645'
      },
      {
        email: 'umlauf@htwg-konstanz.de',
        vorname: 'Georg',
        nachname: 'Umlauf',
        telefonnummer: '+49 7531 206-702'
      },
      {
        email: 'christian.wache@htwg-konstanz.de',
        vorname: 'Christian',
        nachname: 'Wache',
        telefonnummer: '+49 7531 206-9017'
      },
      {
        email: 'juergen.waesch@htwg-konstanz.de',
        vorname: 'Jürgen',
        nachname: 'Wäsch',
        telefonnummer: '+49 7531 206-502'
      }

    ]



    for (const dozent of dozenten) {
      await Dozent.findOrCreate({nachname: dozent.nachname}, dozent);
    }
  }

};
