const mongoose = require("mongoose");
const { GENDER_ENUM } = require("../config/enums/gender.enum");

const { ObjectId } = mongoose.Schema;

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        firstName: {
            type: String,
            required: true,
            trim: true,
        },

        lastName: {
            type: String,
            required: true,
            trim: true,
        },

        gender: {
            type: String,
            trim: true,
            required: true,
            enum: GENDER_ENUM,
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        isPrivate: {
            type: Boolean,
            default: false,
        },

        isHidden: {
            type: Boolean,
            default: false,
        },

        userCredentials: {
            type: ObjectId,
            ref: "UserCredentials",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", UserSchema);
