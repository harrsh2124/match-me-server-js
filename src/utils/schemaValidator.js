const STATUS_CODES = require("../config/constants/statusCodes");
const ResponseHandler = require("./responseHandler");

const schemaValidator = (schema, type = "body") => {
    return (req, res, next) => {
        const { error } = schema.validate(
            type === "query" ? req.query : req.body
        );

        if (error) {
            return ResponseHandler({
                res,
                error,
                statusCode: STATUS_CODES.BAD_REQUEST,
            });
        }

        next();
    };
};

module.exports = schemaValidator;
