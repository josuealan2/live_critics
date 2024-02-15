const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = Mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        allowNull: false,
    },
    password: {
        type: String,
        minlength: 5,
        required: true,
        allowNull: false,
    // },
    // email: {
    //     type: String,
    //     allowNull: false,
    //     unique: true,
    //     // validate: {
    //     //     isEmail: true,
    //     // },
    // },
    // role: {
    //     type: String,
    //     default: "Basic",
    //     required: true,
    },
},
{
    timestamps: false,
});

UserSchema.pre('save', async function (next) {
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});

const User = Mongoose.model("User", UserSchema)

module.exports = User