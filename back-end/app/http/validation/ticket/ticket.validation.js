const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constans.utils");

const createTicket = Joi.object({
  departmentID: Joi.string().error(
    createHttpError.BadRequest("شناسه وارد شده برای دپارتمانت صحیح نمی باشد")
  ),
  departmentSubID: Joi.string().error(
    createHttpError.BadRequest(
      "شناسه وارد شده برای زیر دپارتمانت صحیح نمی باشد"
    )
  ),
  title: Joi.string().error(
    createHttpError.BadRequest("عنوان وارد شده برای تیکت صحیح نمی باشد")
  ),
  body: Joi.string().error(
    createHttpError.BadRequest("توضیحات وارد شده برای تیکت صحیح نمی باشد")
  ),
  priority: Joi.number().error(
    createHttpError.BadRequest("اولوبت وارد شده برای تیکت صحیح نمی باشد")
  ),
  product: Joi.string(),
  course: Joi.string(),
});

const getAnswer = Joi.object({
  id: Joi.string().pattern(MongoIDPattern).error(
    createHttpError.BadRequest("شناسه وارد شده برای گرفتن پاسخ صحیح نمی باشد")
  ),
});
const setAnswer = Joi.object({
  body: Joi.string().error(
    createHttpError.BadRequest(
      "توضیحات وارد شده برای پاسخ به  تیکت صحیح نمی باشد"
    )
  ),
  ticketID: Joi.string().error(
    createHttpError.BadRequest("شناسه وارد شده برای پاسخ به تیکت صحیح نمی باشد")
  ),
});

const departmentsSub = Joi.object({
  id: Joi.string().error(
    createHttpError.BadRequest("شناسه وارد شده برای دپارتمان صحیح نمی باشد")
  ),
});

const TicketValidation = { createTicket, getAnswer, setAnswer, departmentsSub };

module.exports = TicketValidation;
