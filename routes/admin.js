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

//ADMIN ROUTES
router.get('/', authServices.validateAdminSession, async function (req, res) {
    res.render("admin-pg.pug", { user: "Barionix", token: "token" }); //TODO: implementar user com Session
  })
  
  
  router.get('/createPost', function (req, res) {
    res.render("admin-create.pug", { user: "Barionix", token: "token" }); //TODO: implementar user com Session
  })
  
  router.post('/createPost', function (req, res) {
    const valid = validatorService.validateIt({ title: req.body.title, subtitle: req.body.subtitle, content: req.body.content }, validators.PostValidator)
    if (valid.isvalid) {
      adminController.createPost({ title: req.body.title, subtitle: req.body.subtitle, content: req.body.content })
    }
  
    res.render('admin-create.pug', { user: "Barionix", message: valid.message })
  })
  
  
  
  //Rota que lista os posts e suas possiveis ações
  router.get('/Postlist/', async function (req, res) {
    const post = await adminController.getPosts()
    const posts = []
    post.response.forEach((item) => { posts.push(item.title) })
    res.render("admin-update.pug", { user: "Barionix", token: "token", posts: posts }); //TODO: implementar user com Session
  })
  
  
  // Implents POST and GET to /admin/updatePost
  router.get('/updatePost/:title', async function (req, res) {
    const post = await adminController.getPostsByTitle(req.params.title)
    const { dataValues } = post.rows[0]
    res.render("update-pg.pug", { user: "Barionix", id: dataValues.id })
  })
  
  router.post('/updatePost/', async function (req, res) {
    const valid = validatorService.validateIt({ title: req.body.title, subtitle: req.body.subtitle, content: req.body.content }, validators.PostValidator)
    if (valid.isvalid) {
      const result = await adminController.updatePost(req.body.id, { title: req.body.title, subtitle: req.body.title, content: req.body.content })
      valid.message = result.message
    }
    res.render("update-pg.pug", { user: "Barionix", message: valid.message })
  })
  
  // Implements POST and GET to /admin/deletePost
  router.get('/deletePost/:title', async function (req, res) { //Implementar update por id,
    post = await adminController.getPostsByTitle(req.params.title)
    const { dataValues } = post.rows[0]
    res.render("delete-pg.pug", { user: "Barionix", id: dataValues.id, token: "token" }) //TODO: implementar user com Session
  })
  
  router.post('/deletePost/', async function (req, res) {
    const result = await adminController.deletePost(req.body.id)
    res.render("delete-pg.pug", { user: "Barionix", message: result.message })
  })


module.exports = router;
