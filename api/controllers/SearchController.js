const Sails = require("sails/lib/app/Sails");


module.exports = {
    search: async function (req, res) {
      const searchTerm = req.query.term.toLowerCase();
  
      const skripte = await Skript.find({
        or: [
          { name: { contains: searchTerm } },
          { beschreibung: { contains: searchTerm } },
          { author: { contains: searchTerm } },
        ],
      });
  
      const anleitungen = await Anleitung.find({
        or: [
          { name: { contains: searchTerm } },
          { beschreibung: { contains: searchTerm } },
          { author: { contains: searchTerm } },
        ],
      });
  
     
      res.view('pages/search-results', { skripte, anleitungen });
    },
  };
  