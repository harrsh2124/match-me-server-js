require("dotenv").config();

const app = require("./app");
const { PORT } = require("./config/constants");
const connectDB = require("./config/db");
const logger = require("./config/logger");
const routes = require("./routes");

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}...`);
        });

        app.use("/api/v1", routes);
    })
    .catch((error) => {
        logger.error(error.message);
    });
