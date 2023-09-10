const { StatusCodes: HttpStatus } = require("http-status-codes");
const { createCourseSchema } = require("../../validation/course/course.schema");
const {
  copyObject,
  deleteInvalidPropertyInObject,
  ListOfImagesForRequest,
  findCourseById,
} = require("../../../utils/functions.utils");
const CourseModel = require("../../models/course/course.model");
const { default: mongoose } = require("mongoose");
const CourseUserModel = require("../../models/course-user/course-user.model");
const CommentModel = require("../../models/comments/comment.model");

exports.getListOfCourse = async (req, res, next) => {
  try {
    const { search } = req.query;
    let courses;
    if (search)
      courses = await CourseModel.find({ $text: { $search: search } })
        .populate([
          { path: "category", select: { title: 1 } },
          { path: "teacher", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
          {
            path: "likes",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
          {
            path: "dislikes",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
          {
            path: "bookmarks",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
        ])
        .lean()
        .sort({ _id: -1 });
    else
      courses = await CourseModel.find({})
        .populate([
          { path: "category", select: { children: 0, parent: 0, __v: 0 } },
          { path: "teacher", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
        ])
        .lean()
        .sort({ _id: -1 });

    const registers = await CourseUserModel.find({});

    const comments = await CommentModel.find({ show: 1 })
      .populate([
        { path: "commentUser", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
      ])
      .lean();

    let allCourses = [];
    courses.forEach(async (course) => {
      let courseTotalScore = 5;
      let courseRegisters = registers.filter((register) => {
        if (register.course.toString() === course._id.toString()) {
          return register;
        }
      });

      let courseScores = comments.filter((comment) => {
        if (comment.courseName) {
          if (comment.courseName.toString() === course._id.toString()) {
            return comment;
          }
        }
      });

      let courseComments = comments.filter((comment) => {
        if (comment.courseName) {
          if (comment.courseName.toString() === course._id.toString()) {
            return comment;
          }
        }
      });

      courseScores.forEach((comment) => {
        courseTotalScore += Number(comment.score);
      });

      allCourses.push({
        ...course,
        courseComments,
        courseAverageScore: Math.floor(courseTotalScore / (courseScores.length + 1)),
        registers: courseRegisters.length,
      });
    });

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی دوره های موجود با موفقیت بازگردانی شدند",
        allCourses,
      },
    });
  } catch (error) {
    next(error);
  }
};
exports.addCourse = async (req, res, next) => {
  try {
    const validation = await createCourseSchema.validateAsync(req.body);
    const images = ListOfImagesForRequest(req?.files || [], validation.fileUploadPath);
    let { title, short_text, text, tags, category, price, discount = 0, type } = req.body;
    const teacher = req.user._id;
    if (Number(price) > 0 && type === "free") {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        data: {
          message: "برای دوره ی رایگان نمیتوان قیمت ثبت کرد",
        },
      });
    }
    const course = await CourseModel.create({
      title,
      short_text,
      text,
      tags,
      category,
      price,
      discount,
      type,
      images,
      status: "notStarted",
      teacher,
    });
    if (!course?._id) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "دوره ثبت نشد",
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "دوره با موفقیت ایجاد شد",
        course,
      },
    });
  } catch (error) {
    next(error);
  }
};
exports.getOne = async (req, res, next) => {
  try {
    const { title } = req.params;
    const course = await CourseModel.findOne({ title: title })
      .populate([
        { path: "category", select: { title: 1 } },
        { path: "teacher", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
        {
          path: "likes",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "dislikes",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "bookmarks",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
      ])
      .lean();

    const comments = await CommentModel.find({ courseName: course._id, show: 1 })
      .populate([
        { path: "commentUser", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
      ])
      .lean();

    let courseTotalScore = 5;

    let courseScores = comments.filter((comment) => {
      if (comment.courseName) {
        if (comment.courseName.toString() === course._id.toString()) {
          return comment;
        }
      }
    });

    courseScores.forEach((comment) => {
      courseTotalScore += Number(comment.score);
    });

    let isUserRegisteredToThisCourse = null;
    if (req.user) {
      isUserRegisteredToThisCourse = !!(await CourseUserModel.findOne({
        user: req.user._id,
        course: course._id,
      }));
    } else {
      isUserRegisteredToThisCourse = false;
    }

    const courseStudentsCount = await CourseUserModel.find({
      course: course._id,
    }).count();

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        ...course,
        comments,
        courseAverageScore: Math.floor(courseTotalScore / (courseScores.length + 1)),
        isUserRegisteredToThisCourse,
        courseStudentsCount,
      },
    });
  } catch (error) {
    next(error);
  }
};
exports.updateCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await findCourseById(id);
    const data = copyObject(req.body);
    let blackListFields = [
      "time",
      "chapters",
      "episodes",
      "students",
      "bookmarks",
      "likes",
      "dislikes",
      "comments",
      "fileUploadPath",
      "filename",
    ];
    deleteInvalidPropertyInObject(data, blackListFields);
    if (req?.body?.fileUploadPath && req?.files) {
      ListOfImagesForRequest(req?.files || [], req.body.fileUploadPath);
    }
    const updateCourseResult = await CourseModel.updateOne(
      { _id: id },
      {
        $set: data,
      }
    );
    if (!updateCourseResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "به روزرسانی دوره انجام نشد",
        },
      });
    }

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "به روزرسانی دوره با موفقیت انجام شد",
      },
    });
  } catch (error) {
    next(error);
  }
};
exports.removeCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findQuery = mongoose.isValidObjectId(id) ? { _id: id } : { title: id };
    const course = await CourseModel.findOne(findQuery);
    if (!course) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "دوره مورد نظر یافت نشد",
        },
      });
    }
    const removeResult = await CourseModel.deleteOne({ _id: course._id });
    if (!removeResult.deletedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "دوره مورد نظر حذف نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "دوره مورد نظر با موفقیت حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.userRegisterCourse = async (req, res, next) => {
  try {
    const { courseID } = req.params;
    const user = req.user;
    const course = await CourseModel.findOne({ _id: courseID }).lean();
    const isUserAlreadyRegistered = await CourseUserModel.findOne({
      user: user._id,
      course: courseID,
    }).lean();
    if (isUserAlreadyRegistered) {
      return res.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        data: {
          message: "شما قبلا در این دوره ثبت نام کرده اید",
        },
      });
    }
    await CourseUserModel.create({
      user: user._id,
      course: courseID,
      price: course.price,
    });
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "شما با موفقیت در دوره ثبت نام کردید",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.bookmarkedCourseWithCourseID = async (req, res, next) => {
  try {
    const { courseID } = req.params;
    await findCourseWithTitleOrID(courseID);
    const user = req.user;
    const bookmarkedCourse = await CourseModel.findOne({
      _id: courseID,
      bookmarks: user._id,
    });
    const updateQuery = bookmarkedCourse
      ? { $pull: { bookmarks: user._id } }
      : { $push: { bookmarks: user._id } };
    await CourseModel.updateOne({ _id: courseID }, updateQuery);
    let message;
    if (!bookmarkedCourse) message = "دوره مورد نظر به لیست علاقه مندی های شما اضافه شد";
    else message = "دوره مورد نظر از لیست علاقه مندی های شما حذف شد";
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.likedCourse = async (req, res, next) => {
  try {
    const { courseID } = req.params;
    await findCourseWithTitleOrID(courseID);
    const user = req.user;
    const likedCourse = await CourseModel.findOne({
      _id: courseID,
      likes: user._id,
    });
    const dislikedCourse = await CourseModel.findOne({
      _id: courseID,
      dislikes: user._id,
    });
    const updateQueryForLikes = likedCourse
      ? { $pull: { likes: user._id } }
      : { $push: { likes: user._id } };
    const updateQueryForDislikes = dislikedCourse && {
      $pull: { dislikes: user._id },
    };
    await CourseModel.updateOne({ _id: courseID }, updateQueryForLikes);
    let message;
    if (!likedCourse) {
      if (dislikedCourse) await CourseModel.updateOne({ _id: courseID }, updateQueryForDislikes);
      message = "پسندیدن دوره با موفقیت انجام شد";
    } else message = "پسندیدن دوره با موفقیت لغو شد";
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.dislikedCourse = async (req, res, next) => {
  try {
    const { courseID } = req.params;
    await findCourseWithTitleOrID(courseID);
    const user = req.user;
    const likesCourse = await CourseModel.findOne({
      _id: courseID,
      likes: user._id,
    });
    const dislikesCourse = await CourseModel.findOne({
      _id: courseID,
      dislikes: user._id,
    });
    const updateQueryForDislikes = dislikesCourse
      ? { $pull: { dislikes: user._id } }
      : { $push: { dislikes: user._id } };
    const updateQueryForLikes = likesCourse && {
      $pull: { likes: user._id },
    };
    await CourseModel.updateOne({ _id: courseID }, updateQueryForDislikes);
    let message;
    if (!dislikesCourse) {
      if (likesCourse) await CourseModel.updateOne({ _id: courseID }, updateQueryForLikes);
      message = "نپسندیدن دوره با موفقیت انجام شد";
    } else message = "نپسندیدن دوره با موفقیت لغو شد";
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message,
      },
    });
  } catch (err) {
    next(err);
  }
};

const findCourseWithTitleOrID = async (field) => {
  const findQuery = mongoose.isValidObjectId(field) ? { _id: field } : { title: field };
  const course = await CourseModel.findOne(findQuery);
  if (!course) {
    return res.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "دوره مورد نظر یافت نشد",
      },
    });
  }
  return course;
};
