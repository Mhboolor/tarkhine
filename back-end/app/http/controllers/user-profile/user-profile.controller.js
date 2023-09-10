const { StatusCodes: HttpStatus } = require("http-status-codes");
const BlogModel = require("../../models/blog/blog.model");
const ProductModel = require("../../models/product/product.model");
const { getBasketOfUser } = require("../../../utils/functions.utils");
const CourseModel = require("../../models/course/course.model");

exports.getUserBookmarkedBlogs = async (req, res, next) => {
  try {
    const user = req.user;
    const blogs = await BlogModel.find({ bookmarks: user._id })
      .populate([
        {
          path: "author",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "category",
          select: { title: 1, _id: 0 },
        },
        {
          path: "likes",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "dislikes",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "bookmarks",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
      ])
      .lean();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "لیست ذخیره شده ها با موفقیت بازگردانده شد",
        blogs,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserBookmarkedProducts = async (req, res, next) => {
  try {
    const user = req.user;
    const products = await ProductModel.find({ bookmarks: user._id })
      .populate([
        {
          path: "supplier",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "category",
          select: { title: 1, _id: 0 },
        },
        {
          path: "likes",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "dislikes",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "bookmarks",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
      ])
      .lean();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "لیست ذخیره شده ها با موفقیت بازگردانده شد",
        products,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserBookmarkedCourses = async (req, res, next) => {
  try {
    const user = req.user;
    const courses = await CourseModel.find({ bookmarks: user._id })
      .populate([
        {
          path: "teacher",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "category",
          select: { title: 1, _id: 0 },
        },
        {
          path: "likes",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "dislikes",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "bookmarks",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
      ])
      .lean();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "لیست ذخیره شده ها با موفقیت بازگردانده شد",
        courses,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserBasket = async (req, res, next) => {
  try {
    const user = req.user;
    const userDetail = await getBasketOfUser(user._id);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "سبد خرید شما با موفقیت بازگردانی شد",
        userDetail,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateUserProfile = async (req, res, next) => {
  try {
    const userID = req.user._id;
    const data = req.body;
    const BlackListFields = ["mobile", "otp", "bills", "discount", "role", "Courses"];
    deleteInvalidPropertyInObject(data, BlackListFields);
    const updateResult = await UserModel.updateOne({ _id: userID }, { $set: data });
    if (!updateResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "کاربر مورد نظر با موفقیت به روزرسانی نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "کاربر مورد نظر با موفقیت به روزرسانی شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
