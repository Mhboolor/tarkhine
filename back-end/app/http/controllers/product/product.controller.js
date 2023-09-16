const {
  ListOfImagesForRequest,
  deleteFileInPublic,
  copyObject,
  deleteInvalidPropertyInObject,
} = require("../../../utils/functions.utils");
const ProductModel = require("../../models/product/product.model");
const { ProductValidation } = require("../../validation/product/product.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { default: mongoose } = require("mongoose");
const CommentModel = require("../../models/comments/comment.model");

exports.addProduct = async (req, res, next) => {
  try {
    const validation = await ProductValidation.validateAsync(req.body);
    const images = ListOfImagesForRequest(req?.files || [], validation.fileUploadPath);
    const supplier = req.user._id;
    const { title, short_title, text, short_text, category, tags, colors, count, price, discount } =
      validation;
    const product = await ProductModel.create({
      title,
      short_title,
      text,
      short_text,
      category,
      tags,
      colors,
      count,
      price,
      discount,
      images,
      supplier,
    });
    if (!product) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "محصول مورد نظر با موفقیت ایجاد نشد",
        },
      });
    }

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "محصول مورد نظر با موفقیت ایجاد شد",
        product,
      },
    });
  } catch (err) {
    deleteFileInPublic(req.body.images);
    next(err);
  }
};

exports.addFeaturesForProduct = async (req, res, next) => {
  try {
    const { field } = req.params;
    const validation = await ProductValidation.validateAsync(req.body);
    const { feature_title, feature_description } = validation;
    const product = await findProductWithIDOrTitle(field);
    const updateResult = await ProductModel.updateOne(
      { _id: product._id },
      {
        $push: {
          "features.feature_detail": { feature_title, feature_description },
        },
      }
    );
    if (!updateResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "جزئیاتی برای محصول اضافه نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "جزئیات برای محصول با موفقیت اضافه شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.removeFeature = async (req, res, next) => {
  try {
    const { productID } = req.params;
    const { title } = req.body;
    const product = await ProductModel.findById(productID);
    if (!product) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "محصول مورد نظر یافت نشد",
        },
      });
    }
    const feature = await findFeatureInFeatures(productID, title);

    if (feature?.feature_title !== title) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "حذف ویژگی محصول مورد نظر انجام نشد",
        },
      });
    } else {
      await ProductModel.updateOne(
        { _id: productID },
        {
          $pull: {
            "features.feature_detail": {
              feature_title: title,
            },
          },
        }
      );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "حذف ویژگی محصول مورد نظر با موفقیت انجام شد",
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.removeProduct = async (req, res, next) => {
  try {
    const { field } = req.params;
    const product = await findProductWithIDOrTitle(field);
    const removeResult = await ProductModel.deleteOne({ _id: product._id });
    if (!removeResult.deletedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "حذف محصول مورد نظر با موفقیت انجام نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "حذف محصول مورد نظر با موفقیت انجام شد",
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getOneProduct = async (req, res, next) => {
  try {
    const { field } = req.params;
    const product = await findProductWithIDOrTitle(field);
    const comments = await CommentModel.find({ productName: product._id, show: 1 })
      .populate([
        { path: "commentUser", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
      ])
      .lean();

    let productTotalScore = 5;

    let productScores = comments.filter((comment) => {
      if (comment.productName) {
        if (comment.productName.toString() === product._id.toString()) {
          return comment;
        }
      }
    });

    productScores.forEach((comment) => {
      productTotalScore += Number(comment.score);
    });

    if (!product) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        data: {
          message: "محصول مورد نظر یافت نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "محصول مورد نظر با موفقیت بازگردانی شد",
        ...product,
        comments,
        productAverageScore: Math.floor(productTotalScore / (productScores.length + 1)),
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { field } = req.params;
    const product = await findProductWithIDOrTitle(field);
    if (req?.body?.fileUploadPath && req?.files) {
      ListOfImagesForRequest(req?.files || [], req.body.fileUploadPath);
    }
    const ProductBlackList = ["bookmarks", "likes", "dislikes", "comments", "supplier", "colors"];
    const data = copyObject(req.body);
    deleteInvalidPropertyInObject(data, ProductBlackList);
    const updateResult = await ProductModel.updateOne({ _id: product._id }, { $set: data });
    if (!updateResult.modifiedCount) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "محصول مورد نظر با موفقیت به روزرسانی نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "محصول مورد نظر با موفقیت به روزرسانی شد",
      },
    });
  } catch (err) {
    deleteFileInPublic(req.body.images)
    next(err);
  }
};

exports.listOfProduct = async (req, res, next) => {
  try {
    const products = await ProductModel.find({})
      .populate([
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
        {
          path: "supplier",
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

    const comments = await CommentModel.find({ show: 1 })
      .populate([
        { path: "commentUser", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
      ])
      .lean();

    let allProducts = [];
    products.forEach((product) => {
      let productTotalScore = 5;

      let productScores = comments.filter((comment) => {
        if (comment.productName) {
          if (comment.productName.toString() === product._id.toString()) {
            return comment;
          }
        }
      });

      let productComments = comments.filter((comment) => {
        if (comment.productName) {
          if (comment.productName.toString() === product._id.toString()) {
            return comment;
          }
        }
      });

      productScores.forEach((comment) => {
        productTotalScore += Number(comment.score);
      });

      allProducts.push({
        ...product,
        productComments,
        productAverageScore: Math.floor(productTotalScore / (productScores.length + 1)),
      });
    });

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "تمامی محصولات موجود با موفقیت بازگردانی شدند",
        allProducts,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.searchOfProduct = async (req, res, next) => {
  try {
    const { search } = req?.query;

    if (search) {
      const product = await ProductModel.findOne({ $text: { $search: search } })
        .populate([
          {
            path: "supplier",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
          {
            path: "category",
            select: { title: 1, _id: 0 },
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
      const comments = await CommentModel.find({ productName: product._id, show: 1 })
        .populate([
          { path: "commentUser", select: { first_name: 1, last_name: 1, mobile: 1, email: 1 } },
        ])
        .lean();

      let productTotalScore = 5;

      let productScores = comments.filter((comment) => {
        if (comment.productName) {
          if (comment.productName.toString() === product._id.toString()) {
            return comment;
          }
        }
      });

      let productComments = comments.filter((comment) => {
        if (comment.productName) {
          if (comment.productName.toString() === product._id.toString()) {
            return comment;
          }
        }
      });

      productScores.forEach((comment) => {
        productTotalScore += Number(comment.score);
      });

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "بنا به جستجوی مورد نظر اطلاعات بازگردانده شدند",
          ...product,
          productComments,
          productAverageScore: Math.floor(productTotalScore / (productScores.length + 1)),
        },
      });
    } else {
      const products = await ProductModel.find({})
        .populate([
          {
            path: "supplier",
            select: { first_name: 1, last_name: 1, username: 1, role: 1 },
          },
          {
            path: "category",
            select: { title: 1, _id: 0 },
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
      let allProducts = [];
      products.forEach((product) => {
        let productTotalScore = 5;

        let productScores = comments.filter((comment) => {
          if (comment.productName) {
            if (comment.productName.toString() === product._id.toString()) {
              return comment;
            }
          }
        });

        let productComments = comments.filter((comment) => {
          if (comment.productName) {
            if (comment.productName.toString() === product._id.toString()) {
              return comment;
            }
          }
        });

        productScores.forEach((comment) => {
          productTotalScore += Number(comment.score);
        });

        allProducts.push({
          ...product,
          productComments,
          productAverageScore: Math.floor(productTotalScore / (productScores.length + 1)),
        });
      });

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "بنا به جستجوی مورد نظر اطلاعات بازگردانده شدند",
          allProducts,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.likedProduct = async (req, res, next) => {
  try {
    const { productID } = req.params;
    await findProductWitId(productID);
    const user = req.user;
    const likesProduct = await ProductModel.findOne({
      _id: productID,
      likes: user._id,
    });
    const dislikesProduct = await ProductModel.findOne({
      _id: productID,
      dislikes: user._id,
    });

    const findQueryForLikesProduct = likesProduct
      ? { $pull: { likes: user._id } }
      : { $push: { likes: user._id } };
    const findQueryForDislikesProduct = dislikesProduct && {
      $pull: { dislikes: user._id },
    };
    await ProductModel.updateOne({ _id: productID }, findQueryForLikesProduct);
    let message;
    if (!likesProduct) {
      if (dislikesProduct) {
        await ProductModel.updateOne({ _id: productID }, findQueryForDislikesProduct);
      }
      message = "پسندیدن محصول با موفقیت انجام شد";
    } else message = "پسندیدن محصول با موفقیت لغو شد";
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

exports.dislikedProduct = async (req, res, next) => {
  try {
    const { productID } = req.params;
    await findProductWitId(productID);
    const user = req.user;
    const likesProduct = await ProductModel.findOne({
      _id: productID,
      likes: user._id,
    });
    const disLikesProduct = await ProductModel.findOne({
      _id: productID,
      dislikes: user._id,
    });
    const findQueryForDislikesProduct = disLikesProduct
      ? { $pull: { dislikes: user._id } }
      : { $push: { dislikes: user._id } };
    const findQueryForLikesProduct = likesProduct && {
      $pull: { likes: user._id },
    };
    await ProductModel.updateOne({ _id: productID }, findQueryForDislikesProduct);
    let message;
    if (!disLikesProduct) {
      if (likesProduct) {
        await ProductModel.updateOne({ _id: productID }, findQueryForLikesProduct);
      }
      message = "نپسندیدن محصول با موفقیت انجام شد";
    } else message = "نپسندیدن محصول با موفقیت لغو شد";
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

exports.bookmarkedProduct = async (req, res, next) => {
  try {
    const { productID } = req.params;
    const user = req.user;
    await findProductWitId(productID);
    const bookmarkProduct = await ProductModel.findOne({
      _id: productID,
      bookmarks: user._id,
    });
    const updateQuery = bookmarkProduct
      ? { $pull: { bookmarks: user._id } }
      : { $push: { bookmarks: user._id } };
    await ProductModel.updateOne({ _id: productID }, updateQuery);
    let message;
    if (!bookmarkProduct) message = "محصول مورد نظر به لیست علاقه مندی های شما اضافه شد";
    else message = "محصول مورد نظر از لیست علاقه مندی های شما حذف شد";
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

const findProductWitId = async (id) => {
  const product = await ProductModel.findById(id);
  if (!product) {
    return res.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "محصول مورد نظر یافت نشد",
      },
    });
  }
  return product;
};

const findProductWithIDOrTitle = async (field) => {
  const findQuery = mongoose.isValidObjectId(field) ? { _id: field } : { title: field };
  const product = await ProductModel.findOne(findQuery).lean();
  if (!product) {
    return res.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      data: {
        message: "محصول مورد نظر یافت نشد",
      },
    });
  }
  return product;
};

async function findFeatureInFeatures(productID, title) {
  const findResult = await ProductModel.findOne(
    { _id: productID, "features.feature_detail.feature_title": title },
    { "features.feature_detail.$": 1 }
  );
  const userDetail = copyObject(findResult);
  return userDetail?.features?.feature_detail?.[0];
}
