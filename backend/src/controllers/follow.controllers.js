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
    status: "pending",
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

async function unFollowController(req, res) {
  const followerId = req.user.id;
  const followeeId = req.params.userId;

  const isUserFollowing = await followModels.findOne({
    follower: followerId,
    followee: followeeId,
  });

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `you are not following${followId}`,
    });
  }

  await followModels.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: "you have Unfollowed",
  });
}

async function acceptController(req, res) {
  const followerId = req.user.id;
  const myId = req.params.userId;

  const followRequest = await followModels.findOne({
    follower: followerId,
    followee: myId,
  });

  if (!followRequest) {
    return res.status(404).json({
      message: "No pending follow request found",
    });
  }

  if (followRequest.status === "Rejected") {
 return    res.status(404).json({
      message: "follow request already Rejected",
    });
  }



  ((followRequest.status = "accepted"), await followRequest.save());
  res.status(200).json({
    message: "follow request accepted",
    followRequest,
  });
}

async function rejectedController(req, res) {
  const followerId = req.user.id;
  const myId = req.params.userId;

  const followRequest = await followModels.findOne({
    follower: followerId,
    followee: myId,
  });



console.log(followRequest)
  if (!followRequest) {
    return res.status(404).json({
      message: "follow Request not found",
    });
  }

  console.log(followRequest)


  if (followRequest.status === "accepted") {
    return res.status(401).json({
      message: "You already accepted the request ",
    });
  }
  ((followRequest.status = "Rejected"), await followRequest.save());

  res.status(200).json({
    message: "follow request successfully Rejected",
  });
}

module.exports = {
  followController,
  unFollowController,
  acceptController,
  rejectedController,
};
