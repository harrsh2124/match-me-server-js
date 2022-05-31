const bcrypt = require("bcrypt");

const saltRounds = 10;

const encryptPassword = async (plainPassword) => {
    await bcrypt.hash(plainPassword, 10);
};

const decryptPassword = async (plainPassword, encryptedPassword) => {
    await bcrypt.compare(plainPassword, encryptedPassword);
};

module.exports = {
    encryptPassword,
    decryptPassword,
};
