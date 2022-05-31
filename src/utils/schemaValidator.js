const ResponseHandler = require("./responseHandler");

const schemaValidator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);

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
