const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: [true, "Username already exists"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "Password must be at least 6 characters long"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);