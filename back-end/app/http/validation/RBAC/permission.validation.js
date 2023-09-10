const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");

const PermissionValidation = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .error(
      createHttpError.BadRequest("عنوان ارسالی برای دسترسی صحیح نمی باشد")
    ),
  description: Joi.string()
    .min(0)
    .max(100)
    .error(
      createHttpError.BadRequest("توضیحات ارسالی برای دسترسی صحیح نمی باشد")
    ),
});

module.exports = PermissionValidation;
