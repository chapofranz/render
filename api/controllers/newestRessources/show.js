module.exports = {
    friendlyName: 'Show newest resources',
  
    description: 'Show the 10 newest Skripte and Anleitungen.',
  
    exits: {
      success: {
        description: 'Got newest resources successfully.',
      },
  
      serverError: {
        description: 'Failed to get newest resources.',
      }
    },
  
    fn: async function(inputs, exits) {
      try {
        // Hole die 10 neuesten Skripte und Anleitungen basierend auf dem Erstellungsdatum
        const newestSkripte = await Skript.find()
          .sort('createdAt DESC')
          .limit(10);

        const newestSkripteWithType = newestSkripte.map(script => ({...script, type: 'skripte'}));

        const newestAnleitungen = await Anleitung.find()
          .sort('createdAt DESC')
          .limit(10);

        const newestAnleitungenWithType = newestAnleitungen.map(guide => ({...guide, type: 'anleitungen'}));
  
        // Kombiniere die beiden Listen und sortiere sie absteigend nach dem Erstellungsdatum
        const newestResources = [...newestSkripteWithType, ...newestAnleitungenWithType].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
        // Begrenze das Ergebnis auf die 10 neuesten
        const finalNewestResources = newestResources.slice(0, 10);
  
        return exits.success(finalNewestResources);
      } catch (err) {
        return exits.serverError(err.message);
      }
    }
  };
