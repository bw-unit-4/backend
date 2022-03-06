
exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'Manny', password: '$2a$08$OJeyO4.9YRAwwn7um9rsCeNTcKELNzcMBqTANyF4.igISj.i0eUv6', phone_number: '2223334444'},
  ]);
};
