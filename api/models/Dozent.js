module.exports = {
    attributes: {
        email: { type: 'string', columnType: 'varchar(80)', unique: true, required: true },
        vorname: { type: 'string', columnType: 'varchar(80)', required: true },
        nachname: { type: 'string', columnType: 'varchar(80)', required: true },
        telefonnummer: { type: 'string', columnType: 'varchar(20)' },
    },
};
