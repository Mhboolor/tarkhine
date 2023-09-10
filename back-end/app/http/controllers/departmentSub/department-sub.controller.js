const DepartmentSubModel = require("../../models/department-sub/department-sub.model");
const { departmentSubValidation } = require("../../validation/department/department.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { default: mongoose } = require("mongoose");

exports.createDepartmentSub = async (req, res, next) => {
  try {
    const validation = await departmentSubValidation.validateAsync(req.body);
    const { title, parent } = validation;
    const departmentSub = await DepartmentSubModel.create({ title, parent });
    if (!departmentSub) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "زیر دپارتمانت مورد نظر ایجاد نشد",
        },
      });
    }

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "زیر دپارتمانت مورد نظر با موفقیت ایجاد شد",
        departmentSub,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.removeDepartmentSub = async (req, res, next) => {
  try {
    const { field } = req.params;
    const departmentSub = await findDepartment(field);
    const removeResult = await DepartmentSubModel.deleteOne({
      _id: departmentSub._id,
    });
    if (!removeResult.deletedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "زیر دپارتمانت مورد نظر حذف نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "زیر دپارتمانت مورد نظر با موفقیت حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.updateDepartmentSub = async (req, res, next) => {
  try {
    const { field } = req.params;
    const { title } = req.body;
    const departmentSub = await findDepartment(field);
    const updateResult = await DepartmentSubModel.updateOne(
      {
        _id: departmentSub._id,
      },
      {
        $set: { title },
      }
    );
    if (!updateResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "زیر دپارتمانت مورد نظر به روزرسانی نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "زیر دپارتمانت مورد نظر با موفقیت به روزرسانی شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.listOfDepartmentSub = async (req, res, next) => {
  try {
    const list = await DepartmentSubModel.find({})
      .populate([{ path: "parent", select: { title: 1, _id: 0 } }])
      .lean();
    if (!list) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "لیستی از زیر دپارتمانت ها یافت نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "لیست موجود از زیر دپارتمانت ها با موفقیت بازگردانی شدند",
        list,
      },
    });
  } catch (err) {
    next(err);
  }
};

async function findDepartment(field) {
  const findQuery = mongoose.isValidObjectId(field) ? { _id: field } : { title: field };
  const departmentSub = await DepartmentSubModel.findOne(findQuery);
  if (!departmentSub) {
    return res.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "دپارتمانت مورد نظر یافت نشد",
      },
    });
  }
  return departmentSub;
}
