'use strict';

exports.up = function (knex, Promise) {

    return knex.schema
    .createTableIfNotExists('Zombie', function(table) {
        table.integer('id');
        table.string('firstName');
        table.string('lastName');
        table.integer('age');
        table.json('address');
        table.string('favoriteFood');
    })

};

exports.down = function (knex, Promise) {

    return knex.schema
    .dropTable('Zombie')

};
