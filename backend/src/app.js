const express = require("express");
const cookie = require("cookie-parser");
const cors = require("cors");
const path = require("path");

/**
 * require all routes
 */
const authRoute = require("./routes/user.routes");
const postRoute = require("./routes/post.routes");
const followRoute = require("./routes/follow.routes");

const app = express();
//use middleware
app.use(express.json());
app.use(cookie());
app.use(
  cors({
    credentials: true,
    origin:[ "http://localhost:5173", "https://insta-clone-iv64.onrender.com" ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.static("./public"));

//auth api prefix
app.use("/api/auth", authRoute);

//post api prefix
app.use("/api/post", postRoute);

//follow api prefix
app.use("/api/follow", followRoute);

// 404 handler for undefined routes
app.use((_req, res) => {
  res.status(404).json({
    message: "Route not found",
    error: "The requested endpoint does not exist"
  });
});

module.exports = app;
