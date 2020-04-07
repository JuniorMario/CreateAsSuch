exports.up = function(knex) {
    return knex.schema
    .createTable('TB__', function (table) {
       table.increments('id', 1000);
       table.string('username', 255).notNullable();
       table.string('password', 255).notNullable();
       table.string('type', 255).notNullable();
    }).createTable('__TB', function (table) {
        table.increments('id');
        table.string('title', 255).notNullable();
        table.string('subtitle', 255).notNullable();
        table.text('content').notNullable();
     })

};

exports.down = function(knex) {

};
