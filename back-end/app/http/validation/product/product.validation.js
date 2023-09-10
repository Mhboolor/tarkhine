const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constans.utils");

const ProductValidation = Joi.object({
  title: Joi.string()
    .min(3)
    .max(250)
    .error(createHttpError.BadRequest("عنوان ارسالی محصول صحیح نمی باشد")),
  short_title: Joi.string()
    .min(3)
    .max(150)
    .error(
      createHttpError.BadRequest("عنوان کوتاه ارسالی محصول صحیح نمی باشد")
    ),
  text: Joi.string().error(
    createHttpError.BadRequest("متن ارسالی محصول صحیح نمی باشد")
  ),
  short_text: Joi.string().error(
    createHttpError.BadRequest("متن کوتاه ارسالی محصول صحیح نمی باشد")
  ),
  tags: Joi.array()
    .min(0)
    .max(10)
    .error(
      createHttpError.BadRequest("برچسب های ارسالی باید بین 0 تا 10 باشد")
    ),
  category: Joi.string()
    .pattern(MongoIDPattern)
    .error(createHttpError.BadRequest("دسته بندی محصول ارسالی صحیح نمی باشد")),
  price: Joi.number().error(
    createHttpError.BadRequest("قیمت ارسالی محصول صحیح نمی باشد")
  ),
  discount: Joi.number().error(
    createHttpError.BadRequest("قیمت ارسالی محصول صحیح نمی باشد")
  ),
  count: Joi.number().error(
    createHttpError.BadRequest("تعداد ارسالی محصول صحیح نمی باشد")
  ),
  colors: Joi.array()
    .min(0)
    .max(10)
    .error(
      createHttpError.BadRequest(
        "تعداد رنگ های ارسالی محصول باید بین 0 تا 10 عدد باشد"
      )
    ),
  feature_title: Joi.string()
    .allow()
    .min(3)
    .max(50)
    .error(
      createHttpError.BadRequest("عنوان ارسالی ویژگی محصول صحیح نمی باشد")
    ),
  feature_description: Joi.string()
    .allow()
    .min(3)
    .max(100)
    .error(
      createHttpError.BadRequest("توضیحات ارسالی ویژگی محصول صحیح نمی باشد")
    ),
  filename: Joi.string()
    .regex(/(\.png|\.jpg|\.webp|\.jpeg|\.gif)$/)
    .error(createHttpError.BadRequest("فرمت عکس ارسالی محصول صحیح نمی باشد")),
  fileUploadPath: Joi.allow(),
});

const validation = {
  ProductValidation,
};

module.exports = validation;
