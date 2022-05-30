const mongoose = require("mongoose");

const UserCredentialsSchema = mongoose.Schema(
    {
        password: {
            type: String,
            required: true,
            trim: true,
        },

        contactNumber: {
            type: String,
            required: true,
            trim: true,
        },

        token: {
            type: String,
        },

        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("UserCredentials", UserCredentialsSchema);
