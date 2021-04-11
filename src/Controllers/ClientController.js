const ClientModel = require("../Models/Client");
const errorResponse = require('../Middleware/ErrorHandler');
const clientHateoas = require('../Middleware/ClientHateoas');

exports.post = async (req, res, next) => {
  // #swagger.tags = ['Client']
  // #swagger.description = 'Endpoint para criar um Cliente.'
  /* #swagger.security = [{
          "JWT": []
  }] */
  /* #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Client information',
      required: true,
      schema: { 
        "name": "Bruna",
        "birthdate": "1991-09-05",
      }
    }
  */
  
  const client = await ClientModel.create({
    ...req.body,
  });
  if(client){
    /* #swagger.responses[201] = { 
        schema: {
          "_id": "606bd425d95e54a33aa16987",
          "name": "Bruna",
          "birthdate": "1991-09-05",
          "createdAt": "2021-04-06T03:23:17.306Z",
          "updatedAt": "2021-04-06T03:23:17.306Z",
          "__v": 0
        },
        description: 'Cliente criado.' 
    } */
    res.status(201).send(client);
  }else{
    /* #swagger.responses[500] = { 
        schema: { $msg: 'Client not created' },
        description: 'Cliente não criado.' 
    } */
    res.status(500).send({msg: errorResponse.errorResponse(6)});
  }
};

exports.put = async (req, res, next) => {
  // #swagger.tags = ['Client']
  // #swagger.description = 'Endpoint para atualizar um cliente.'
  /* #swagger.security = [{
          "JWT": []
  }] */
  // #swagger.parameters['id'] = { description: 'ID do cliente.', value: '606bd425d95e54a33aa16987' }
  /* #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Auth information',
      required: true,
      schema: { 
        "name": "Bruna",
        "birthdate": "1990-09-05"
      }
    }
  */
  const id = req.params.id;
  const novo = req.body;
  const client = await ClientModel.findOne({ _id: id });
  if (client) {
    /* #swagger.responses[200] = { 
        schema: {
          "_id": "606bd425d95e54a33aa16987",
          "name": "Bruna",
          "birthdate": "1990-09-05",
          "createdAt": "2021-04-06T03:23:17.306Z",
          "updatedAt": "2021-04-06T03:23:17.306Z",
          "__v": 0
        },
        description: 'Cliente Atualizado.' 
    } */
    await ClientModel.updateOne({ _id: id }, novo);
    const client = await ClientModel.findOne({ _id: id });
    res.status(200).send(client);
  }else{
    /* #swagger.responses[404] = { 
      schema: { $msg: 'Client not found' },
      description: 'Cliente não encontrado.' 
    } */
    res.status(404).send({ msg: errorResponse.errorResponse(5) })
  }
};

exports.delete = async (req, res, next) => {
  // #swagger.tags = ['Client']
  // #swagger.description = 'Endpoint para obter apagar um cliente.'
  /* #swagger.security = [{
          "JWT": []
  }] */
  // #swagger.parameters['id'] = { description: 'ID do cliente.', value: '606bd425d95e54a33aa16987' }
  let id = req.params.id;
  const { deletedCount } = await ClientModel.deleteOne({ _id: id });
  if(deletedCount>0){
    /* #swagger.responses[204] = { 
      description: 'Cliente deletado.' 
    } */
    res.status(204).send();
  }else{
    /* #swagger.responses[404] = { 
      schema: {msg:"Erro ao apagar, tente novamente."},
      description: 'Cliente não encontrado.' 
    } */
    res.status(404).send({ msg:  errorResponse.errorResponse(7)});
  }
};

exports.get = async (req, res, next) => {
  // #swagger.tags = ['Client']
  // #swagger.description = 'Endpoint para obter todos Clientes. Você pode buscar pelo nome do cliente passando "name"'
  /* #swagger.security = [{
          "JWT": []
  }] */
  // #swagger.parameters[name] = {description: 'nome do cliente', in: 'query'}
  var name = req.query.name;
  const queryParams = { 'name': new RegExp(name, 'i') }
  
  const clients = await ClientModel.find(queryParams);
  const totalClients = clients.length;
  if(totalClients>0){
      /* #swagger.responses[200] = { 
      schema: { total: 1, data:[{
          "_id": "606bd425d95e54a33aa16987",
          "name": "Bruna",
          "birthdate": "1991-09-05",
          "createdAt": "2021-04-06T03:23:17.306Z",
          "updatedAt": "2021-04-06T03:23:17.306Z",
          "__v": 0,
          "links": [
                {
                    "type": "PUT",
                    "rel": "self",
                    "uri": "http://localhost:8080/client/606bd425d95e54a33aa16987"
                }]
        }]
      }
    } */
    const clientsHAL = clientHateoas.addArrayHAL(clients);
    // console.log(cc);
    const payload = { total: totalClients, data: clientsHAL}
    res.status(200).send(payload);
  }else{
    /* #swagger.responses[404] = { 
      schema: { $msg: 'Client not found' },
      description: 'Nenhum cliente encontrado.' 
    } */
    res.status(404).send({ msg: errorResponse.errorResponse(5) })
  }
};

exports.getById = async (req, res, next) => {
  // #swagger.tags = ['Client']
  // #swagger.description = 'Endpoint para obter dados de um cliente.'
  /* #swagger.security = [{
          "JWT": []
  }] */
  // #swagger.parameters['id'] = { description: 'ID do cliente.', value: '606bd425d95e54a33aa16987' }

  const id = req.params.id;
  const client = await ClientModel.findOne({ _id: id });
  if (client) {
    /* #swagger.responses[200] = { 
        schema: {
          "_id": "606bd425d95e54a33aa16987",
          "name": "Bruna",
          "birthdate": "1991-09-05",
          "createdAt": "2021-04-06T03:23:17.306Z",
          "updatedAt": "2021-04-06T03:23:17.306Z",
          "__v": 0,
          "links": [
                {
                    "type": "PUT",
                    "rel": "self",
                    "uri": "http://localhost:8080/client/606bd425d95e54a33aa16987"
                }]
        },
        description: 'Cliente encontrado.' 
    } */
    const clientHAL = clientHateoas.addHAL(client);
    res.status(200).send(clientHAL);
  }else{
    /* #swagger.responses[404] = { 
        schema: { $msg: 'Client not found' },
        description: 'Cliente não encontrado.' 
    } */
    res.status(404).send({ msg: errorResponse.errorResponse(2) });
  }
};
