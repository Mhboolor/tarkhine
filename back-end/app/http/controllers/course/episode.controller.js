const { default: getVideoDurationInSeconds } = require("get-video-duration");
const { createEpisodeSchema } = require("../../validation/course/course.schema");
const path = require("path");
const {
  getTime,
  deleteFileInPublic,
} = require("../../../utils/functions.utils");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const CourseModel = require("../../models/course/course.model");

exports.addNewEpisode = async (req, res, next) => {
  try {
    const { title, text, type, chapterID, courseID, filename, fileUploadPath } =
      await createEpisodeSchema.validateAsync(req.body);
    const fileAddress = path.join(fileUploadPath, filename);
    const videoAddress = fileAddress.replace(/\\/g, "/");
    const videoURL = `${process.env.BASE_URL}:${process.env.APPLICATION_PORT}/${videoAddress}`;
    const seconds = await getVideoDurationInSeconds(videoURL);
    const time = getTime(seconds);
    const episode = {
      title,
      text,
      type,
      time,
      videoAddress,
    };
    const createEpisodeResult = await CourseModel.updateOne(
      {
        _id: courseID,
        "chapters._id": chapterID,
      },
      {
        $push: {
          "chapters.$.episodes": episode,
        },
      }
    );
    if (createEpisodeResult.modifiedCount == 0){
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "افزودن اپیزود انجام نشد",
        },
      });
    }
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "افزودن اپیزود با موفقیت انجام شد",
      },
    });
  } catch (error) {
    deleteFileInPublic(req.body.videoAddress);
    next(error);
  }
};
exports.removeEpisode = async (req, res, next) => {
  try {
    const { episodeID } = req.params;
    await getEpisode(CourseModel, episodeID);
    const removeEpisodeResult = await CourseModel.updateOne(
      {
        "chapters.episodes._id": episodeID,
      },
      {
        $pull: {
          "chapters.$.episodes": {
            _id: episodeID,
          },
        },
      }
    );

    if (!removeEpisodeResult.modifiedCount){
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {
          message: "حذف اپیزود انجام نشد",
        },
      });
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "حذف اپیزود با موفقیت انجام شد",
      },
    });
  } catch (error) {
    next(error);
  }
};

async function getEpisode(model, id) {
  const findEpisode = await model.findOne(
    { "chapters.episodes._id": id },
    { "chapters.episodes.$": 1 }
  );

  return findEpisode?.chapters?.[0]?.episodes?.[0];
}
