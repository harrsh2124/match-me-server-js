const mongoose = require("mongoose");
const logger = require("./logger");

const connectDB = async () => {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "match_me",
        };
        await mongoose.connect(MONGODB_URI, options);

        logger.info("MongoDB connected...");
    } catch (error) {
        logger.info("DB connection failed...");
        logger.info(error.message);
    }
};

module.exports = connectDB;
