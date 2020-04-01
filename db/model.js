const Sequelize = require('sequelize')
class Posts extends Sequelize.Model{ }
class Users extends Sequelize.Model{ }

const sequelize  =  new Sequelize('mysql://root@database:3306/blogapp')
class Database {
    constructor() {
        this._driver = null
        this.connect()
        this.Isconnected = this.isConnected()
    }
    async connect() {
        this._driver = new Sequelize('mysql://root@database:3306/blogapp')
    }

    async isConnected() {
        try {
            this._driver.authenticate()
            return true;
        } catch (error) {
            console.log("Fail!", error)
            return false;
        }
    }

}


Users.init({
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
    }
},
    {
        sequelize,
        modelName: 'users',
        tableName: 'TB_USERS'
    })

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
    Users,
    Posts,
    Database
}