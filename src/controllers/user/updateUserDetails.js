const UserModel = require("../../models/User.model");
const ResponseHandler = require("../../utils/responseHandler");

const UpdateUserDetailsController = async (req, res) => {
    try {
        const _id = req.auth;

        console.log(req.body);

        let user = await UserModel.findByIdAndUpdate(
            _id,
            req.body,
            DB_UPDATE_OPTIONS
        );
        user = user.toJSON();

        delete user.userCredentials;

        return ResponseHandler({
            res,
            message: "User details updated successfully.",
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

module.exports = UpdateUserDetailsController;