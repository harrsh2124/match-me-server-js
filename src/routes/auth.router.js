const express = require("express");
const ConfirmUserController = require("../controllers/auth/ConfirmUser.controller");
const SignInController = require("../controllers/auth/SignIn.controller");
const SignUpController = require("../controllers/auth/SignUp.controller");

const AuthRoute = express.Router();

AuthRoute.post("/signup", SignUpController);
AuthRoute.post("/signin", SignInController);
AuthRoute.post("/verify/:userId/:verificationToken", ConfirmUserController);

module.exports = AuthRoute;
