import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";

import handleError from "./utils/handleError.js";
import connectToDb from "./utils/dbConnect.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import { app, server } from "./socket/socket.js";
import path from "path";

const __dirname = path.resolve();

// load env variables
dotenv.config();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// all routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(path.join(__dirname, "frontend", "dist"))));

app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(process.env.PORT, () => {
  connectToDb()
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
  console.log(`Server Running on Port ${process.env.PORT}`);
});

// handle all error
app.use(handleError);
