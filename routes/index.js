const express = require("express");
const AuthRoute = require("./auth.router");
const DashboardRoute = require("./dashboard.router");
const UserRoute = require("./user.router");

const routes = express();

routes.use("/auth", AuthRoute);
routes.use("/dashboard", DashboardRoute);
routes.use("/user", UserRoute);

module.exports = routes;
