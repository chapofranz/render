module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        beschreibung: { type: 'string', columnType: 'varchar(80)' },

        author: { type: 'string', columnType: 'varchar(80)', required: true },
        averageRating: { type: 'number', columnType: 'float' },

        modul: {
            model: 'modul',
            required: true
          
        },
        bewertung: {
            collection: 'bewertung',
            via: 'skript'
        },
        data: {
            type: 'string',
            required: true,
            columnType: 'varchar(128)',
            columnName: 'skript_url',
        },
    },

};