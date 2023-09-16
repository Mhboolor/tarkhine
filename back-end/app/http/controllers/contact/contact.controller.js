const ContactModel = require("../../models/contact/contact.model");
const {
  CreateContactValidation,
  RemoveValidation,
  AnswerValidation,
} = require("../../validation/contact/contact.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const nodemailer = require("nodemailer");

exports.createContact = async (req, res, next) => {
  try {
    const validation = await CreateContactValidation.validateAsync(req.body);
    const { name, email, phone, body } = validation;
    const contact = await ContactModel.create({
      name,
      email,
      phone,
      body,
      answer: false,
    });
    if (!contact) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "ارتباط با موفقیت ایجاد نشد",
          contact,
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "ارتباط با موفقیت ایجاد شد",
        contact,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllContact = async (req, res, next) => {
  try {
    const contacts = await ContactModel.find({});
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی ارتباطات موجود با موفقیت بازگردانی شدند",
        contacts,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.removeContact = async (req, res, next) => {
  try {
    const validation = await RemoveValidation.validateAsync(req.params);
    const { id } = validation;
    const removeResult = await ContactModel.findOneAndRemove({ _id: id });
    if (!removeResult) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "ارتباط مورد نظر یافت نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "ارتباط مورد نظر با موفقیت حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.answerContact = async (req, res, next) => {
  try {
    const validation = await AnswerValidation.validateAsync(req.body);
    const { answer, email } = validation;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tarkhineproject@gmail.com",
        pass: "xnfg epvp xmmm jspw",
      },
    });
    const mailOptions = {
      from: "www.tarkhineproject@gmail.com",
      to: email,
      subject: "پاسخ ایمیل شما از طرف سایت ترخینه",
      text: answer,
    };
    const contact = await ContactModel.findOneAndUpdate({ email: email }, { answer: true });
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          data: {
            message: error,
          },
        });
      } else {
        res.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          data: {
            message: "پاسخ ایمیل با موفقیت ارسال شد",
            contact,
          },
        });
      }
    });
  } catch (err) {
    next(err);
  }
};
