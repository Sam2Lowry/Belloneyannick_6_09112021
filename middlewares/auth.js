const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.userID = decodedToken.userId;
    if (req.body.userId && req.body.userId !== req.userID) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
