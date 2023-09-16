const CommentModel = require("../../models/comments/comment.model");
const ProductModel = require("../../models/product/product.model");
const CreateCommentValidation = require("../../validation/comment/comment.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");

exports.createCommentForProduct = async (req, res, next) => {
  try {
    const validation = await CreateCommentValidation.validateAsync(req.body);
    const { comment, productName, score } = validation;
    const user = req.user;
    const product = await ProductModel.findOne({ title: productName });

    const createCommentForProduct = await CommentModel.create({
      comment,
      productName: product._id,
      commentUser: user._id,
      score,
    });
    if (!createCommentForProduct) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "کامنت برای محصول مورد نظر ایجاد نشد",
          createCommentForProduct,
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "کامنت برای محصول مورد نظر ایجاد شد",
        createCommentForProduct,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.createAnswer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validation = await CreateCommentValidation.validateAsync(req.body);
    const { comment } = validation;
    const user = req.user;
    const commentResult = await CommentModel.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          answers: {
            comment,
            user: user._id,
          },
        },
      }
    );
    if (!commentResult.modifiedPaths) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "پاسخ کامنت مورد نظر با موفقیت ثبت نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "پاسخ کامنت مورد نظر با موفقیت ثبت شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllComments = async (req, res, next) => {
  try {
    const comments = await CommentModel.find({})
      .populate([
        {
          path: "commentUser",
          select: { first_name: 1, last_name: 1, email: 1, role: 1, _id: 0 },
        },
        {
          path: "answers",
          populate: {
            path: "AnswerUser",
            select: {
              first_name: 1,
              last_name: 1,
              email: 1,
              role: 1,
              _id: 0,
            },
          },
        },

        {
          path: "productName",
          select: { title: 1, _id: 0 },
        },
      ])
      .lean();

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی کامنت های موجود با موفقیت بازگردانده شدند",
        comments,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.showComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateResult = await CommentModel.updateOne({ _id: id }, { show: 1 });
    if (!updateResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "حالت مشاهده کامنت فعال نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "حالت مشاهده کامنت فعال شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.removeComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeResult = await CommentModel.findOneAndDelete({ _id: id });
    if (!removeResult.modifiedPaths) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "کامنت مورد نظر با موفقیت حذف نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "کامنت مورد نظر با موفقیت حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
