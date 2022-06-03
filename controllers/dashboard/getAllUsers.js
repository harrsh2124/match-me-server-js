const _ = require("lodash");
const STATUS_CODES = require("../../config/constants/statusCodes");

const UserModel = require("../../models/user.model");
const PaginateResponse = require("../../utils/paginateResponse");
const ResponseHandler = require("../../utils/responseHandler");

const GetAllUsersController = async (req, res) => {
    try {
        const user = req.user;

        const intPage = parseInt(_.get(req, "query.page", "1"), 10);
        const intLimit = parseInt(_.get(req, "query.limit", "10"), 10);
        const [data] = await UserModel.aggregate([
            {
                $facet: {
                    result: [
                        {
                            $match: {
                                gender:
                                    user.gender === "male" ? "female" : "male",
                                isHidden: false,
                                isVerified: true,
                            },
                        },
                        {
                            $skip: (intPage - 1) * intLimit,
                        },
                        {
                            $limit: intLimit,
                        },
                    ],
                    count: [
                        {
                            $match: {
                                gender:
                                    user.gender === "male" ? "female" : "male",
                                isHidden: false,
                                isVerified: true,
                            },
                        },
                        {
                            $count: "total",
                        },
                    ],
                },
            },
        ]);

        const paginatedResponse = await PaginateResponse(
            req,
            data,
            intPage,
            intLimit
        );

        return ResponseHandler({
            res,
            message: "Users fetched successfully.",
            data: paginatedResponse,
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
