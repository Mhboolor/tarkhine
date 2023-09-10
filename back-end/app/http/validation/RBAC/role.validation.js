const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constans.utils");

const RoleValidation = Joi.object({
  title: Joi.string()
    .min(3)
    .max(30)
    .error(createHttpError.BadRequest("عنوان ارسالی برای نقش صحیح نمی باشد")),
  description: Joi.string()
    .min(0)
    .max(100)
    .error(createHttpError.BadRequest("توضیحات ارسالی برای نقش صحیح نمی باشد")),
  permissions: Joi.array()
    .items(Joi.string().pattern(MongoIDPattern))
    .error(
      createHttpError.BadRequest("دسترسی های ارسالی برای نقش صحیح نمی باشد")
    ),
});

module.exports = RoleValidation;
