const express = require("express");
const schemaValidator = require("../utils/schemaValidator");
// const ConfirmUserController = require("../controllers/auth/ConfirmUser.controller");
const SignInController = require("../controllers/auth/signIn.controller");
const SignUpController = require("../controllers/auth/signUp.controller");
const signUpSchema = require("../schemas/auth/signUp.schema");
const signInSchema = require("../schemas/auth/signIn.schema");

const AuthRoute = express.Router();

AuthRoute.post("/signup", schemaValidator(signUpSchema), SignUpController);
AuthRoute.post("/signin", schemaValidator(signInSchema), SignInController);
// AuthRoute.post("/verify/:userId/:verificationToken", ConfirmUserController);

module.exports = AuthRoute;
