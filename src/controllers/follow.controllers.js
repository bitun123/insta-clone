const followModels = require("../models/follow.models");



async function followController(req, res) {
  const followId = req.user.id;
  const followeeId = req.params.userId;

  if (followeeId == followId) {
    return res.status(400).json({
      message: "you can not  follow your self",
    });
  }

  const isAlreadyFolloer = await followModels.findOne({
    follower: followId,
    followee: followeeId,
  });

  if (isAlreadyFolloer) {
    return res.status(200).json({
      message: "you already follow",
      follow: isAlreadyFolloer,
    });
  }

  const follow = await followModels.create({
    follower: followId,
    followee: followeeId,
  });

  res.status(201).json({
    message: `you follow  ${followeeId}`,
    follow,
  });

  // res.status(201).json({
  //     message : `you follow ${followId}`,
  //     follow : follow
  // })
}

async function unFollowController(req,res){

}

module.exports = {
  followController,
  unFollowController
};
