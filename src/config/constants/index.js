const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5050;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    MONGODB_URI,
    PORT,
    ADMIN_EMAIL,
    JWT_SECRET,
};
