const express = require("express");
const ConfirmUserController = require("../controllers/auth/ConfirmUser.controller");
const SignInController = require("../controllers/auth/SignIn.controller");
const SignUpController = require("../controllers/auth/SignUp.controller");
const ValidateSignUpBody = require("../schemas/auth/signUp.schema");

const AuthRoute = express.Router();

AuthRoute.post("/signup", ValidateSignUpBody, SignUpController);
AuthRoute.post("/signin", SignInController);
AuthRoute.post("/verify/:userId/:verificationToken", ConfirmUserController);

module.exports = AuthRoute;
