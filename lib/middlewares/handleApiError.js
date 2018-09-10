const ApiError = require('@models/ApiError');

module.exports = (error, req, res, next) => {
  if (error) {
    if (error instanceof ApiError) {
      return res
        .status(error.status || 500)
        .json({
          message: error.message,
          payload: error.payload
        });
    }

    return next(error);
  }

  return next();
};
