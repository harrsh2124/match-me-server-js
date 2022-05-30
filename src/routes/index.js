const express = require("express");
const AuthRoute = require("./auth.router");

const routes = express();

routes.use("/auth", AuthRoute);

module.exports = routes;
