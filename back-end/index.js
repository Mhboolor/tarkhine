const Application = require("./app/server");

const DB_URI = "mongodb://127.0.0.1:27017/functionalBackend";

Application(DB_URI, 2222);
