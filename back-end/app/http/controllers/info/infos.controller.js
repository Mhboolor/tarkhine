const ProductModel = require("../../models/product/product.model");
const UserModel = require("../../models/user/user.model");
const { StatusCodes: httpStatus } = require("http-status-codes");

exports.getPAdmin = async (req, res, next) => {
  try {
    const user = req.user;
    const productsCount = await ProductModel.find({}).lean().count();
    let users = await UserModel.find().sort({ _id: -1 }).lean();

    const admin = await UserModel.findOne({ _id: user._id });
    users = users.slice(0, 5);

    return res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      data: {
        infos: [
          {
            count: productsCount,
            title: "محصولات",
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
