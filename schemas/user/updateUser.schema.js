const Joi = require("joi");

const updateUserSchema = Joi.object({
    firstName: Joi.string(),

    lastName: Joi.string(),

    isPrivate: Joi.bool(),

    isHidden: Joi.bool(),
});

module.exports = updateUserSchema;
