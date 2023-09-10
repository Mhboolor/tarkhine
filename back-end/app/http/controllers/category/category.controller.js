const CategoryModel = require("../../models/category/category.model");
const {
  AddCategoryValidation,
  UpdateCategoryValidation,
} = require("../../validation/category/category.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { default: mongoose } = require("mongoose");
const { ListOfImagesForRequest, deleteFileInPublic } = require("../../../utils/functions.utils");

exports.addCategory = async (req, res, next) => {
  try {
    const validation = await AddCategoryValidation.validateAsync(req.body);
    const images = ListOfImagesForRequest(req?.files || [], req.body.fileUploadPath);

    const { title, parent } = validation;
    await findCategoryWithTitle(title);
    const category = await CategoryModel.create({ title, parent, images });
    if (!category) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "خطای داخلی || دسته بندی مورد نظر ایجاد نشد",
        },
      });
    }

    res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "دسته بندی مورد نظر با موفقیت ایجاد شد",
        category,
      },
    });
  } catch (err) {
    deleteFileInPublic(req.body.images);
    next(err);
  }
};

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await CategoryModel.find({ parent: undefined })
      .populate([
        {
          path: "children",
          select: { parent: 1, title: 1 },
          populate: {
            path: "children",
          },
        },
      ])
      .lean();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی دسته بندی های موجود با موفقیت بازگردانده شدند",
        categories,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.removeCategory = async (req, res, next) => {
  try {
    const { field } = req.params;
    const category = await findCategoryWithTitleOrID(field);
    const removeResult = await CategoryModel.deleteMany({
      $or: [{ _id: category._id }, { parent: category._id }],
    });
    if (!removeResult.deletedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "حذف دسته بندی با موفقیت انجام نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "حذف دسته بندی با موفقیت انجام شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateCategoryTitle = async (req, res, next) => {
  try {
    const images = ListOfImagesForRequest(req?.files || [], req.body.fileUploadPath);
    const { field } = req.params;
    const validation = await UpdateCategoryValidation.validateAsync(req.body);
    const { title } = validation;
    const category = await findCategoryWithTitleOrID(field);
    const updateResult = await CategoryModel.updateOne(
      { _id: category._id },
      { $set: { title, images } }
    );
    if (!updateResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "به روزرسانی دسته بندی با موفقیت انجام نشد",
        },
      });
    }

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "به روزرسانی دسته بندی با موفقیت انجام شد",
      },
    });
  } catch (err) {
    deleteFileInPublic(req.body.images);
    next(err);
  }
};

exports.getOneCategory = async (req, res, next) => {
  try {
    const { field } = req.params;
    const category = await findCategoryWithTitleOrID(field);
    const getCategory = await CategoryModel.aggregate([
      {
        $match: { _id: category._id },
      },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "parent",
          as: "children",
        },
      },
      {
        $project: {
          __v: 0,
          "children.__v": 0,
          "children.parent": 0,
        },
      },
    ]);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "دسته بندی مورد نظر با موفقیت بازگردانده شد",
        getCategory,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getChildrenOfParent = async (req, res, next) => {
  try {
    const { parent } = req.params;
    const children = await CategoryModel.find({ parent }, { __v: 0, parent: 0 }).lean();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی زیرمجموعه های پرنت مورد نظر بازگردانده شدند",
        children,
      },
    });
  } catch (err) {
    next(err);
  }
};

const findCategoryWithTitle = async (title) => {
  const category = await CategoryModel.findOne({ title });
  if (category) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      data: {
        message: "دسته بندی مورد نظر از قبل ایجاد شده است",
      },
    });
  }
};

const findCategoryWithTitleOrID = async (field) => {
  const findQuery = mongoose.isValidObjectId(field) ? { _id: field } : { title: field };
  const category = await CategoryModel.findOne(findQuery);
  if (!category) {
    return res.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "دسته بندی مورد نظر یافت نشد",
      },
    });
  }
 
  return category;
};
