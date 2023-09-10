const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constans.utils");

const CreateContactValidation = Joi.object({
  name: Joi.string().error(
    createHttpError.BadRequest("نام ارسالی صحیح نمی باشد")
  ),
  email: Joi.string()
    .email()
    .error(createHttpError.BadRequest("ایمیل ارسالی صحیح نمی باشد")),
  phone: Joi.string()
    .pattern(/^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/)
    .error(createHttpError.BadRequest("شماره تماس ارسالی صحیح نمی باشد")),
  body: Joi.string().error(
    createHttpError.BadRequest("متن ارسالی صحیح نمی باشد")
  ),
});

const AnswerValidation = Joi.object({
  email: Joi.string()
    .email()
    .error(createHttpError.BadRequest("ایمیل ارسالی صحیح نمی باشد")),
  answer: Joi.string().error(
    createHttpError.BadRequest("پاسخ ارسالی برای ایمیل صحیح نمی باشد")
  ),
});
const RemoveValidation = Joi.object({
  id: Joi.string()
    .pattern(MongoIDPattern)
    .error(createHttpError.BadRequest("شناسه ارسالی صحیح نمی باشد")),
});

const validation = {
  CreateContactValidation,
  AnswerValidation,
  RemoveValidation
};
module.exports = validation;
