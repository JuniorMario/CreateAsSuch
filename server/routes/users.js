var express = require('express');
var router = express.Router();

var authController = require('../controllers/auth.controller')
var authServices = require('../services/auth.service')
var validatorService = require('../services/validator.service')
var validators = require('../validators')


router.get('/register', function (req, res) {
    res.render("register.pug")
})


router.post('/register', async function (req, res) {
    const valid = await validatorService.validateIt({ username: req.body.username, password: req.body.password }, validators.UserValidator)
    if (valid.isvalid) {
        attempt = await authController.registerUser(req.body.username, req.body.password)
        attempt.message = valid.message
    }

    res.render("register.pug", { message: valid.message })

})


router.get('/login', function (req, res) {
    res.render('login.pug');
})

router.post('/login', async function (req, res) {
    const validate = await authServices.validateUser(req.body.username, req.body.password)
    if (!validate.valid) {
        res.render("login.pug", { message: validate.message })
    } else {
        token = authServices.getToken(validate.user)
        req.session.token = token
        req.session.save()
        admin = await authServices.validateAdmin(req, res)
        if (admin) {
            res.redirect('/admin-panel')
        }
    }

})




module.exports = router;
