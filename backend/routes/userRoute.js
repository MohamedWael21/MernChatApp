import express from "express";
import { getAllUsers } from "../controllers/userController.js";
import isAuth from "../middleware/isAuth.js";

const router = express.Router();

router.get("/", isAuth, getAllUsers);

export default router;
