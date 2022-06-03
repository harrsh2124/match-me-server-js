const _ = require("lodash");
const logger = require("../config/logger");

const ResponseHandler = ({
    res,
    statusCode,
    message,
    data,
    error,
    removeToken,
}) => {
    const isError = Boolean(typeof error !== "undefined");
    const responseMessage =
        message || _.get(error, "message", "Something went wrong.");
    logger.info(`${isError ? "Error" : "Message"} is ----> ${responseMessage}`);

    return res.status(statusCode).json({
        success: true,
        data: {
            statusCode,
            message: responseMessage,
            data: data || {},
            isError,
            removeToken,
        },
    });
};

module.exports = ResponseHandler;
