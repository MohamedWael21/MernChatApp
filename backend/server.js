import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";

import handleError from "./utils/handleError.js";
import connectToDb from "./utils/dbConnect.js";
import cookieParser from "cookie-parser";

const app = express();

// load env variables
dotenv.config();

// middlewares
app.use(express.json());
app.use(cookieParser());

// all routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT, () => {
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