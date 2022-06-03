const Joi = require("joi");

const signInSchema = Joi.object({
    email: Joi.string().email().required(),

    password: Joi.string().required(),
});

module.exports = signInSchema;
