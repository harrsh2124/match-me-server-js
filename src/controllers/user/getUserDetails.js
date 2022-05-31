const UserModel = require("../../models/User.model");
const ResponseHandler = require("../../utils/responseHandler");

const GetUserDetailsController = async (req, res) => {
    try {
        const _id = req.auth;

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

module.exports = GetUserDetailsController;
