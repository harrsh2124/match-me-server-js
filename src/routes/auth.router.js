const express = require("express");
const schemaValidator = require("../utils/schemaValidator");
const ConfirmUserController = require("../controllers/auth/ConfirmUser.controller");
const SignInController = require("../controllers/auth/SignIn.controller");
const SignUpController = require("../controllers/auth/SignUp.controller");
const signUpSchema = require("../schemas/auth/signUp.schema");

const AuthRoute = express.Router();

AuthRoute.post("/signup", schemaValidator(signUpSchema), SignUpController);
AuthRoute.post("/signin", SignInController);
AuthRoute.post("/verify/:userId/:verificationToken", ConfirmUserController);

module.exports = AuthRoute;
