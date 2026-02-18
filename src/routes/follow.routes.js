const express = require("express");
const userController = require("../controllers/follow.controllers")
const identifyUser = require("../middleware/user.middleware")

const followRoute = express.Router();

/**@Routes: post /api/users/follow/:userId 
 * @description follow user
 * @access private
*/
followRoute.post("/follow/:userId",identifyUser,userController.followController)
followRoute.post("/unfollow/:userId",identifyUser,userController.unFollowController)
followRoute.post("/accept/:userId",identifyUser,userController.acceptController)
followRoute.post("/rejected/:userId",identifyUser,userController.rejectedController)


module.exports  = followRoute;
