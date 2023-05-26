module.exports = {
    attributes: {
        
        wert: { type: 'number', columnType: 'integer', required: true, min: 1, max: 5 },
        user: {
            model: 'user'
        },
        anleitung: {
            model: 'anleitung'
        },
        skript: {
            model: 'skript'
        }
    },
};