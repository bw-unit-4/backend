
exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'Manny', password: '$2a$08$OJeyO4', phone_number: '2223334444'},
  ]);
};
