const UserModel = require("../../models/User.model");
const PaginateResponse = require("../../utils/paginateResponse");
const ResponseHandler = require("../../utils/responseHandler");

const GetAllUsersController = async (req, res) => {
    try {
        const data = await PaginateResponse(req, UserModel);

        return ResponseHandler({
            res,
            message: "Users fetched successfully.",
            data,
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

module.exports = GetAllUsersController;
