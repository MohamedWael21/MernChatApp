import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import isAuth from "../middleware/isAuth.js";

const router = express.Router();

router.get("/:id", isAuth, getMessages);
router.post("/send/:receiverId", isAuth, sendMessage);

export default router;
