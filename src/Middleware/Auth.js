const errorResponse = require('../Middleware/ErrorHandler');
const jwt = require("jsonwebtoken");
const secret = "minhastringdeseguranca101010";

exports.auth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: errorResponse.errorResponse(3) });
  jwt.verify(token, secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: errorResponse.errorResponse(4) });

    req.currentUser = decoded.userId;
    next();
  });
};
