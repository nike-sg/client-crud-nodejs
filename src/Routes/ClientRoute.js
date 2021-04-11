const ClientController = require('../Controllers/ClientController');
const auth = require('../Middleware/Auth').auth;

module.exports = (app) => {
   app.post('/client', auth, ClientController.post);
   app.put('/client/:id', auth, ClientController.put);
   app.delete('/client/:id', auth, ClientController.delete);
   app.get('/client', auth, ClientController.get);
   app.get('/client/:id', auth, ClientController.getById);
}