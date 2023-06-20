module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        beschreibung: { type: 'string', columnType: 'varchar(80)' },
        data: {
            type: 'string',
            required: true,
            columnType: 'varchar(128)',
            columnName: 'skript_url',
        },
        author: { type: 'string', columnType: 'varchar(80)', required: true },
        averageRating: { type: 'number', columnType: 'float' },
        modul: {
            model: 'modul',
            required: true
           
        },

        bewertung: {
            collection: 'bewertung',
            via: 'anleitung'
        }

    },
};