const { StatusCodes: HttpStatus } = require("http-status-codes");
const {
  copyObject,
  checkExistProduct,
  checkExistCourse,
} = require("../../../utils/functions.utils");
const UserModel = require("../../models/user/user.model");

exports.addProductInBasket = async (req, res, next) => {
  try {
    const { productID } = req.params;
    const user = req.user;
    await checkExistProduct(productID);
    const product = await findProductInBasket(user._id, productID);
    let message;
    if (product) {
      await UserModel.updateOne(
        {
          _id: user._id,
          "basket.products.productID": productID,
        },
        {
          $inc: {
            "basket.products.$.count": 1,
          },
        }
      );
      message = "یک عدد به محصول مورد نظر داخل سبد خرید شما اضافه شد";
    } else {
      await UserModel.updateOne(
        { _id: user._id },
        {
          $push: {
            "basket.products": {
              productID,
              count: 1,
            },
          },
        }
      );
      message = "محصول مورد نظر با موفقیت به سبد خرید شما اضافه شد";
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.removeProductFromBasket = async (req, res, next) => {
  try {
    const { productID } = req.params;
    const user = req.user;
    await checkExistProduct(productID);
    const product = await findProductInBasket(user._id, productID);
    let message;
    if (product.count > 1) {
      await UserModel.updateOne(
        {
          _id: user._id,
          "basket.products.productID": productID,
        },
        {
          $inc: {
            "basket.products.$.count": -1,
          },
        }
      );
      message = "یک عدد از محصول مورد نظر داخل سبد خرید شما کم شد";
    } else {
      await UserModel.updateOne(
        { _id: user._id },
        {
          $pull: {
            "basket.products": {
              productID,
            },
          },
        }
      );
      message = "محصول مورد نظر از سبد خرید شما حذف شد";
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.removeAllProductFromBasket = async (req, res, next) => {
  try {
    const user = req.user;

    await UserModel.updateOne(
      { _id: user._id },
      {
        $pull: {
          "basket.products": {},
        },
      }
    );

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی محصولات از سبد خرید شما پاک شدند",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.addCourseInBasket = async (req, res, next) => {
  try {
    const { courseID } = req.params;
    const user = req.user;
    await checkExistCourse(courseID);
    const course = await findCourseInBasket(user._id, courseID);
    if (course) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        data: {
          message: "این دوره قبلا به سبد خرید شما اضافه شده است",
        },
      });
    } else {
      await UserModel.updateOne(
        { _id: user._id },
        {
          $push: {
            "basket.courses": {
              courseID,
              count: 1,
            },
          },
        }
      );
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "دوره مورد نظر با موفقیت به سبد خرید شما اضافه شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.removeCourseFromBasket = async (req, res, next) => {
  try {
    const { courseID } = req.params;
    const user = req.user;
    await checkExistCourse(courseID);
    const course = await findCourseInBasket(user._id, courseID);
    if (!course) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "دوره مورد نظر در سبد خرید شما یافت نشد",
        },
      });
    }
    await UserModel.updateOne(
      { _id: user._id },
      {
        $pull: {
          "basket.courses": {
            courseID,
          },
        },
      }
    );

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "دوره مورد نظر از سبد خرید شما حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

async function findProductInBasket(userID, productID) {
  const findResult = await UserModel.findOne(
    { _id: userID, "basket.products.productID": productID },
    { "basket.products.$": 1 }
  );
  const userDetail = copyObject(findResult);
  return userDetail?.basket?.products?.[0];
}

async function findCourseInBasket(userID, courseID) {
  const findResult = await UserModel.findOne(
    { _id: userID, "basket.courses.courseID": courseID },
    { "basket.courses.$": 1 }
  );
  const userDetail = copyObject(findResult);
  return userDetail?.basket?.courses?.[0];
}
