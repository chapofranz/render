module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        beschreibung: { type: 'string', columnType: 'varchar(80)' },
        pfad: { type: 'string', columnType: 'varchar(255)', required: true },
        author: { type: 'string', columnType: 'varchar(80)', required: true },
        modul: {
            model: 'modul'
        },
    },
};