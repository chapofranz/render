// api/models/Meal.js
module.exports = {
  attributes: {
    name: { type: 'string', columnType: 'varchar(80)', required: true },
    description: { type: 'string', columnType: 'varchar(80)' }
  },
};
