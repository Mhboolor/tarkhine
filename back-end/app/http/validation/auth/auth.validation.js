const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");

const GetOtpValidation = Joi.object({
  mobile: Joi.string()
    .length(11)
    .pattern(/^(\+98|0)?9\d{9}$/)
    .error(createHttpError.BadRequest("شماره تماس وارد شده صحیح نمی باشد")),
});

const CheckOtpValidation = Joi.object({
  mobile: Joi.string()
    .length(11)
    .pattern(/^(\+98|0)?9\d{9}$/)
    .error(createHttpError.BadRequest("شماره تماس وارد شده صحیح نمی باشد")),
  code: Joi.string()
    .min(4)
    .max(6)
    .error(createHttpError.BadRequest("کد احراز هویت وارد شده صحیح نمی باشد")),
});

const Validation = {
  GetOtpValidation,
  CheckOtpValidation,
};

module.exports = Validation;
