
exports.up = function(knex) {
    return knex.schema
    .createTable('USERS', function (table) {
       table.increments('id');
       table.string('username', 255).notNullable();
       table.string('password', 255).notNullable();
       table.string('type', 255).notNullable();
    }).createTable('POSTS', function (table) {
        table.increments('id');
        table.string('title', 255).notNullable();
        table.string('subtitle', 255).notNullable();
        table.text('content').notNullable();
     })

};

exports.down = function(knex) {

};
