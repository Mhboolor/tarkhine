const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constans.utils");

const createOff = Joi.object({
  code: Joi.string().error(createHttpError.BadRequest("کد ارسال شده صحیح نمی باشد")),
  percent: Joi.string()
    .min(0)
    .max(100)
    .error(createHttpError.BadRequest("درصد تخفیف ارسالی صحیح نمی باشد")),
  product: Joi.string()
    .pattern(MongoIDPattern)
    .error(createHttpError.BadRequest("شناسه محصول جهت تخفیف صحیح نمی باشد")),
  course: Joi.string()
    .pattern(MongoIDPattern)
    .error(createHttpError.BadRequest("شناسه دوره جهت تخفیف صحیح نمی باشد")),
  max: Joi.number()
    .min(1)
    .error(createHttpError.BadRequest(" تعداد کاربران ارسالی جهت تخفیف صحیح نمی باشد")),
});

const getOneOff = Joi.object({
  code: Joi.string().error(createHttpError.BadRequest("کد ارسال شده صحیح نمی باشد")),
  product: Joi.string().error(createHttpError.BadRequest("شناسه محصول جهت تخفیف صحیح نمی باشد")),
});

const getOneOffOfCourse = Joi.object({
  code: Joi.string().error(createHttpError.BadRequest("کد ارسال شده صحیح نمی باشد")),
  course: Joi.string().error(createHttpError.BadRequest("شناسه دوره جهت تخفیف صحیح نمی باشد")),
});

const setDiscountOnAll = Joi.object({
  discount: Joi.number()
    .min(0)
    .max(100)
    .error(createHttpError.BadRequest("تخفیف ارسالی برای تمام محصولات صحیح نمی باشد")),
});

const OffValidation = {
  createOff,
  getOneOff,
  setDiscountOnAll,
  getOneOffOfCourse,
};

module.exports = OffValidation;
