const {
  RandomNumberGenerator,
  SignAccessToken,
  SignRefreshToken,
} = require("../../../utils/functions.utils");
const UserModel = require("../../models/user/user.model");
const { GetOtpValidation, CheckOtpValidation } = require("../../validation/auth/auth.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const BanModel = require("../../models/ban/ban.model");
exports.getOtp = async (req, res, next) => {
  try {
    const authValidation = await GetOtpValidation.validateAsync(req.body);
    const { mobile } = authValidation;
    const isUserBan = await BanModel.find({ mobile });
    if (isUserBan.length) {
      return res.status(HttpStatus.FORBIDDEN).json({
        statusCode: HttpStatus.FORBIDDEN,
        data: {
          message: "این شماره تماس مسدود شده است!!!",
        },
      });
    }
    const code = RandomNumberGenerator();
    const result = await saveUser(code, mobile);
    if (!result) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        data: {
          message: "ورود شما انجام نشد",
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "ورود شما با موفقیت انجام شد",
        code,
        mobile,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.checkOtp = async (req, res, next) => {
  try {
    const validation = await CheckOtpValidation.validateAsync(req.body);
    const { mobile, code } = validation;
    const user = await UserModel.findOne({ mobile }, { password: 0, "otp.expiresIn": 0 });
    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "کاربر مورد نظر یافت نشد",
        },
      });
    }
    if (user.otp.code != code) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        data: {
          message: "کد وارد شده معتبر نمی باشد",
        },
      });
    }
    const now = new Date().getTime();

    if (+user.otp.expiresIn < now) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        data: {
          message: "کد وارد شده منقضی شده است",
        },
      });
    }
    const accessToken = await SignAccessToken(user._id);
    const refreshToken = await SignRefreshToken(user._id);
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "کد وارد شده صحیح می باشد",
        accessToken,
        refreshToken,
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const user = req.user;
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

const saveUser = async (code, mobile) => {
  const now = new Date().getTime();
  let otp = {
    code,
    expiresIn: now + 2592000,
  };
  const user = await checkExistUser(mobile);
  const countOfRegisteredUser = await UserModel.count();
  if (user) {
    if (+user.otp.expiresIn > now) {
      return res.status(HttpStatus.FORBIDDEN).json({
        statusCode: HttpStatus.FORBIDDEN,
        data: {
          message: "کد احراز هویت قبلی هنوز منقضی نشده است",
        },
      });
    }
    return await updateUser(mobile, { otp });
  }
  return await UserModel.create({
    mobile,
    otp,
    role: countOfRegisteredUser > 2 ? "USER" : "ADMIN",
  });
};

const checkExistUser = async (mobile) => {
  const user = await UserModel.findOne({ mobile });
  return user;
};

const updateUser = async (mobile, objectData = {}) => {
  Object.keys(objectData).forEach((key) => {
    if (["", " ", "0", 0, null, undefined, NaN].includes(objectData[key])) delete objectData[key];
  });
  const updateResult = await UserModel.updateOne({ mobile }, { $set: objectData });

  return !!updateResult.modifiedCount;
};
