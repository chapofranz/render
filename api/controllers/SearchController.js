const Sails = require("sails/lib/app/Sails");


module.exports = {
    search: async function (req, res) {
      const searchTerm = req.query.term.toLowerCase();
  
      const skripte = await Skript.find({
        or: [
          { name: { contains: searchTerm } },
          { beschreibung: { contains: searchTerm } },
          { modul: { contains: searchTerm } },
          { author: { contains: searchTerm } },
        ],
      }).populate('modul');
  
      const anleitungen = await Anleitung.find({
        or: [
          { name: { contains: searchTerm } },
          { beschreibung: { contains: searchTerm } },
          { modul: { contains: searchTerm } },
          { author: { contains: searchTerm } },
        ],
      }).populate('modul');
  
     const module = await Modul.find();


      res.view('pages/search-results', { skripte, anleitungen, module });
    },
  };
  