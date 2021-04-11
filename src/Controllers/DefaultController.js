const CONST = require('../Constant/BasicConst');
exports.get = async (req, res, next) => {
    // #swagger.description = 'Default Route'
    /* #swagger.responses[200] = { 
      description: 'Default route.',
      schema: { 
        $msg: true,
        $documentation: "string"
      } 
    } */
    res.status(200).send({ msg: "Hello Here!", documentation: `${CONST.BASEURL}/doc`});
};

