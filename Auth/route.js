const express = require("express");
const router = express.Router();
const { register, login, update } = require("./auth");


router.route("/register").post(register);
router.post("/login", login);
router.put("/update", update);

module.exports = router;