const JWT = require("jsonwebtoken");
const UserModel = require("../http/models/user/user.model");
const { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = require("./constans.utils");
const createHttpError = require("http-errors");
const path = require("path");
const fs = require("fs");
const ProductModel = require("../http/models/product/product.model");
const courseModel = require("../http/models/course/course.model");
const { default: mongoose } = require("mongoose");
const CourseModel = require("../http/models/course/course.model");
// const ProductModel = require("../http/models/product/product.model");

function RandomNumberGenerator() {
  return ~~(Math.random() * 90000 + 10000);
}

function SignAccessToken(userID) {
  return new Promise(async (resolve, reject) => {
    const user = await UserModel.findById(userID);
    const payload = {
      mobile: user.mobile,
    };
    const options = {
      expiresIn: "1d",
    };
    JWT.sign(payload, ACCESS_TOKEN_SECRET_KEY, options, (err, token) => {
      if (err) reject(createError.InternalServerError("خطای سروری"));
      resolve(token);
    });
  });
}

function SignRefreshToken(userID) {
  return new Promise(async (resolve, reject) => {
    const user = await UserModel.findById(userID);
    const payload = {
      mobile: user.mobile,
    };
    const options = {
      expiresIn: "1y",
    };
    JWT.sign(payload, REFRESH_TOKEN_SECRET_KEY, options, async (err, token) => {
      if (err) throw createHttpError.InternalServerError("خطای سرور");
      resolve(token);
    });
  });
}

function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function deleteInvalidPropertyInObject(data = {}, blackList = []) {
  const nullishData = ["", " ", "0", 0, null, undefined];
  Object.keys(data).forEach((key) => {
    if (blackList.includes(key)) delete data[key];
    if (typeof data[key] == "string") data[key] = data[key].trim();
    if (Array.isArray(data[key]) && data[key].length > 0)
      data[key] = data[key].map((item) => item.trim());
    if (Array.isArray(data[key]) && data[key].length == 0) delete data[key];
    if (nullishData.includes(data[key])) delete data[key];
  });
}

function ListOfImagesForRequest(files, fileUploadPath) {
  if (files?.length > 0) {
    return files
      .map((file) =>
        path.join(
          `${process.env.BASE_URL}:${process.env.APPLICATION_PORT}/`,
          fileUploadPath,
          file.filename
        )
      )
      .map((item) => item.replace(/\\/g, "//"));
  } else {
    return [];
  }
}

function deleteFileInPublic(fileAddress) {
  if (fileAddress) {
    const pathFile = path.join(__dirname, "..", "..", "public", fileAddress);
    if (fs.existsSync(pathFile)) fs.unlinkSync(pathFile);
  }
}

async function checkExistProduct(id) {
  const product = await ProductModel.findById(id);
  if (!product) throw createHttpError.NotFound("محصول مورد نظر یافت نشد");
  return product;
}

async function checkExistCourse(id) {
  const course = await CourseModel.findById(id);
  if (!course) throw createHttpError.NotFound("دوره مورد نظر یافت نشد");
  return course;
}

async function getBasketOfUser(userID, discount = {}) {
  const userDetail = await UserModel.aggregate([
    {
      $match: { _id: userID },
    },
    {
      $project: { basket: 1 },
    },
    {
      $lookup: {
        from: "products",
        localField: "basket.products.productID",
        foreignField: "_id",
        as: "productDetail",
      },
    },
    {
      $lookup: {
        from: "courses",
        localField: "basket.courses.courseID",
        foreignField: "_id",
        as: "courseDetail",
      },
    },

    {
      $addFields: {
        productDetail: {
          $function: {
            body: function (productDetail, products) {
              return productDetail.map(function (product) {
                const count = products.find(
                  (item) => item.productID.valueOf() == product._id.valueOf()
                ).count;
                const totalPrice = count * product.price;
                return {
                  ...product,
                  basketCount: count,
                  totalPrice,
                  finalPrice: totalPrice - (product.discount / 100) * totalPrice,
                };
              });
            },
            args: ["$productDetail", "$basket.products"],
            lang: "js",
          },
        },
        courseDetail: {
          $function: {
            body: function (courseDetail) {
              return courseDetail.map(function (course) {
                return {
                  ...course,
                  finalPrice: course.price - (course.discount / 100) * course.price,
                };
              });
            },
            args: ["$courseDetail"],
            lang: "js",
          },
        },
        payDetail: {
          $function: {
            body: function (courseDetail, productDetail, products) {
              const productAmount = productDetail.reduce(function (total, product) {
                const count = products.find(
                  (item) => item.productID.valueOf() == product._id.valueOf()
                ).count;
                const totalPrice = count * product.price;
                return total + (totalPrice - (product.discount / 100) * totalPrice);
              }, 0);

              const courseAmount = courseDetail.reduce(function (total, course) {
                return total + (course.price - (course.discount / 100) * course.price);
              }, 0);

              const productIds = productDetail.map((product) => product._id.valueOf());
              const courseIds = courseDetail.map((course) => course._id.valueOf());
              return {
                productAmount,
                courseAmount,
                paymentAmount: productAmount + courseAmount,
                productIds,
                courseIds,
              };
            },
            args: ["$courseDetail","$productDetail", "$basket.products"],
            lang: "js",
          },
        },
      },
    },
    {
      $project: { basket: 0 },
    },
  ]);
  return copyObject(userDetail);
}

function getTime(seconds) {
  const total = Math.round(seconds) / 60;
  let [minutes, percent] = String(total).split(".");
  let second = Math.round((percent * 60) / 100)
    .toString()
    .substring(0, 2);
  let hour = 0;
  if (minutes > 60) {
    total = minutes / 60;
    let [h1, percent] = String(total).split(".");
    (hour = h1),
      (minutes = Math.round((percent * 60) / 100)
        .toString()
        .substring(0, 2));
  }
  if (String(hour) == 1) hour = `0${hour}`;
  if (String(minutes) == 1) minutes = `0${minutes}`;
  if (String(second) == 1) second = `0${second}`;
  return `${hour} : ${minutes} : ${second}`;
}

const findCourseById = async (id) => {
  if (!mongoose.isValidObjectId(id))
    throw createHttpError.BadRequest("شناسه ارسال شده صحیح نمیباشد");
  const course = await courseModel.findById(id);
  if (!course) throw createHttpError.NotFound("دوره ای یافت نشد");
  return course;
};

const UtilsFunctions = {
  RandomNumberGenerator,
  SignAccessToken,
  SignRefreshToken,
  copyObject,
  deleteInvalidPropertyInObject,
  ListOfImagesForRequest,
  deleteFileInPublic,
  checkExistProduct,
  getBasketOfUser,
  getTime,
  findCourseById,
  checkExistCourse,
};

module.exports = UtilsFunctions;
