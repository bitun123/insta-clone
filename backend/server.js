require("dotenv").config()
const app = require("./src/app");
const connectToDb = require("./src/config/database")
const http = require("http")
const {initSocket} = require("./src/sockets/server.socket")
//connected to the db
connectToDb()

const httpServer = http.createServer(app);
initSocket(httpServer);
//server running on  port 3000
httpServer.listen(3000, () => {
  console.log("server is running on port 3000");
});
