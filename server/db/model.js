
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'database',
      user : 'root',
      password : '',
      database : 'blogapp',
      socketPath : '/var/run/mysqld/mysqld.sock'
    }
  });



module.exports = {
    knex
}