const express = require("express");
const authRoute = require("./routes/user.routes");
const cookie = require("cookie-parser");
const app = express();
//use middleware
app.use(express.json());
app.use(cookie());

app.use("/api/auth", authRoute);
module.exports = app;
