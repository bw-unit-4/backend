
exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'Manny', password: '$2a$08$OJeyO4', phone_number: '2223334444'},
    {username: 'Akhil', password: '@#seee3333', phone_number: '2223335554'},
    {username: 'Bob', password: '$435353363', phone_number: '4445556666'},
  ]);
};
