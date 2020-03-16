const User = require('./user.service')
const _userdb = new User()
const jwt = require('jsonwebtoken')

const tokenSecret = "thisisamotherfuckingsecret"
exports.validateUser = async (username, password) => {
    const users = await _userdb.read()
    const user = users.filter(item => item.password === password && item.name === username)
    if (!user.length > 0) {
        return { valid: false, message: "Não cadastrado!" }
    }
    return { valid: true, message: "Logando!", user: user[0] }
}

exports.getToken = (profile) => {
    return jwt.sign(profile.id, tokenSecret)
}

exports.parseToken = async (token) => {

    if (typeof token === 'string') {
        const id = jwt.decode(token, tokenSecret)

        if (id) {
            return _userdb.readById(id)
        }

        return false
    }

    return false
}

exports.validateAdmin = async (req, res, next) => {
    const validObj = await this.parseToken(req.header.token)
    if (validObj.rows[0].dataValues.type === "user") {
        res.redirect('/home')
        
    } else {
        req.profile = validObj.rows[0].dataValues
        return true
    }
}


exports.validateAdminSession = async (req, res, next) => {
    const validObj = await this.parseToken(req.header.token)
    if (!validObj.rows[0].dataValues.type === "admin") {
        res.redirect('/home')   
    } 
    next()
}
exports.getProfile = async (token) => {
    if (token) {
        const validObj = await this.parseToken(token)
        return validObj.rows[0].dataValues
    }
    return { username: "guest", type: "guest" }
}

exports.validateUserSession = async (req, res) => {
    if (req.profile === undefined) {
        profile = await this.getProfile(req.header.token)
        req.profile = profile
        return req
    } else {
        return req
    }
 
}

exports.isLogged = async (req, res) => {
    if (req.profile.type) {
        return {
            name2: "Register",
            registerlink: "/users/register",
            loglink: "/users/login",
            name1: "Login"
        }
    } else {
        return {
            name2: "Register",
            registerlink: "/users/register",
            loglink: "/logout",
            name1: "Logout"
        }
    }
}