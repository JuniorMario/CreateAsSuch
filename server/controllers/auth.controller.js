const User = require('../services/user.service')
const AuthHandler = new User()
const jwt = require('jsonwebtoken')

const tokenSecret = "thisisamotherfuckingsecret"
exports.registerUser = async (username, password) => {
    const response = AuthHandler.create({username, password})
    return {response, message: "Success"}
}