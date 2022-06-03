const crypto = require("crypto");
const STATUS_CODES = require("../../config/constants/statusCodes");
const logger = require("../../config/logger");

const UserModel = require("../../models/user.model");
const UserCredentialsModel = require("../../models/userCredentials.model");
const { encryptPassword } = require("../../utils/encryptDecryptPassword");
const ResponseHandler = require("../../utils/responseHandler");

const SignUpController = async (req, res) => {
    try {
        const { email, firstName, lastName, gender, password, contactNumber } =
            req.body;

        const user = await UserModel.findOne({
            email,
        });

        if (user) {
            return ResponseHandler({
                res,
                message: "User already exists with this email address.",
                statusCode: STATUS_CODES.BAD_REQUEST,
                error: true,
            });
        }

        const encryptedPassword = await encryptPassword(password);

        const newUserCredentials = new UserCredentialsModel({
            password: encryptedPassword,
            contactNumber,
        });
        const newUser = new UserModel({
            email,
            firstName,
            lastName,
            gender,
            userCredentials: newUserCredentials._id,
        });

        await newUserCredentials.save();
        await newUser.save();

        const encryptedToken = crypto.randomBytes(20).toString("hex");

        logger.info(encryptedToken);

        return ResponseHandler({
            res,
            message:
                "Signed up successfully. Please check your email to find the confirmation link.",
            statusCode: STATUS_CODES.CREATED,
        });
    } catch (error) {
        return ResponseHandler({
            res,
            statusCode: STATUS_CODES.SERVER_ERROR,
            error,
        });
    }
};

module.exports = SignUpController;
