const DB = require('../db/model')
const Knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'database',
      user : 'root',
      password : 'root',
      database : 'blog',
 
    }
  });

class AdminHandlerDB {
    constructor() {
        this._handler = Knex('POSTS')
    }

    async read(item = {}) {
        return await this._handler.select(item).where(item, '=', item)
    }

    async readAll() {
        return await this._handler.select('*')
    }
    async readByTitle(title) {
        return await this._handler.select('title')
    }

    async post(title, subtitle = null, content) {
        await this._handler.insert({title, subtitle, content})
    }

    async update(id, item) {
        return this._handler.update(item, { where: { id: id } })
    }

    async delete(id) {
        const query = id ? { id } : {}
        return this._handler.destroy({ where: query })
    }
}



module.exports = AdminHandlerDB