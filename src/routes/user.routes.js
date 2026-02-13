const express = require("express");
const authRoute = express.Router();
const userControllers  = require("../controllers/user.controllers")

//create Registration api

authRoute.post("/registration",userControllers.registrationControllers);

authRoute.post("/login",userControllers.loginControllers)

module.exports = authRoute;
