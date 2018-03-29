'use strict'

const config = require('../config.json')[process.env.NODE_ENV];

const knex = require('knex')({
    client: config.dialect,
    connection: {
        user: config.username,
        password: config.password,
        database: config.database,
        host: config.host
    },
    pool: {
        min: config.pool.min,
        max: config.pool.max,
        evictionRunIntervalMillis: 10000,
        idleTimeoutMillis: 100,
        numTestsPerRun: 5,
        acquireTimeoutMillis: 1000,
    }
});

const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;
