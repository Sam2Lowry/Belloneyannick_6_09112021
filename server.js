const http = require("http");
const app = require("./app");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

/*
1. First, it checks if the PORT environment variable is set. If it is, it uses that value. If it isn’t, it uses 3000.
2. Next, it checks if the port is a number. If it is, it uses that value. If it isn’t, it uses 3000.
3. Finally, if the port is less than 0, it uses 3000.
*/
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  /*
  1. It checks if the address is a string or a number. If it’s a string, it uses the pipe (|) operator to pipe the address to the server. If it’s a number, it uses the port: operator to specify the port number.
2. It checks if the error is an instance of the EACCES or EADDRINUSE error. If it is, it prints out the appropriate error message and exits the process with a status code of 1.
3. If the error is not an instance of the EACCES or EADDRINUSE error, it re-throws the error.
*/
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

// create a log stream
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(port);
