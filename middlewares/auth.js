const jwt = require("jsonwebtoken");
require("dotenv").config();

/*
1. First, it checks if the authorization header is present in the request. If it’s not, it returns a 401 Unauthorized response.
2. If the authorization header is present, it splits the authorization header into two parts. The first part is the word bearer, and the second part is the token.
3. It then verifies the token using the jwt.verify() method. If the token is invalid, it throws an error.
4. If the token is valid, it sets the user ID in the request object.
5. If the user ID in the request body is different from the user ID in the token, it throws an error.
6. If the user ID in the request body is the same as the user ID in the token, it calls the next() method to move to the next middleware.
*/
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
