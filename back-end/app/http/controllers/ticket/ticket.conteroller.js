const TicketModel = require("../../models/ticket/ticket.model");
const { createTicket, setAnswer, getAnswer } = require("../../validation/ticket/ticket.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");

exports.createTicket = async (req, res, next) => {
  try {
    const user = req.user;
    const validation = await createTicket.validateAsync(req.body);
    const { departmentID, departmentSubID, title, priority, body, product, course } = validation;
    const ticket = await TicketModel.create({
      departmentID,
      departmentSubID,
      title,
      priority,
      body,
      product,
      course,
      user: user._id,
      answer: 0,
      isAnswer: 0,
    });
    const mainTicket = await TicketModel.findOne({ _id: ticket._id })
      .populate({ path: "departmentID", select: { __v: 0 } })
      .populate({ path: "departmentSubID", select: { __v: 0 } })
      .populate({
        path: "user",
        select: {
          first_name: 1,
          last_name: 1,
          username: 1,
          email: 1,
          mobile: 1,
        },
      })
      .populate({
        path: "course",
        select: {
          title: 1,
          text: 1,
          short_text: 1,
        },
      });
    if (!ticket) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "تیکت مورد نظر ایجاد نشد",
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "تیکت مورد نظر با موفقیت ایجاد شد",
        mainTicket,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.listOfTicket = async (req, res, next) => {
  try {
    const tickets = await TicketModel.find({ isAnswer: 0 })
      .populate([
        {
          path: "user",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            email: 1,
            mobile: 1,
          },
        },
        {
          path: "product",
        },
        {
          path: "departmentID",
          select: { __v: 0 },
        },
        { path: "departmentSubID", select: { __v: 0 } },
      ])
      .lean();
    if (!tickets) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "تیکتی موجود نیست",
        },
      });
    }

    let ticketArr = [];

    tickets.forEach((ticket) => {
      if (ticket.isAnswer === 0) {
        ticketArr.push({
          ...ticket,
          departmentID: ticket.departmentID.title,
          departmentSubID: ticket.departmentSubID.title,
          user: ticket.user.first_name,
          product: ticket.product ? ticket.product.title : null,
          course: ticket.course ? ticket.course.title : null,
        });
      }
    });
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی تیکت های موجود بازگردانی شدند",
        ticketArr,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.userTickets = async (req, res, next) => {
  try {
    const user = req.user;
    const tickets = await TicketModel.find({ user: user._id })
      .sort({ _id: -1 })
      .populate("departmentID")
      .populate("departmentSubID")
      .populate("user")
      .lean();

    if (!tickets) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "تیکتی موجود نیست",
        },
      });
    }
    let ticketArr = [];

    tickets.forEach((ticket) => {
      if (ticket.isAnswer === 0) {
        ticketArr.push({
          ...ticket,
          departmentID: ticket.departmentID.title,
          departmentSubID: ticket.departmentSubID.title,
          user: ticket.user.first_name,
        });
      }
    });
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی تیکت های موجود برای شما بازگردانی شدند",
        ticketArr,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.setAnswer = async (req, res, next) => {
  try {
    const user = req.user;
    const validation = await setAnswer.validateAsync(req.body);
    const { body, ticketID } = validation;
    const ticket = await TicketModel.findOne({ _id: ticketID }).lean();
    if (!ticket) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "تیکت موجود نیست",
        },
      });
    }
    const answer = await TicketModel.create({
      title: ticket.title,
      body,
      parent: ticketID,
      priority: ticket.priority,
      user: user._id,
      isAnswer: 1,
      answer: 1,
      departmentID: ticket.departmentID,
      departmentSubID: ticket.departmentSubID,
    });

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "پاسخ برای تیکت مورد نظر ارسال شد",
        answer,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAnswer = async (req, res, next) => {
  try {
    const validation = await getAnswer.validateAsync(req.params);
    const { id } = validation;
    const answerTicket = await TicketModel.findOne({ parent: id });
    const ticket = await TicketModel.findOne({ _id: id });
    if (!answerTicket || !ticket) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "آیدی تیکت مجدد چک شود",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "جواب تیکت با موفقیت بازگردانی شد",
        ticket: ticket.body,
        answer: answerTicket ? answerTicket.body : null,
      },
    });
  } catch (err) {
    next(err);
  }
};
