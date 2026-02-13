const express = require("express");
const authRoute = require("./routes/user.routes");
const postRoute = require("./routes/post.routes");

const cookie = require("cookie-parser");
const app = express();
//use middleware
app.use(express.json());
app.use(cookie());
//auth api prefix
app.use("/api/auth", authRoute);

//post api prefix
app.use("/api/post", postRoute);

module.exports = app;
