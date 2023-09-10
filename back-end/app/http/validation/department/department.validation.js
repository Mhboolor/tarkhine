const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constans.utils");

const departmentValidation = Joi.object({
  title: Joi.string().error(
    createHttpError.BadRequest("عنوان وارد شده برای دپارتمانت صحیح نمی باشد")
  ),
});
const departmentSubValidation = Joi.object({
  title: Joi.string().error(
    createHttpError.BadRequest(
      "عنوان وارد شده برای زیر دپارتمانت صحیح نمی باشد"
    )
  ),
  parent: Joi.string()
    .pattern(MongoIDPattern)
    .error(
      createHttpError.BadRequest("پرنت ارسالی برای دپارتمانت صحیح نمی باشد")
    ),
});

const Department = {
  departmentValidation,
  departmentSubValidation,
};

module.exports = Department;
