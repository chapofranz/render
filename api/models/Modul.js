module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', unique: true, required: true },
        beschreibung: { type: 'string', columnType: 'varchar(80)' },
        studiengang_modul: {
            collection: 'studiengang_modul',
            via: 'modul'
        },
        anleitung: {
            collection: 'anleitung',
            via: 'modul'
        },
        skript: {
            collection: 'skript',
            via: 'modul'
        },
    },
};
