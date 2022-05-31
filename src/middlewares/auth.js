const { expressjwt: jwt } = require("express-jwt");
const { JWT_SECRET } = require("../config/constants");

const authenticateToken = () => {
    return [
        jwt({
            secret: JWT_SECRET,
            algorithms: ["HS256"],
            userProperty: "auth",
            getToken: function getJWT(req) {
                let token = req.header("authorization");

                if (token) {
                    token = token.split(" ");
                    if (token[0] === "Bearer") {
                        return token[1];
                    }
                }
            },
        }),
        (err, req, res, next) => {
            logger.error("Invalid token received.");
            return res.status(err.status).json({
                success: false,
                message: err.inner.message,
            });
        },
    ];
};

module.exports = authenticateToken;
