const { BASEURL } = require('../Constant/BasicConst');


let addArrayHAL = (data) => {
  let newArray = [];
  
  data.map((obj) => {
    var links = { "links": [
      {
        "type":"GET",
        "rel":"self",
        "uri":`${BASEURL}/client/${obj._id}`
      },
      {
        "type":"DELETE",
        "rel":"self",
        "uri":`${BASEURL}/client/${obj._id}`
      },
      {
        "type":"PUT",
        "rel":"self",
        "uri":`${BASEURL}/client/${obj._id}`
      }
    ]};
    var newObj = {...obj._doc, ...links};
    newArray.push(newObj);
  });
  return newArray;
}

let addHAL = (data) => {
  var links = { "links": [
    {
      "type":"GET",
      "rel":"self",
      "uri":`${BASEURL}/client/${data._id}`
    },
    {
      "type":"DELETE",
      "rel":"self",
      "uri":`${BASEURL}/client/${data._id}`
    },
    {
      "type":"PUT",
      "rel":"self",
      "uri":`${BASEURL}/client/${data._id}`
    }
  ]};
  return {...data._doc, ...links};
}

module.exports = {
	addArrayHAL,
  addHAL,
};