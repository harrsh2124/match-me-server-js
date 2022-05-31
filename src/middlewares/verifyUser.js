const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/constants");
const UserModel = require("../models/User.model");
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
            });
        }

        req.auth = user._id;
        next();
    } catch (error) {
        return ResponseHandler({
            res,
            statusCode: STATUS_CODES.SERVER_ERROR,
            error,
        });
    }
};

module.exports = verifyUser;
