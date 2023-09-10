const NotificationModel = require("../../models/notification/notification.model");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const UserModel = require("../../models/user/user.model");

exports.create = async (req, res, next) => {
  try {
    const { adminID, msg } = req.body;
    const notification = await NotificationModel.create({ adminID, msg });
    if (!notification) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "نوتیفیکیشن مورد نظر با ساخته نشد",
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "نوتیفیکیشن مورد نظر با موفقیت ساخته شد",
        notification,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllNotifications = async (req, res, next) => {
  try {
    const user = req.user;
    const notifications = await NotificationModel.find({ adminID: user._id, see: 0 }).populate([
      { path: "adminID", select: { username: 1 , _id : 0} },
    ]);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        notifications,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.see = async (req, res, next) => {
  try {
    const { id } = req.params;
    await NotificationModel.findOneAndUpdate(
      { _id: id },
      {
        see: 1,
      }
    );

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "نوتیفیکیشن مربوطه مشاهده شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
