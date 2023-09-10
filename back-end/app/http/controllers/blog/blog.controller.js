const BlogModel = require("../../models/blog/blog.model");
const CreateBlogValidation = require("../../validation/blog/blog.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const {
  ListOfImagesForRequest,
  deleteFileInPublic,
  copyObject,
  deleteInvalidPropertyInObject,
} = require("../../../utils/functions.utils");
const { default: mongoose } = require("mongoose");
const CommentModel = require("../../models/comments/comment.model");

exports.createBlog = async (req, res, next) => {
  try {
    const validation = await CreateBlogValidation.validateAsync(req.body);
    const images = ListOfImagesForRequest(req?.files || [], req.body.fileUploadPath);
    const { title, text, short_text, tags, category } = validation;
    const author = req.user._id;
    const blog = await BlogModel.create({
      title,
      text,
      short_text,
      tags,
      category,
      author,
      images,
    });

    if(!blog){
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "مقاله مورد نظر با موفقیت ایجاد نشد",
        },
      });
    }

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "مقاله مورد نظر با موفقیت ایجاد شد",
        blog,
      },
    });
  } catch (err) {
    deleteFileInPublic(req.body.images);
    next(err);
  }
};

exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find({})
      .populate([
        {
          path: "author",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "category",
          select: { title: 1, _id: 0 },
        },
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

    const comments = await CommentModel.find({ show: 1 })
      .populate([
        { path: "commentUser", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
      ])
      .lean();

    let allBlogs = [];
    blogs.forEach((blog) => {
      let blogTotalScore = 5;

      let blogScores = comments.filter((comment) => {
        if (comment.blogName) {
          if (comment.blogName.toString() === blog._id.toString()) {
            return comment;
          }
        }
      });

      let blogComments = comments.filter((comment) => {
        if (comment.blogName) {
          if (comment.blogName.toString() === blog._id.toString()) {
            return comment;
          }
        }
      });

      blogScores.forEach((comment) => {
        blogTotalScore += Number(comment.score);
      });

      allBlogs.push({
        ...blog,
        blogComments,
        productAverageScore: Math.floor(blogTotalScore / (blogScores.length + 1)),
      });
    });

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی مقاله های موجود با موفقیت بازگردانده شدند",
        allBlogs,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getOneBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findBlog = await findBlogWithTitleOrID(id);
    const blog = await BlogModel.findOne({ _id: findBlog._id })
      .populate([
        {
          path: "author",
          select: {
            first_name: 1,
            last_name: 1,
            username: 1,
            role: 1,
            _id: 0,
          },
        },
        {
          path: "category",
          select: { title: 1, _id: 0 },
        },
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

    const comments = await CommentModel.find({ blogName: blog._id, show: 1 })
      .populate([
        { path: "commentUser", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
      ])
      .lean();

    let blogTotalScore = 5;

    let blogScores = comments.filter((comment) => {
      if (comment.blogName) {
        if (comment.blogName.toString() === blog._id.toString()) {
          return comment;
        }
      }
    });

    blogScores.forEach((comment) => {
      blogTotalScore += Number(comment.score);
    });

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "مقاله مورد نظر با موفقیت بازگردانده شد",
        ...blog,
        comments,
        productAverageScore: Math.floor(blogTotalScore / (blogScores.length + 1)),
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getBlogWithSearch = async (req, res, next) => {
  try {
    const { search } = req?.query;
    if (search) {
      const blogSearch = await BlogModel.findOne({ $text: { $search: search } })
        .populate([
          {
            path: "author",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
          {
            path: "category",
            select: { title: 1 },
          },
          {
            path: "likes",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
          {
            path: "dislikes",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
          {
            path: "bookmarks",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
        ])
        .lean();

      const comments = await CommentModel.find({ blogName: blogSearch._id, show: 1 })
        .populate([
          { path: "commentUser", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
        ])
        .lean();

      let blogTotalScore = 5;

      let blogScores = comments.filter((comment) => {
        if (comment.blogName) {
          if (comment.blogName.toString() === blogSearch._id.toString()) {
            return comment;
          }
        }
      });

      blogScores.forEach((comment) => {
        blogTotalScore += Number(comment.score);
      });

      if(!blogSearch){
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          data: {
            message: "مقاله مورد نظر یافت نشد",
          },
        });
      }
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "مقاله مورد نظر با موفقیت بازگردانی شد",
          ...blogSearch,
          comments,
          productAverageScore: Math.floor(blogTotalScore / (blogScores.length + 1)),
        },
      });
    } else {
      const blogSearches = await BlogModel.find({})
        .populate([
          {
            path: "author",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
          {
            path: "category",
            select: { title: 1 },
          },
          {
            path: "likes",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
          {
            path: "dislikes",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
          {
            path: "bookmarks",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
        ])
        .lean();

      const comments = await CommentModel.find({ show: 1 })
        .populate([
          { path: "commentUser", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
        ])
        .lean();

      let allBlogs = [];
      blogSearches.forEach((blog) => {
        let blogTotalScore = 5;

        let blogScores = comments.filter((comment) => {
          if (comment.blogName) {
            if (comment.blogName.toString() === blog._id.toString()) {
              return comment;
            }
          }
        });

        let blogComments = comments.filter((comment) => {
          if (comment.blogName) {
            if (comment.blogName.toString() === blog._id.toString()) {
              return comment;
            }
          }
        });

        blogScores.forEach((comment) => {
          blogTotalScore += Number(comment.score);
        });

        allBlogs.push({
          ...blog,
          blogComments,
          productAverageScore: Math.floor(blogTotalScore / (blogScores.length + 1)),
        });
      });

      if(!blogSearches){
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          data: {
            message: "مقاله مورد نظر یافت نشد",
          },
        });
      }
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "مقاله مورد نظر با موفقیت بازگردانی شد",
          allBlogs,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.removeBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await findBlogWithTitleOrID(id);
    const removeResult = await BlogModel.deleteOne({ _id: blog._id });
    if(!removeResult.deletedCount){
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "مقاله مورد نظر با موفقیت حذف نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "مقاله مورد نظر با موفقیت حذف شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await findBlogWithTitleOrID(id);
    if (req?.body?.fileUploadPath && req?.files) {
      ListOfImagesForRequest(req?.files || [], req.body.fileUploadPath);
    }
    let blackListFields = ["likes", "dislikes", "bookmarks", "comments", "author"];
    const data = copyObject(req.body);
    deleteInvalidPropertyInObject(data, blackListFields);
    const updateResult = await BlogModel.updateOne({ _id: blog._id }, { $set: data });
    if(!updateResult.modifiedCount){
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "مقاله مورد نظر با موفقیت به روزرسانی نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "مقاله مورد نظر با موفقیت به روزرسانی شد",
      },
    });
  } catch (err) {
    deleteFileInPublic(req.body.images);
    next(err);
  }
};

exports.bookmarkedBlogWithBlogID = async (req, res, next) => {
  try {
    const { blogID } = req.params;
    await findBlogWithTitleOrID(blogID);
    const user = req.user;
    const bookmarkedBlog = await BlogModel.findOne({
      _id: blogID,
      bookmarks: user._id,
    });
    const updateQuery = bookmarkedBlog
      ? { $pull: { bookmarks: user._id } }
      : { $push: { bookmarks: user._id } };
    await BlogModel.updateOne({ _id: blogID }, updateQuery);
    let message;
    if (!bookmarkedBlog) message = "مقاله مورد نظر به لیست علاقه مندی های شما اضافه شد";
    else message = "مقاله مورد نظر از لیست علاقه مندی های شما حذف شد";
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

exports.likedBlog = async (req, res, next) => {
  try {
    const { blogID } = req.params;
    await findBlogWithTitleOrID(blogID);
    const user = req.user;
    const likedBlog = await BlogModel.findOne({
      _id: blogID,
      likes: user._id,
    });
    const dislikedBlog = await BlogModel.findOne({
      _id: blogID,
      dislikes: user._id,
    });
    const updateQueryForLikes = likedBlog
      ? { $pull: { likes: user._id } }
      : { $push: { likes: user._id } };
    const updateQueryForDislikes = dislikedBlog && {
      $pull: { dislikes: user._id },
    };
    await BlogModel.updateOne({ _id: blogID }, updateQueryForLikes);
    let message;
    if (!likedBlog) {
      if (dislikedBlog) await BlogModel.updateOne({ _id: blogID }, updateQueryForDislikes);
      message = "پسندیدن مقاله با موفقیت انجام شد";
    } else message = "پسندیدن مقاله با موفقیت لغو شد";
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

exports.dislikedBlog = async (req, res, next) => {
  try {
    const { blogID } = req.params;
    await findBlogWithTitleOrID(blogID);
    const user = req.user;
    const likesBlog = await BlogModel.findOne({
      _id: blogID,
      likes: user._id,
    });
    const dislikesBlog = await BlogModel.findOne({
      _id: blogID,
      dislikes: user._id,
    });
    const updateQueryForDislikes = dislikesBlog
      ? { $pull: { dislikes: user._id } }
      : { $push: { dislikes: user._id } };
    const updateQueryForLikes = likesBlog && {
      $pull: { likes: user._id },
    };
    await BlogModel.updateOne({ _id: blogID }, updateQueryForDislikes);
    let message;
    if (!dislikesBlog) {
      if (likesBlog) await BlogModel.updateOne({ _id: blogID }, updateQueryForLikes);
      message = "نپسندیدن مقاله با موفقیت انجام شد";
    } else message = "نپسندیدن مقاله با موفقیت لغو شد";
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

const findBlogWithTitleOrID = async (field) => {
  const findQuery = mongoose.isValidObjectId(field) ? { _id: field } : { title: field };
  const blog = await BlogModel.findOne(findQuery);
  if(!blog){
    return res.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "مقاله مورد نظر یافت نشد",
      },
    });
  }
  return blog;
};
