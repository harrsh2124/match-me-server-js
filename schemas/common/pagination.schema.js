const Joi = require("joi");

const paginationSchema = Joi.object({
    page: Joi.number().min(1),

    limit: Joi.number().min(1),

    query: Joi.string(),
});

module.exports = paginationSchema;
