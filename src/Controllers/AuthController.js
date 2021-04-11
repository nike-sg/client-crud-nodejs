const UserModel = require("../Models/User");
const errorResponse = require('../Middleware/ErrorHandler');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secret = "minhastringdeseguranca101010";

exports.login = async (req, res, next) => {
  // #swagger.tags = ['Auth']
  // #swagger.description = 'Validate User JWT'
  /* #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Auth information',
        required: true,
        schema: { 
          $name: "admin",
          $password: "123"
        }
  } */
  const { password, name } = req.body;
  
  const hash = crypto
    .createHmac("sha256", secret)
    .update(password)
    .digest("hex");

  const user = await UserModel.findOne({ name, password: hash });

  if (user) {
    const token = jwt.sign({ userId: user._id }, secret);
    /* #swagger.responses[200] = { 
      description: 'User successfully obtained the JWT Token.',
      schema: { 
        $auth: true,
        $token: "string"
      } 
    } */
    res.status(200).send({ auth: true, token });
  } else {
    /* #swagger.responses[401] = { 
      description: 'User successfully obtained the JWT Token.',
      schema: { 
        auth: false,
        msg: "message with the error" 
      } 
    }
    */
    res.status(401).send({ auth: false, msg: errorResponse.errorResponse(1) });
  }
};
