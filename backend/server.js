require("dotenv").config()
const server = require("./src/app");
const connectToDb = require("./src/config/database")


connectToDb()
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
