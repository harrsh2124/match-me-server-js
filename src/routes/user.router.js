const express = require("express");
const GetUserDetailsController = require("../controllers/user/getUserDetails");
const authenticateToken = require("../middlewares/auth");

const UserRoute = express.Router();

UserRoute.get("/details", authenticateToken(), GetUserDetailsController);

module.exports = UserRoute;
