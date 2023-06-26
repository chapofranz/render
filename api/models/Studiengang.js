module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        kuerzel: { type: 'string', columnType: 'varchar(80)', unique: true, required: true },
        user: {
            collection: 'user',
            via: 'studiengang'
        },
        studiengang_modul: {
            collection: 'studiengang_modul',
            via: 'studiengang'
        },
    },
};