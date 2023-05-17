module.exports = {
    attributes: {
        wert: { type: 'number', columnType: 'integer', required: true, min: 1, max: 10 },
        user: {
            model: 'user'
        },
        anleitung_bewertung: {
            collection: 'anleitung_bewertung',
            via: 'bewertung'
        },
        skript_bewertung: {
            collection: 'skript_bewertung',
            via: 'bewertung'
        },
    },
};