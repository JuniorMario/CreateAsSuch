const Joi = require('joi')

exports.validateIt = (obj1, obj2) => {
    if (Joi.validate(obj1, obj2).error !== null) {
        return {isvalid: false, message: "Um ou mais campos são inválidos!"}
    } 
    return {isvalid: true, message: "Success!"}   
}