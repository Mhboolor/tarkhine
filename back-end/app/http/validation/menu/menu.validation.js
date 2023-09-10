const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");

const MenuValidation = Joi.object({
  title: Joi.string()
    .min(3)
    .max(15)
    .error(createHttpError.BadRequest("عنوان منو ارسالی صحیح نمی باشد")),
});

module.exports = MenuValidation;
