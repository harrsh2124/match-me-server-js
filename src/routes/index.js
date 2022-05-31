const express = require("express");
const AuthRoute = require("./auth.router");
const UserRoute = require("./user.router");

const routes = express();

routes.use("/auth", AuthRoute);
routes.use("/user", UserRoute);

module.exports = routes;
