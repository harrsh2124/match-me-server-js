require("dotenv").config();

const app = require("./app");
const { PORT } = require("./config/constants");
const connectDB = require("./config/db");
const routes = require("./routes");

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}...`);
    });

    app.get("/", (req, res) => {
        return res.status(200).json({
            message: "Server running successfully.",
        });
    });

    app.use("/api/v1", routes);
});
