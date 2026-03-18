import { Server } from "socket.io";

let io;

export function initSocket(httpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  console.log("socket.io server is running");

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Join a post room
    socket.on("comments:join", (postId) => {
      socket.join(postId);
      console.log(`User ${socket.id} joined post ${postId}`);
    });

    // Handle new comment
    socket.on("comments:new", ({ postId, comment }) => {
      // broadcast to everyone in that post room
      io.to(postId).emit("comments:update", comment);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}

export function getIo() {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }
  return io;
}