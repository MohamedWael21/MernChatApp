import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const usersSocketMap = {};

function getReceiverSocketId(receiverId) {
  return usersSocketMap[receiverId];
}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  const { userId } = socket.handshake.query;

  if (userId) usersSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(usersSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnect", socket.id);
    delete usersSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(usersSocketMap));
  });
});

export { app, io, server, getReceiverSocketId };
