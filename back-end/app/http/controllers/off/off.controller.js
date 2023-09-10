const OffModel = require("../../models/off/off.model");
const {
  createOff,
  getOneOff,
  setDiscountOnAll,
  getOneOffOfCourse,
} = require("../../validation/off/off.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { default: mongoose } = require("mongoose");
const ProductModel = require("../../models/product/product.model");
const CourseModel = require("../../models/course/course.model");

exports.createForProduct = async (req, res, next) => {
  try {
    const validation = await createOff.validateAsync(req.body);
    const { code, percent, max, product } = validation;
    const user = req.user;
    const newOff = await OffModel.create({
      code,
      percent,
      max,
      product,
      uses: 0,
      creator: user._id,
    });
    if (!newOff) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "تخفیف مورد نظر ایجاد نشد",
        },
      });
    }

    await ProductModel.findOneAndUpdate({ _id: product }, { discount: newOff.percent });
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "تخفیف مورد نظر با موفقیت ایجاد شد",
        newOff,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.createForCourse = async (req, res, next) => {
  try {
    const validation = await createOff.validateAsync(req.body);
    const { code, percent, max, course } = validation;
    const user = req.user;
    const newOff = await OffModel.create({
      code,
      percent,
      max,
      course,
      uses: 0,
      creator: user._id,
    });
    if (!newOff) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "تخفیف مورد نظر ایجاد نشد",
        },
      });
    }
    await CourseModel.findOneAndUpdate({ _id: course }, { discount: newOff.percent });
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "تخفیف مورد نظر با موفقیت ایجاد شد",
        newOff,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.getAll = async (req, res, next) => {
  try {
    const list = await OffModel.find({})
      .populate([
        {
          path: "creator",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            _id: 0,
          },
        },
        {
          path: "product",
          select: {
            title: 1,
            short_title: 1,
            text: 1,
            short_text: 1,
            _id: 0,
          },
        },
        {
          path: "course",
          select: {
            title: 1,
            text: 1,
            short_text: 1,
            _id: 0,
          },
        },
      ])
      .lean();
    if (list.length === 0) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "در حال حاظر تخفیفی وجود ندارد",
        },
      });
    }

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی تخفیف های موجود با موفقیت بازگردانده شدند",
        list,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.getOneForProduct = async (req, res, next) => {
  try {
    const { code } = req.params;
    const validation = await getOneOff.validateAsync(req.body);
    const { product } = validation;
    const off = await OffModel.findOne({ code, product }).lean();
    if (!off) {
      return res.status(HttpStatus.NOT_FOUND).json({
        data: {
          message: "کد مورد نظر معتبر نمی باشد",
        },
      });
    } else if (off.max === off.uses) {
      return res.status(HttpStatus.CONFLICT).json({
        data: {
          message: "سقف استفاده از کد مورد نظر تمام شده است",
        },
      });
    } else {
      const Off = await OffModel.findOneAndUpdate({ code, product }, { uses: off.uses + 1 })
        .populate([
          {
            path: "product",
            select: {
              title: 1,
              short_title: 1,
              text: 1,
              short_text: 1,
              _id: 0,
            },
          },
        ])
        .lean();
      return res.status(HttpStatus.OK).json({
        data: {
          message: "سقف استفاده از کد تخفیف آپدیت شد",
          Off,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};
exports.getOneForCourse = async (req, res, next) => {
  try {
    const { code } = req.params;
    const validation = await getOneOffOfCourse.validateAsync(req.body);
    const { course } = validation;
    const off = await OffModel.findOne({ code, course }).lean();
    if (!off) {
      return res.status(HttpStatus.NOT_FOUND).json({
        data: {
          message: "کد مورد نظر معتبر نمی باشد",
        },
      });
    } else if (off.max === off.uses) {
      return res.status(HttpStatus.CONFLICT).json({
        data: {
          message: "سقف استفاده از کد مورد نظر تمام شده است",
        },
      });
    } else {
      const Off = await OffModel.findOneAndUpdate({ code, course }, { uses: off.uses + 1 })
        .populate([
          {
            path: "course",
            select: {
              title: 1,
              short_title: 1,
              text: 1,
              short_text: 1,
              _id: 0,
            },
          },
        ])
        .lean();
      return res.status(HttpStatus.OK).json({
        data: {
          message: "سقف استفاده از کد تخفیف آپدیت شد",
          Off,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};
exports.removeOff = async (req, res, next) => {
  try {
    const { id } = req.params;
    let deleteOff;
    if (mongoose.isValidObjectId(id)) {
      deleteOff = await OffModel.findOneAndRemove({ _id: id });
    }
    if (!deleteOff) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "کد مورد نظر یافت نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "کد مورد نظر با موفقیت حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.setOnAll = async (req, res, next) => {
  try {
    const validation = await setDiscountOnAll.validateAsync(req.body);
    const { discount } = validation;
    await ProductModel.updateMany({ discount });
    await CourseModel.updateMany({ discount });
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "کذ تخفیف برای تمامی محصولات اضافه گردید",
      },
    });
  } catch (err) {
    next(err);
  }
};
