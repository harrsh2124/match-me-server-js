const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5050;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const JWT_SECRET = process.env.JWT_SECRET;
const DB_UPDATE_OPTIONS = {
    new: true,
};

module.exports = {
    MONGODB_URI,
    PORT,
    ADMIN_EMAIL,
    JWT_SECRET,
    DB_UPDATE_OPTIONS,
};
