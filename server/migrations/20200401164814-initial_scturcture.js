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
        type: Sequelize.TEXT,
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
    username: {
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
    await queryInterface.bulkInsert('TB_POSTS', [{
      title: 'Lorem Ipsum',
      subtitle: 'Memento Mori',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    return Promise.resolve()
  },
  
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TB_POSTS');
    await queryInterface.dropTable('TB_USERS');
    
    return Promise.resolve()
  }
};
