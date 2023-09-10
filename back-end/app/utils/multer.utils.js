const multer = require("multer");
const path = require("path");
const fs = require("fs");
const createHttpError = require("http-errors");

const createRoute = (req) => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = date.getMonth().toString();
  const day = date.getDate().toString();
  const directory = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "uploads",
    "blogs",
    year,
    month,
    day
  );
  req.body.fileUploadPath = path.join("uploads", "blogs", year, month, day);
  fs.mkdirSync(directory, { recursive: true });
  return directory;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file?.originalname) {
      const filePath = createRoute(req);
      return cb(null, filePath);
    }
    return cb(null, null);
  },

  filename: (req, file, cb) => {
    if (file.originalname) {
      const fileName = String(file.originalname);
      req.body.filename = fileName;
      return cb(null, fileName);
    }
    return cb(null, null);
  },
});

function fileFilter(req, file, cb) {
  const ext = path.extname(file.originalname);
  const mimeTypes = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
  if (mimeTypes.includes(ext)) return cb(null, true);
  return cb(createHttpError.BadRequest("فرمت عکس ارسالی صحیح نمی باشد"));
}
function videoFilter(req, file, cb) {
  const ext = path.extname(file.originalname);
  const mimeTypes = [".mp4", ".mpg", ".mov", ".avi", ".mkv"];
  if (mimeTypes.includes(ext)) {
    return cb(null, true);
  }
  return cb(createError.BadRequest("فرمت ارسال شده ویدیو صحیح نمیباشد"));
}

const pictureMaxSize = 3 * 1000 * 1000; //3mb
const videoMaxSize = 500 * 1000 * 1000;//500MB

const uploadFile = multer({
  storage,
  fileFilter,
  limits: { fileSize: pictureMaxSize },
});
const uploadVideo = multer({ storage, videoFilter, limits: { fileSize: videoMaxSize } }); 

const Upload = {
  uploadFile,
  uploadVideo
};

module.exports = Upload;
