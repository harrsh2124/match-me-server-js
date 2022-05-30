require("dotenv").config();

const app = require("./app");
const routes = require("./routes");

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server running successfully.",
    });
});

app.use("/api/v1", routes);
