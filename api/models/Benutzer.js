module.exports = {
    attributes: {
        vorname: { type: 'string', columnType: 'varchar(80)', required: true },
        nachname: { type: 'string', columnType: 'varchar(80)', required: true },
        passwort: { type: 'string', columnType: 'varchar(80)', required: true },
        nutzername: { type: 'string', columnType: 'varchar(80)', unique: true, required: true },
        email: { type: 'string', columnType: 'varchar(80)', unique: true, required: true },
        geburtsdatum: { type: 'ref', columnType: 'date', required: true },
        role: {
            model: 'role'
        },
        studiengang: {
            model: 'studiengang'
        },
    },
};