module.exports = {
    attributes: {
        beschreibung: { type: 'string', columnType: 'varchar(80)' },
        name: { type: 'string', columnType: 'varchar(80)', unique: true, required: true },
        benutzer: {
            collection: 'benutzer',
            via: 'role'
        },
    },
};