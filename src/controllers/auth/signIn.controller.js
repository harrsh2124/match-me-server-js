const SignInController = (req, res) => {
    return res.status(200).json({
        message: "Sign In route.",
    });
};

module.exports = SignInController;
