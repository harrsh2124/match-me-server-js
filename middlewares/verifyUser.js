const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/constants");
const STATUS_CODES = require("../config/constants/statusCodes");
const UserModel = require("../models/user.model");
const ResponseHandler = require("../utils/responseHandler");

const verifyUser = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (token == null) {
            return ResponseHandler({
                res,
                message: "No authorization token found.",
                statusCode: STATUS_CODES.UNAUTHORIZED,
                error: true,
                removeToken: true,
            });
        }

        const { _id } = jwt.verify(token, JWT_SECRET);

        const user = await UserModel.findById(_id);

        if (!user) {
            return ResponseHandler({
                res,
                message: "User not found.",
                statusCode: STATUS_CODES.FORBIDDEN,
                error: true,
                removeToken: true,
            });
        }

        req.user = user;
        next();
    } catch (error) {
        return ResponseHandler({
            res,
            statusCode: STATUS_CODES.SERVER_ERROR,
            error,
            removeToken: true,
        });
    }
};

module.exports = verifyUser;
