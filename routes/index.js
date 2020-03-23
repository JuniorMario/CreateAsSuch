var express = require('express');
var router = express.Router();
var Joi = require('joi')
var path = require('path')
var adminController = require('../controllers/admin.controller')
var authController = require('../controllers/auth.controller')
var userService = require('../services/user.service')
var authServices = require('../services/auth.service')
var validatorService = require('../services/validator.service')
var validators = require('../validators')
var Joi = require('joi')

/* GET home page. */


router.get('/home', async function (req, res) {
  const posts = await adminController.getPosts()
  req = await authServices.validateUserSession(req, res)
  const links = await authServices.isLogged(req)
  res.render('index.pug', { content: posts.response, links: links });

});


router.get('/logout', async function (req, res) {
  req.session.destroy()
  res.redirect('/home')
});

router.get('/post/:id', async function (req, res) {
  const posts = await adminController.getPosts()
  resp = posts.response.filter(item => item.id === parseInt(req.params.id))
  res.render('read.pug', { content: resp });

});


router.get('/users/login', function (req, res) {
  res.render('login.pug');
})

router.post('/users/login', async function (req, res) {
  const validate = await authServices.validateUser(req.body.username, req.body.password)
  if (!validate.valid) {
    res.render("login.pug", { message: validate.message })
  } else {
    token = authServices.getToken(validate.user)
    req.session.token = token
    req.session.save()
    admin = await authServices.validateAdmin(req, res)
    if (admin) {
      res.redirect('/admin')
    }
  }

})

router.get('/users/register', function (req, res) {
  res.render("register.pug")
})

router.post('/users/register', async function (req, res) {
  const valid = await validatorService.validateIt({ username: req.body.username, password: req.body.password }, validators.UserValidator)
  if (valid.isvalid) {
    attempt = await authController.registerUser(req.body.username, req.body.password)
    attempt.message = valid.message
  }

  res.render("register.pug", { message: valid.message })

})



//ADMIN ROUTES
router.get('/admin', authServices.validateAdminSession, async function (req, res) {
  res.render("admin-pg.pug", { user: "Barionix", token: "token" }); //TODO: implementar user com Session
})

// Implentes POST and GET to /admin/createPost
router.get('/admin/createPost', function (req, res) {
  res.render("admin-create.pug", { user: "Barionix", token: "token" }); //TODO: implementar user com Session
})

router.post('/admin/createPost', function (req, res) {
  const valid = validatorService.validateIt({ title: req.body.title, subtitle: req.body.subtitle, content: req.body.content }, validators.PostValidator)
  if (valid.isvalid) {
    adminController.createPost({ title: req.body.title, subtitle: req.body.subtitle, content: req.body.content })
  }

  res.render('admin-create.pug', { user: "Barionix", message: valid.message })
})



//Rota que lista os posts e suas possiveis ações
router.get('/admin/Postlist/', async function (req, res) {
  const post = await adminController.getPosts()
  const posts = []
  post.response.forEach((item) => { posts.push(item.title) })
  res.render("admin-update.pug", { user: "Barionix", token: "token", posts: posts }); //TODO: implementar user com Session
})


// Implents POST and GET to /admin/updatePost
router.get('/admin/updatePost/:title', async function (req, res) {
  const post = await adminController.getPostsByTitle(req.params.title)
  const { dataValues } = post.rows[0]
  res.render("update-pg.pug", { user: "Barionix", id: dataValues.id })
})

router.post('/admin/updatePost/', async function (req, res) {
  const valid = validatorService.validateIt({ title: req.body.title, subtitle: req.body.subtitle, content: req.body.content }, validators.PostValidator)
  if (valid.isvalid) {
    const result = await adminController.updatePost(req.body.id, { title: req.body.title, subtitle: req.body.title, content: req.body.content })
    valid.message = result.message
  }
  res.render("update-pg.pug", { user: "Barionix", message: valid.message })
})

// Implements POST and GET to /admin/deletePost
router.get('/admin/deletePost/:title', async function (req, res) { //Implementar update por id,
  post = await adminController.getPostsByTitle(req.params.title)
  const { dataValues } = post.rows[0]
  res.render("delete-pg.pug", { user: "Barionix", id: dataValues.id, token: "token" }) //TODO: implementar user com Session
})

router.post('/admin/deletePost/', async function (req, res) {
  const result = await adminController.deletePost(req.body.id)
  res.render("delete-pg.pug", { user: "Barionix", message: result.message })
})
module.exports = router;
