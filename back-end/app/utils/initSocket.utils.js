const socketIO = require("socket.io");
function initialSocket(httpServer) {
  const io = socketIO(httpServer, {
    cors: {
      origin: "*",
      methods:["GET","POST"]
    },
    maxHttpBufferSize: 1e8,
  });
  return io;
}

module.exports = initialSocket;
