const BlogModel = require("../../models/blog/blog.model");
const CourseUserModel = require("../../models/course-user/course-user.model");
const CourseModel = require("../../models/course/course.model");
const ProductModel = require("../../models/product/product.model");
const UserModel = require("../../models/user/user.model");
const { StatusCodes: httpStatus } = require("http-status-codes");

exports.getPAdmin = async (req, res, next) => {
  try {
    const user = req.user;
    const coursesRegistersCount = await CourseUserModel.find({}).lean().count();
    const coursesCount = await CourseModel.find({}).lean().count();
    const productsCount = await ProductModel.find({}).lean().count();
    const blogsCount = await BlogModel.find({}).lean().count();
    const episodesCount = await CourseModel.find({})
      .populate([{ path: "chapters", populate: { path: "episodes" } }])
      .lean()
      .count();
    let users = await UserModel.find().sort({ _id: -1 }).lean();

    const admin = await UserModel.findOne({ _id: user._id });
    users = users.slice(0, 5);

    return res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      data: {
        infos: [
          {
            count: coursesRegistersCount,
            title: "ثبت نامی‌ها",
          },
          {
            count: coursesCount,
            title: "دوره‌ها",
          },
          {
            count: episodesCount,
            title: "جلسات",
          },
          {
            count: productsCount,
            title: "محصولات",
          },
          {
            count: blogsCount,
            title: "مقالات",
          },
        ],
        lastUsers: users,
        adminName: admin.first_name,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.admins = async (req, res, next) => {
  try {
    const AllAdmin = await UserModel.find({ $or: [{ role: "ADMIN" }, { role: "ALL" }] }).lean();

    return res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      data: {
        message: "تمامی ادمین های موجود بازگردانی شدند",
        AllAdmin,
      },
    });
  } catch (err) {
    next(err);
  }
};
