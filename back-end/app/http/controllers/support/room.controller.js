const createHttpError = require("http-errors");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const path = require("path");
const ConversationModel = require("../../models/conversation/conversation.model");

exports.addRoom = async (req, res, next) => {
  try {
    const { name, description, filename, fileUploadPath, namespace } = req.body;
    await findConversationWithEndpoint(namespace);
    await findRoomWithName(name);
    const image = path.join(fileUploadPath, filename).replace(/\\/g, "/");
    const room = { name, description, image };
    await ConversationModel.updateOne(
      { endpoint: namespace },
      {
        $push: { rooms: room },
      }
    );
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "اتاق با موفقیت ایجاد شد",
      },
    });
  } catch (error) {
    next(error);
  }
};
exports.getListOfRooms = async (req, res, next) => {
  try {
    const conversation = await ConversationModel.find({}, { rooms: 1 }).lean();
    let rooms;
    conversation.forEach((room) => {
      rooms = room;
    });

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        rooms: rooms,
      },
    });
  } catch (error) {
    next(error);
  }
};

const findRoomWithName = async (name) => {
  const conversation = await ConversationModel.findOne({
    "rooms.name": name,
  });
  if (conversation) throw createHttpError.BadRequest("این اسم قبلا انتخاب شده است");
};

const findConversationWithEndpoint = async (endpoint) => {
  const conversation = await ConversationModel.findOne({ endpoint });
  if (!conversation) throw createHttpError.NotFound("فضای مگالمه ای یافت نشد");
  return conversation;
};
