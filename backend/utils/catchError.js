const catchAsyncError = (handleFunc) => (req, res, next) => {
  Promise.resolve(handleFunc(req, res, next)).catch(next);
};

export default catchAsyncError;
