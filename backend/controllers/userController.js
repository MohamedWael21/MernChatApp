import User from "../models/userModel.js";
import catchAsyncError from "../utils/catchError.js";

export const getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find({ _id: { $ne: req.userId } }).select(
    "-password -gender"
  );

  res.status(200).json({
    success: true,
    data: {
      users,
    },
  });
});
