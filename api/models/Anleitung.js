module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        beschreibung: { type: 'string', columnType: 'varchar(80)' },
        pfad: { type: 'string', columnType: 'varchar(255)', required: true },
        author: { type: 'string', columnType: 'varchar(80)', required: true },
        averageRating: {type: 'number' , columnType: 'float'},
        modul: {
            model: 'modul'
        },

        bewertung: {
            collection: 'bewertung',
            via: 'anleitung'
        }

    },
};