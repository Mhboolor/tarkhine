const { StatusCodes: HttpStatus } = require("http-status-codes");

exports.indexPage = async (req, res, next) => {
  try {
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "Home Page Store",
      },
    });
  } catch (err) {
    next(err);
  }
};
