const UserModel = require("../../models/user.model");

const SignInController = async (req, res) => {
    const user = await UserModel.findOne({
        email: req.body.email,
    }).populate(["userCredentials"]);

    console.log(user);
    return res.status(200).json({
        message: "Sign In route.",
    });
};

module.exports = SignInController;
