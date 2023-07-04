const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Regiter a new user
//@route GET /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Please provide all the fields");
    } 
    const userAvailable = await User.findOne({email});
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    console.log(`User created successfully: ${user}`);
    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
    res.json({message: "Register the user"});
});

//@desc Login user
//@route GET /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide all the fields");
    }
    const user = await User.findOne({email});
    if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401);
        throw new Error("Invalid email or password");
    } else {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }, 
        }, process.env.ACCESS_TOKEN_SECRET, 
            {expiresIn: "15m"}
        );
        res.status(200).json({accessToken});
    }

    res.json({message: "Login the user"});
});

//@desc Get current user
//@route GET /api/users/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {
    registerUser,
    loginUser,
    currentUser
};