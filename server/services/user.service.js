const DB = require('../db/model')


class UserHandler {
    constructor() {
        this._users = DB.Users
    }

    async create(mock) {
        const {
            dataValues
        } = await this._users.create(mock)

        return dataValues

    }

    async readById(id) {
        return await this._users.findAndCountAll({where: {id}})
    }

    async read(item = {}) {
        return this._users.findAll({ where: item, raw: true })
    }

    async update(id, item) {
        return this._users.update(item, { where: { id: id } })
    }

    async delete(id) {
        const query = id ? { id } : {}
        return this._users.destroy({ where: query })
    }
}



module.exports = UserHandler