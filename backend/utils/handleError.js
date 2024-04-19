import AppError from "./appError.js";

export default function handleError(err, req, res, next) {
  // unique index error
  if (err.code === 11000) err = handleDuplicateField(err);

  if (err.name === "JsonWebTokenError") err = handleJWTError();
  if (err.name === "TokenExpiredError") err = handleJWTExpiredError();

  const message = err.message || "Internal server error";
  const code = err.statusCode || 500;

  res.status(code).json({
    success: false,
    message,
  });
}

function handleDuplicateField(err) {
  const field = Object.keys(err.keyPattern)[0];
  return new AppError(`This ${field} has already been used`, 400);
}

function handleJWTError() {
  return new AppError("Invalid token. Please log in again!", 401);
}

function handleJWTExpiredError() {
  return new AppError("Token has expired! Please log in again!", 401);
}
