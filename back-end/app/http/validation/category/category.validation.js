const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constans.utils");

const AddCategoryValidation = Joi.object({
  title: Joi.string()
    .min(3)
    .max(30)
    .error(createHttpError.BadRequest("عنوان دسته بندی وارد شده صحیح نمی باشد")),
  parent: Joi.string()
    .allow()
    .pattern(MongoIDPattern)
    .error(createHttpError.BadRequest("شناسه وارد شده صحیح نمی باشد")),
  filename: Joi.string()
    .pattern(/(\.png|\.jpg|\.webp|\.jpeg|\.gif)$/)
    .error(createHttpError.BadRequest("فرمت عکس ارسالی صحیح نمی باشد")),
  fileUploadPath: Joi.allow(),
});

const UpdateCategoryValidation = Joi.object({
  title: Joi.string()
    .min(3)
    .max(30)
    .error(createHttpError.BadRequest("عنوان دسته بندی وارد شده صحیح نمی باشد")),
  filename: Joi.string()
    .pattern(/(\.png|\.jpg|\.webp|\.jpeg|\.gif)$/)
    .error(createHttpError.BadRequest("فرمت عکس ارسالی صحیح نمی باشد")),
  fileUploadPath: Joi.allow(),
});

const CategoryValidation = {
  AddCategoryValidation,
  UpdateCategoryValidation,
};

module.exports = CategoryValidation;
