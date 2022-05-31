const { ADMIN_EMAIL } = require("../../config/constants");
const UserModel = require("../../models/User.model");
const { decryptPassword } = require("../../utils/encryptDecryptPassword");
const ResponseHandler = require("../../utils/responseHandler");

const SignInController = async (req, res) => {
    const { email, password } = req.body;

    let user = await UserModel.findOne({
        email,
    }).populate(["userCredentials"]);

    if (!user) {
        return ResponseHandler({
            res,
            message: "User not found.",
            statusCode: STATUS_CODES.FORBIDDEN,
            error: true,
        });
    }

    if (!user.isVerified) {
        return ResponseHandler({
            res,
            message:
                "Your account is not verified yet. Please check your inbox to find the confirmation link.",
            statusCode: STATUS_CODES.FORBIDDEN,
            error: true,
        });
    }

    if (user.isBlocked) {
        return ResponseHandler({
            res,
            message: `Your account is blocked. Please contact the administrator at ${ADMIN_EMAIL}.`,
            statusCode: STATUS_CODES.FORBIDDEN,
            error: true,
        });
    }

    const isUserAuthenticated = await decryptPassword(
        password,
        user.userCredentials.password
    );

    if (!isUserAuthenticated) {
        return ResponseHandler({
            res,
            message: "The password is incorrect.",
            statusCode: STATUS_CODES.FORBIDDEN,
            error: true,
        });
    }

    user = user.toJSON();
    delete user.userCredentials;

    return ResponseHandler({
        res,
        message: "Signed in successfully.",
        data: {
            user,
        },
        statusCode: STATUS_CODES.SUCCESS,
    });
};

module.exports = SignInController;
