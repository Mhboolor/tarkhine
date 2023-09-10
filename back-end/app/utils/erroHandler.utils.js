const createHttpError = require("http-errors");
const { StatusCodes: HttpStatus } = require("http-status-codes");

function notFound(res) {
  res.status(HttpStatus.NOT_FOUND).json({
    statusCode: HttpStatus.NOT_FOUND,
    success: false,
    message: "صفحه یا آدرس مورد نظر یافت نشد",
  });
}

function errors(error, res) {
  const serverError = createHttpError.InternalServerError();
  const statusCode = error.status || serverError.status;
  const message = error.message || serverError.message;
  return res.status(statusCode).json({
    statusCode,
    success: false,
    errors: {
      message,
    },
  });
}

const ErrorHandler = {
  notFound,
  errors,
};

module.exports = ErrorHandler;
