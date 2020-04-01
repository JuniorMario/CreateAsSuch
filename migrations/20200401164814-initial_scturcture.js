'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TB_POSTS', {
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
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
    })

    await queryInterface.createTable('TB_USERS', {
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
    },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
    })
    return Promise.resolve()
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TB_POSTS');
    await queryInterface.dropTable('TB_USERS');
    
    return Promise.resolve()
  }
};
