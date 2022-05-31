const _ = require("lodash");
const logger = require("../config/logger");

const responseHandler = ({
    res,
    statusCode,
    message,
    data,
    error,
    removeToken,
}) => {
    const responseMessage =
        message || _.get(error, "message", "Something went wrong.");
    logger.info(`Error is ----> ${responseMessage}`);

    return res.status(statusCode).json({
        success: true,
        data: {
            status: statusCode,
            message: responseMessage,
            data: data || {},
            isError: Boolean(typeof error !== "undefined"),
            removeToken,
        },
    });
};

module.exports = responseHandler;
