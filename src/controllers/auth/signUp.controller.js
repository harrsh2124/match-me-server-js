const UserModel = require("../../models/user.model");
const UserCredentialsModel = require("../../models/userCredentials.model");

const SignUpController = async (req, res) => {
    console.log(req.body);
    const { email, firstName, lastName, gender, password, contactNumber } =
        req.body;

    const newUserCredentials = new UserCredentialsModel({
        password,
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
