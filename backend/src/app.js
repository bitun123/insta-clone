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

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// For React Router - serve index.html for all non-API routes
app.get("/*", (_req, res) => {
  const indexPath = path.join(__dirname, "../frontend/dist/index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error sending index.html:", err);
      res.status(404).json({
        message: "Frontend not found",
        error: "Make sure to build the frontend first: npm run build in the frontend directory"
      });
    }
  });
});

module.exports = app;
