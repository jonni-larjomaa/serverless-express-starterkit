'use strict';

const bookshelf = require('./database');

let User = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'username',
});

module.exports = bookshelf.model('User', User);
