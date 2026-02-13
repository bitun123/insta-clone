const express = require("express");
const authController = require("../controllers/authControllers");
const authRouter = express.Router();

authRouter.post("/register", authController.registerControllers);
authRouter.post("/login", authController.loginControllers);

module.exports = authRouter;
