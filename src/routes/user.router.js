const express = require("express");
const GetUserDetailsController = require("../controllers/user/getUserDetails");
const verifyUser = require("../middlewares/verifyUser");

const UserRoute = express.Router();

UserRoute.get("/details", verifyUser, GetUserDetailsController);

module.exports = UserRoute;
