const Joi = require("joi");
const STATUS_CODES = require("../../config/constants/statusCodes");
const { GENDER_ENUM } = require("../../config/enums/gender.enum");

const schema = Joi.object({
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

const ValidateSignUpBody = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
        console.log(error.message, " << Sign Up validation error.");

        return res.status(STATUS_CODES.BAD_REQUEST).json({
            message: error.message,
        });
    }

    next();
};

module.exports = ValidateSignUpBody;
