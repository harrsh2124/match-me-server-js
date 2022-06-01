const express = require("express");
const GetAllUsersController = require("../controllers/dashboard/getAllUsers");
const verifyUser = require("../middlewares/verifyUser");
const paginationSchema = require("../schemas/common/pagination.schema");
const schemaValidator = require("../utils/schemaValidator");

const DashboardRoute = express.Router();

DashboardRoute.get(
    "/all-users",
    schemaValidator(paginationSchema, (type = "query")),
    verifyUser,
    GetAllUsersController
);

module.exports = DashboardRoute;
