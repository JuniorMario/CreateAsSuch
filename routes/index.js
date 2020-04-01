var express = require('express');
var router = express.Router();
var path = require('path')
var adminController = require('../controllers/admin.controller')
var userService = require('../services/user.service')
var authServices = require('../services/auth.service')



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

module.exports = router;
