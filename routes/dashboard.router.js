const express = require("express");
const GetAllUsersController = require("../controllers/dashboard/getAllUsers");
const GetUserDetailsByIdController = require("../controllers/dashboard/getUserDetailsById");
const verifyUser = require("../middlewares/verifyUser");
const paginationSchema = require("../schemas/common/pagination.schema");
const schemaValidator = require("../utils/schemaValidator");

const DashboardRoute = express.Router();

DashboardRoute.get(
    "/all-users",
    verifyUser,
    schemaValidator(paginationSchema, (type = "query")),
    GetAllUsersController
);

DashboardRoute.get("/details/:_id", verifyUser, GetUserDetailsByIdController);

module.exports = DashboardRoute;
