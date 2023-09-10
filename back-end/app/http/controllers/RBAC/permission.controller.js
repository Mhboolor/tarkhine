const PermissionModel = require("../../models/permission/permission.model");
const PermissionValidation = require("../../validation/RBAC/permission.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { copyObject, deleteInvalidPropertyInObject } = require("../../../utils/functions.utils");

exports.createNewPermission = async (req, res, next) => {
  try {
    const validation = await PermissionValidation.validateAsync(req.body);
    const { name, description } = validation;
    await findPermissionWithName(name);
    const permissions = await PermissionModel.create({ name, description });
    if (!permissions) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "دسترسی مورد نظر ایجاد نشد",
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "دسترسی مورد نظر ایجاد شد",
        permissions,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllPermission = async (req, res, next) => {
  try {
    const permissions = await PermissionModel.find({});
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی دسترسی های موجود بازگردانده شدند",
        permissions,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.removePermission = async (req, res, next) => {
  try {
    const { id } = req.params;
    await findPermissionWithID(id);
    const removeResult = await PermissionModel.deleteOne({ _id: id });
    if (!removeResult.deletedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "دسترسی مورد نظر حذف نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "دسترسی مورد نظر با موفقیت حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updatePermission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const permission = await findPermissionWithID(id);
    const data = copyObject(req.body);
    deleteInvalidPropertyInObject(data, []);
    const updateResult = await PermissionModel.updateOne({ _id: permission._id }, { $set: data });
    if (!updateResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "به روزرسانی دسترسی مورد نظر با موفقیت انجام نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "به روزرسانی دسترسی مورد نظر با موفقیت انجام شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

const findPermissionWithID = async (ID) => {
  const permission = await PermissionModel.findById(ID);
  if (!permission) {
    return res.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "دسترسی مورد نظر یافت نشد",
      },
    });
  }
  return permission;
};

const findPermissionWithName = async (name) => {
  const permission = await PermissionModel.findOne({ name });
  if (permission) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "دسترسی مورد نظر از قبل ایجاد شده است",
      },
    });
  }
};
