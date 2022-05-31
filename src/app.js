const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./config/logger");

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

module.exports = app;
