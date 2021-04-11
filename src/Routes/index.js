const ClientRoute = require('./ClientRoute');
const DocRoute = require('./DocRoute');
const AuthRoute = require('./AuthRoute');
const DefaultRoute = require('./DefaultRoute');


module.exports = (app) => {   
   DefaultRoute(app);
   ClientRoute(app);
   DocRoute(app);
   AuthRoute(app);
}