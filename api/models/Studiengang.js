module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        kuerzel: { type: 'string', columnType: 'varchar(80)', unique: true, required: true },
        benutzer: {
            collection: 'benutzer',
            via: 'studiengang'
        },
        dozent: {
            collection: 'dozent',
            via: 'studiengang'
        },
        studiengang_modul: {
            collection: 'studiengang_modul',
            via: 'studiengang'
        },
    },
};