const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");

const changeRole = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .error(createHttpError.BadRequest("شناسه وارد شده صحیح نمی باشد")),
  role: Joi.string().error(
    createHttpError.BadRequest("نقش وارد شده صحیح نمی باشد")
  ),
});
const banUserValidation = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .error(createHttpError.BadRequest("شناسه وارد شده صحیح نمی باشد")),
});

const UserValidation = { changeRole, banUserValidation };

module.exports = UserValidation;
