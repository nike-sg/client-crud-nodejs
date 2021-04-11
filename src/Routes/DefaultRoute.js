const DefaultController = require('../Controllers/DefaultController');
module.exports = (app) => {
  app.get('/', DefaultController.get);
}