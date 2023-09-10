const DepartmentModel = require("../../models/department/department.model");
const { departmentValidation } = require("../../validation/department/department.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { default: mongoose } = require("mongoose");

exports.createDepartment = async (req, res, next) => {
  try {
    const validation = await departmentValidation.validateAsync(req.body);
    const { title } = validation;
    const department = await DepartmentModel.create({ title });
    if (!department) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "دپارتمانت مورد نظر ایجاد نشد",
        },
      });
    }

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "دپارتمانت مورد نظر با موفقیت ایجاد شد",
        department,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.removeDepartment = async (req, res, next) => {
  try {
    const { field } = req.params;
    const department = await findDepartment(field);
    const removeResult = await DepartmentModel.deleteOne({
      _id: department._id,
    });
    if (!removeResult.deletedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "دپارتمانت مورد نظر حذف نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "دپارتمانت مورد نظر با موفقیت حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateDepartment = async (req, res, next) => {
  try {
    const { field } = req.params;
    const validation = await departmentValidation.validateAsync(req.body);
    const { title } = validation;
    const department = await findDepartment(field);
    const updateResult = await DepartmentModel.updateOne(
      {
        _id: department._id,
      },
      {
        $set: { title },
      }
    );
    if (!updateResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "دپارتمانت مورد نظر به روزرسانی نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "دپارتمانت مورد نظر با موفقیت به روزرسانی شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.listOfDepartments = async (req, res, next) => {
  try {
    const list = await DepartmentModel.find({}, { title: 1 }).lean();
    if (!list){
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "لیستی از دپارتمانت ها یافت نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "لیست موجود از دپارتمانت ها با موفقیت بازگردانی شدند",
        list,
      },
    });
  } catch (err) {
    next(err);
  }
};

async function findDepartment(field) {
  const findQuery = mongoose.isValidObjectId(field) ? { _id: field } : { title: field };
  const department = await DepartmentModel.findOne(findQuery);
  if (!department){
    return res.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "دپارتمانت مورد نظر یافت نشد",
      },
    });
  }
  return department;
}
