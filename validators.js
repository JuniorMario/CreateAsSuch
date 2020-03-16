const Joi = require('joi')

exports.PostValidator = Joi.object({
    title: Joi.string().min(2).max(200).required(),
    subtitle: Joi.string().min(5).max(255).default(""),
    content: Joi.string().min(20).required(),
}).options({
    stripUnknown: true,
})

exports.UserValidator = Joi.object({
    username: Joi.string().min(2).max(50).required(),
    password: Joi.string().min(6).max(60).required()
}).options({
    stripUnknown: true,
})