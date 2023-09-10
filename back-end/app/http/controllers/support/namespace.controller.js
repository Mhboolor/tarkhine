const createHttpError = require("http-errors");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const ConversationModel = require("../../models/conversation/conversation.model");

exports.addNamespace = async (req, res, next) => {
  try {
    const { title, endpoint } = req.body;
    await findNamespaceWithEndpoint(endpoint);
    const conversation = await ConversationModel.create({ title, endpoint });
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "فضای مکالمه با موفقیت ایجاد شد",
        conversation,
      },
    });
  } catch (error) {
    next(error);
  }
};
exports.getListOfNamespaces = async (req, res, next) => {
  try {
    const namespaces = await ConversationModel.find({}, { rooms: 0 });
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        namespaces,
      },
    });
  } catch (error) {
    next(error);
  }
};
const findNamespaceWithEndpoint = async (endpoint) => {
  const conversation = await ConversationModel.findOne({ endpoint });
  if (conversation) throw createHttpError.BadRequest("این اسم قبلا انتخاب شده است");
};
