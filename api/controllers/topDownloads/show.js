const Sails = require("sails/lib/app/Sails");


module.exports = {
    friendlyName: 'Show top downloads',
  
    description: 'Show top 10 downloads for Skripte and Anleitungen.',
  
    exits: {
      success: {
        description: 'Got top downloads successfully.',
      },
  
      serverError: {
        description: 'Failed to get top downloads.',
      }
    },
  
    fn: async function(inputs, exits) {
      try {
        // Hole die top 10 Skripte und Anleitungen basierend auf der durchschnittlichen Bewertung
        const topSkripte = await Skript.find()
          .sort('averageRating DESC')
          .limit(10);
  
        const topAnleitungen = await Anleitung.find()
          .sort('averageRating DESC')
          .limit(10);
  
        // Kombiniere die beiden Listen und sortiere sie absteigend nach der durchschnittlichen Bewertung
        const topDownloads = [...topSkripte, ...topAnleitungen].sort((a, b) => b.averageRating - a.averageRating);
  
        // Begrenze das Ergebnis auf die top 10
        const finalTopDownloads = topDownloads.slice(0, 10);
  
        return exits.success(finalTopDownloads);
      } catch (err) {
        return exits.serverError(err.message);
      }
    }
  };
  