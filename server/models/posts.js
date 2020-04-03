'use strict';

Posts.init({
  id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true
  },
  title: {
      type: Sequelize.STRING,
      required: true
  },
  subtitle: {
      type: Sequelize.STRING,
      required: false
  },
  content: {
      type: Sequelize.STRING,
      required: true
  },
  createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    }

},
  {
      sequelize,
      modelName: 'posts',
      tableName: 'TB_POSTS'
  })

  module.exports = {
    Posts
}