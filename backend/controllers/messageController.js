import Conversation from "../models/conversationModel.js";
import Message from "../models/messageMode.js";
import catchAsyncError from "../utils/catchError.js";
import AppError from "../utils/appError.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = catchAsyncError(async (req, res, next) => {
  const { message } = req.body;
  const { receiverId } = req.params;
  const senderId = req.userId;

  if (!message) return next(new AppError("No message found!", 400));

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const messageDoc = await Message.create({
    sender: senderId,
    receiver: receiverId,
    message,
    conversation: conversation.id,
  });

  const recieverSocketId = getReceiverSocketId(receiverId);

  if (receiverId) {
    io.to(recieverSocketId).emit("newMessage", messageDoc);
  }

  res.status(200).json({
    success: true,
    message: messageDoc,
  });
});

export const getMessages = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const conversation = await Conversation.findOne({
    participants: { $all: [req.userId, id] },
  });

  let messages = [];

  if (conversation) {
    messages = await Message.find({ conversation: conversation.id });
  }

  res.status(200).json({
    success: true,
    data: {
      messages,
    },
  });
});
