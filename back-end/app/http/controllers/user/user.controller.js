const { deleteInvalidPropertyInObject } = require("../../../utils/functions.utils");
const UserModel = require("../../models/user/user.model");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { changeRole, banUserValidation } = require("../../validation/user/user.validation");
const BanModel = require("../../models/ban/ban.model");

exports.getAllUsers = async (req, res, next) => {
  try {
    const { search } = req.query;
    const dataQuery = {};
    if (search) dataQuery["$text"] = { $search: search };
    const users = await UserModel.find(dataQuery, { "otp.expiresIn": 0, password: 0 });
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی کاربران موجود با موفقیت بازگردانده شدند",
        users,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.changeRoles = async (req, res, next) => {
  try {
    const validation = await changeRole.validateAsync(req.body);
    const { id, role } = validation;
    await UserModel.findByIdAndUpdate({ _id: id }, { role: role });
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "نقش کاربر مورد نظر تغییر یافت",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.banUser = async (req, res, next) => {
  try {
    const validation = await banUserValidation.validateAsync(req.params);
    const { id } = validation;
    const mainUser = await UserModel.findOne({ _id: id }).lean();
    if (!mainUser) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "کاربر مورد نظر یافت نشد",
        },
      });
    }
    const banUserResult = await BanModel.create({ mobile: mainUser.mobile });
    if (!banUserResult) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "بن شدن کاربر انجام نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "کاربر مورد نظر با موفقیت بن شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
