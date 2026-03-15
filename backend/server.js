require("dotenv").config()
const server = require("./src/app");
const connectToDb = require("./src/config/database")

//connected to the db
connectToDb()


//server running on  port 3000
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
