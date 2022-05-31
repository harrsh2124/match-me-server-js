const UserModel = require("../../models/User.model");
const UserCredentialsModel = require("../../models/UserCredentials.model");
const { encryptPassword } = require("../../utils/encryptDecryptPassword");

const SignUpController = async (req, res) => {
    console.log(req.body);
    const { email, firstName, lastName, gender, password, contactNumber } =
        req.body;

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

    return res.status(200).json({
        message: "Sign Up route.",
    });
};

module.exports = SignUpController;
