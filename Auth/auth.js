const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const secretKey = process.env.JWT_SECRET || '74249eafc39c18e1e526108b4db8f29fc5032d5e73d6fc0d0361acf5a66b8143';

const signToken = async (payload) => {
    try {
        const signAsync = promisify(jwt.sign);
        return await signAsync(payload, secretKey, { expiresIn: "1h" });
    } catch (error) {
        throw new Error("Error signing token");
    }
};

exports.register = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (password.length < 5) {
            return res.status(400).json({ message: "Password should be at least 5 characters long" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

         await User.create({
            username,
            password: hashedPassword,
        });

        res.status(200).json({
            message: "User created",
            User,
        });
    } catch (error) {
        res.status(401).json({
            message: "User not created. Please try again.",
            error: error.message,
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                message: "Login not successful",
                error: "Invalid username or password",
            });
        }

        const token = await signToken({ userId: user._id, username: user.username });

        res.status(200).json({
            message: "Logged in",
            user,
            token,
        });
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error: error.message,
        });
    }
};

exports.update = async (req, res) => {
    const { role, id } = req.body;
    if (role && id) {
        try {
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            if (user.role !== "admin") {
                user.role = role;
                await user.save();

                res.status(200).json({
                    message: "User role updated successfully",
                    user,
                });
            } else {
                res.status(403).json({
                    message: "Cannot update the role of an admin user",
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "An error has occurred",
                error: error.message,
            });
        }
    } else {
        res.status(400).json({
            message: "Role and ID are required for updating user role",
        });
    }
};