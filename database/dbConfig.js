const knex = require('knex')

const config = require('../knexfile.js');

const envir = process.env.DB_ENV || 'development';

module.exports = knex(config[envir]);