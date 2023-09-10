const MenuModel = require("../../models/menu/menu.model");
const MenuValidation = require("../../validation/menu/menu.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { default: mongoose } = require("mongoose");
const { deleteInvalidPropertyInObject, copyObject } = require("../../../utils/functions.utils");

exports.createMenu = async (req, res, next) => {
  try {
    const validation = await MenuValidation.validateAsync(req.body);
    const { title } = validation;
    await findMenuWithTitle(title);
    const menu = await MenuModel.create({ title });
    if (!menu) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "منو مورد نظر ایجاد نشد",
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "منو مورد نظر با موفقیت ایجاد شد",
        menu,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.createSubmenu = async (req, res, next) => {
  try {
    const { titleName } = req.params;
    const validation = await MenuValidation.validateAsync(req.body);
    const { title } = validation;
    await findMenuWithTitle(title);
    const menu = await MenuModel.findOneAndUpdate(
      { title: titleName },
      {
        $push: {
          submenu: {
            title,
          },
        },
      }
    );
    if (!menu) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "زیر منو مورد نظر ایجاد نشد",
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "زیر منو مورد نظر با موفقیت ایجاد شد",
        menu,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getListOfMenus = async (req, res, next) => {
  try {
    const menu = await MenuModel.find({ __v: 0 });
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی منوهای موجود با موفقیت به روز رسانی شدند",
        menu,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateMenu = async (req, res, next) => {
  try {
    const { field } = req.params;
    const validation = await MenuValidation.validateAsync(req.body);
    const menu = await findMenuWithIdOrTitle(field);
    const data = copyObject(validation);
    deleteInvalidPropertyInObject(data, []);
    const updateResult = await MenuModel.updateOne({ _id: menu._id }, { $set: data });
    if (!updateResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "منو مورد نظر با موفقیت به روزرسانی نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "منو مورد نظر با موفقیت به روزرسانی شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.removeMenu = async (req, res, next) => {
  try {
    const { field } = req.params;
    const menu = await findMenuWithIdOrTitle(field);
    const removeResult = await MenuModel.deleteOne({ _id: menu._id });
    if (!removeResult.deletedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "منو مورد نظر با موفقیت حذف نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "منو مورد نظر با موفقیت حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

const findMenuWithTitle = async (title) => {
  const menu = await MenuModel.findOne({ title });
  if (menu) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      data: {
        message: "منو مورد نظر از قبل ایجاد شده است",
      },
    });
  }
};

const findMenuWithIdOrTitle = async (field) => {
  const findQuery = mongoose.isValidObjectId(field) ? { _id: field } : { title: field };

  const menu = await MenuModel.findOne(findQuery);
  if (!menu) {
    return res.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "منو مورد نظر یافت نشد",
      },
    });
  }
  return menu;
};
