const UserModel = require("../../models/User.model");
const ResponseHandler = require("../../utils/responseHandler");

const SignInController = async (req, res) => {
    const user = await UserModel.findOne({
        email: req.body.email,
    }).populate(["userCredentials"]);

    if (!user) {
        return ResponseHandler({
            res,
            message: "User not found.",
            removeToken: true,
            statusCode: STATUS_CODES.UNAUTHORIZED,
            error: true,
        });
    }

    console.log(user);
    return res.status(200).json({
        message: "Sign In route.",
    });
};

module.exports = SignInController;
