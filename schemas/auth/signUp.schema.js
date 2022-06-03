const Joi = require("joi");
const { GENDER_ENUM } = require("../../enums/gender.enum");

const signUpSchema = Joi.object({
    email: Joi.string().email().required(),

    password: Joi.string().required(),

    confirmationPassword: Joi.ref("password"),

    firstName: Joi.string().required(),

    lastName: Joi.string().required(),

    contactNumber: Joi.string().length(10),

    gender: Joi.string()
        .required()
        .lowercase()
        .valid(...Object.values(GENDER_ENUM)),
});

module.exports = signUpSchema;
