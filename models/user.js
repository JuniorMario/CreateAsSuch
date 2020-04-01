'use strict';

Users.init({
  id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true
  },
  name: {
      type: Sequelize.STRING,
      required: true
  },
  password: {
      type: Sequelize.STRING,
      required: true
  },
  type: {
      type: Sequelize.STRING,
      required: true,
      defaultValue: "user"
  }
},
  {
      sequelize,
      modelName: 'users',
      tableName: 'users'
  })

  module.exports = {
    Users
}