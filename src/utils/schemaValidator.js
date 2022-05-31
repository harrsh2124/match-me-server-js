const schemaValidator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);

        if (error) {
            console.log(error.message, " << Validation error.");

            return res.status(STATUS_CODES.BAD_REQUEST).json({
                message: error.message,
            });
        }

        next();
    };
};

module.exports = schemaValidator;
