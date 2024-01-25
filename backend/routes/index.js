const { User } = require("../db");

const express = require("express");

const router = express.Router();
const user = require("./userRouter");
const account = require("./accountRoutes");

router.use("/user", user);
router.use("/account", account);

module.exports = router;
