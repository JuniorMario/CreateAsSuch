const DB = require('../db/model')

class AdminHandlerDB {
    constructor() {
        this._handler = DB.Posts
    }

    async read(item = {}) {
        return await this._handler.findAll({ where: item, raw: true })
    }

    async readByTitle(title) {
        return await this._handler.findAndCountAll({where: {title}})
    }

    async post(title, subtitle = null, content) {
        const {
            dataValues
        } = await this._handler.create(title, subtitle, content)
        return dataValues
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