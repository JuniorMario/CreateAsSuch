var express = require('express');
var router = express.Router();
var path = require('path')
var adminController = require('../controllers/admin.controller')
var authServices = require('../services/auth.service')
var postServices = require('../services/posts.services')



/* GET home page. */

router.get('/home', async function (req, res) {
  res.redirect('/home/1')
});

router.get('/home/:page', async function (req, res) {
  if (req.params.page === undefined) { req.params.page = 1 }
  const posts = await adminController.getPosts()
  const rest = await postServices.makePagination(posts.response, 3)
  req = await authServices.validateUserSession(req, res)
  const links = await authServices.isLogged(req)
  console.log(rest.pageslenght)
  res.render('index.pug', { content: rest.content[req.params.page - 1], links: links, page: rest.pageslenght });

});


router.get('/logout', async function (req, res) {
  req.session.destroy()
  res.redirect('/home/1')
});

router.get('/post/:id', async function (req, res) {
  const posts = await adminController.getPosts()
  resp = posts.response.filter(item => item.id === parseInt(req.params.id))
  res.render('read.pug', { content: resp });

});

module.exports = router;
