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

const RegisterValidation = Joi.object({
  first_name: Joi.string().error(createHttpError.BadRequest("نام وارد شده صحیح نمی باشد")),
  last_name: Joi.string().error(createHttpError.BadRequest("نام فامیلی وارد شده صحیح نمی باشد")),
  username: Joi.string().error(createHttpError.BadRequest(" یوزرنیم وارد شده صحیح نمی باشد")),
  email: Joi.string()
    .pattern(
      /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    )
    .error(createHttpError.BadRequest(" یوزرنیم وارد شده صحیح نمی باشد")),
  mobile: Joi.string()
    .length(11)
    .pattern(/^(\+98|0)?9\d{9}$/)
    .error(createHttpError.BadRequest("شماره تماس وارد شده صحیح نمی باشد")),
  password: Joi.string().error(createHttpError.BadRequest("رمز عبور وارد شده صحیح نمی باشد")),
});

const LoginValidation = Joi.object({
  identifier: Joi.string().error(
    createHttpError.BadRequest("ایمیل و یا یوزرنیم وارد شده صحیح نمی باشد")
  ),
  password: Joi.string().error(createHttpError.BadRequest("رمز عبور وارد شده صحیح نمی باشد")),
});

const Validation = {
  GetOtpValidation,
  CheckOtpValidation,
  RegisterValidation,
  LoginValidation,
};

module.exports = Validation;
