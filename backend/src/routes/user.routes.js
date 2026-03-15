const express = require("express");
const authRoute = express.Router();
const userControllers  = require("../controllers/user.controllers")
const identifyUser  = require("../middleware/user.middleware")

//create Registration api

authRoute.post("/registration",userControllers.registrationControllers);

authRoute.post("/login",userControllers.loginControllers)


authRoute.get("/get-me",identifyUser,userControllers.getControllers)

authRoute.post("/logout",identifyUser,userControllers.logoutControllers)

module.exports = authRoute;
