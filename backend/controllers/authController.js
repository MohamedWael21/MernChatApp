import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import catchAsyncError from "../utils/catchError.js";
import generateTokenAndSetCookie from "../utils/generateTokin.js";
import bcryptjs from "bcryptjs";

export const signup = catchAsyncError(async (req, res, next) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  if (password !== confirmPassword)
    return next(new AppError("Password don't match", 400));

  const profilePic = `https://avatar.iran.liara.run/public/${
    gender === "male" ? "boy" : "girl"
  }?username=${username}`;

  const user = await User.create({
    fullName,
    username,
    password,
    gender,
    profilePic,
  });

  generateTokenAndSetCookie(user.id, res);

  res.status(201).json({
    success: true,
    data: {
      user: {
        _id: user.id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
      },
    },
  });
});

export const login = catchAsyncError(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    return next(new AppError("Please enter username and password", 400));

  const user = await User.findOne({ username });

  const isPasswordCorrect = await bcryptjs.compare(
    password,
    user?.password || ""
  );

  if (!user || !isPasswordCorrect) {
    return next(new AppError("username or password incorrect", 401));
  }

  generateTokenAndSetCookie(user.id, res);

  res.status(201).json({
    success: true,
    data: {
      user: {
        _id: user.id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
      },
    },
  });
});

export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
  });
};
