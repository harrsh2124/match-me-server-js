const STATUS_CODES = require("../../config/constants/statusCodes");
const UserModel = require("../../models/user.model");
const ResponseHandler = require("../../utils/responseHandler");

const GetUserDetailsByIdController = async (req, res) => {
    try {
        const { _id } = req.params;

        if (!_id) {
            return ResponseHandler({
                res,
                message: "Please enter user ID.",
                statusCode: STATUS_CODES.BAD_REQUEST,
                error: true,
            });
        }

        let user = await UserModel.findById(_id);
        user = user.toJSON();

        delete user.userCredentials;

        return ResponseHandler({
            res,
            message: "User details found successfully.",
            data: {
                user,
            },
            statusCode: STATUS_CODES.SUCCESS,
        });
    } catch (error) {
        return ResponseHandler({
            res,
            statusCode: STATUS_CODES.SERVER_ERROR,
            error,
        });
    }
};

module.exports = GetUserDetailsByIdController;
