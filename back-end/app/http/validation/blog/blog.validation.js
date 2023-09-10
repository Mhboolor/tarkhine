const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constans.utils");

const CreateBlogValidation = Joi.object({
  title: Joi.string()
    .min(3)
    .max(70)
    .error(createHttpError.BadRequest("عنوان مقاله ارسالی صحیح نمی باشد")),
  text: Joi.string().error(
    createHttpError.BadRequest("متن مقاله ارسالی صحیح نمی باشد")
  ),
  short_text: Joi.string().error(
    createHttpError.BadRequest("متن کوتاه مقاله ارسالی صحیح نمی باشد")
  ),
  tags: Joi.array()
    .min(0)
    .max(20)
    .error(
      createHttpError.BadRequest(
        "تعداد برچسب های مقاله میبایست بین 0 تا 20 عدد باشد"
      )
    ),
  category: Joi.string()
    .pattern(MongoIDPattern)
    .error(createHttpError.BadRequest("شناسه دسته بندی مورد نظر یافت نشد")),
  filename: Joi.string()
    .pattern(/(\.png|\.jpg|\.webp|\.jpeg|\.gif)$/)
    .error(createHttpError.BadRequest("فرمت عکس ارسالی صحیح نمی باشد")),
  fileUploadPath: Joi.allow(),
});

module.exports = CreateBlogValidation;
