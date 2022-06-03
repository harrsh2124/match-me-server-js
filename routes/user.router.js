const express = require("express");
const GetUserDetailsController = require("../controllers/user/getUserDetails");
const UpdateUserDetailsController = require("../controllers/user/updateUserDetails");
const verifyUser = require("../middlewares/verifyUser");
const updateUserSchema = require("../schemas/user/updateUser.schema");
const schemaValidator = require("../utils/schemaValidator");

const UserRoute = express.Router();

UserRoute.get("/details", verifyUser, GetUserDetailsController);
UserRoute.put(
    "/update",
    verifyUser,
    schemaValidator(updateUserSchema),
    UpdateUserDetailsController
);

module.exports = UserRoute;
