const express = require("express");
const cookie = require("cookie-parser");
const cors = require("cors");

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
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

//auth api prefix
app.use("/api/auth", authRoute);

//post api prefix
app.use("/api/post", postRoute);

//follow api prefix

app.use("/api/users", followRoute);

module.exports = app;
