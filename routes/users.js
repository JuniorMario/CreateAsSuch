var express = require('express');
var router = express.Router();

/* GET users listing. */
// AUTH ROUTES
// router.get('/users/login', function (req, res) {
//   console.log("ELE LEU A MOTHERFUCKING ROTAAAA:>>>>>>>>>>>>>>>>>>>>>..")
//   res.render('login.pug');
// })

// router.post('/users/login', function (req, res) {
//   console.log(req.session)
//   res.render('login.pug');
// })



// router.get('/users/register', function (req, res) { 
//   res.render("register.pug")
// })

// router.post('/users/register', async function (req, res) { 
//   console.log(req.body)
//   console.log("usern", req.body.username)
 
//   const valid = validatorService.validateIt({username:req.body.username, password:req.body.password}, validators.UserValidator)
//   if (valid.isvalid) {
//     attempt = await authController.registerUser(req.body.username, req.body.password)
//     attempt.message = valid.message
//   }
  
//   res.render("register.pug", { message: valid.message })

// })
module.exports = router;
