
const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "name": "test1",
          "email": "test1@gmail.com",
          "password":  bcrypt.hashSync("test1", 8),
        },
        {
          "name": "jackey",
          "email": "jackey@gmail.com",
          "password":  bcrypt.hashSync("jackey", 8),
        },
        {
          "name": "hipper",
          "email": "hipper@gmail.com",
          "password":  bcrypt.hashSync("hipper", 8),
        },
        {
          "name": "erean",
          "email": "erean@gmail.com",
          "password": bcrypt.hashSync("erean", 8),
        }
      ]);
    });
};
