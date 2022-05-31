const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "match_me",
        };
        await mongoose.connect(MONGODB_URI, options);

        console.log("MongoDB connected...");
    } catch (error) {
        console.log("DB connection failed...");
        console.log(error.message);
    }
};

module.exports = connectDB;
