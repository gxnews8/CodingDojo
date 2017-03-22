var mongoose = require('mongoose');
// var Users = require('../controllers/users.js');
var Order = require('../controllers/orders');
var Product = require('../controllers/products');
var Customer = require('../controllers/customers');
var User = require('../controllers/users');
//************RESTful routes for users************
module.exports = (function(app){
app.get('/users', Users.index);
//app.get('/users/new', Users.new);
app.get('/users/:id', Users.show);
//app.get('/users/:id/edit', Users.edit);
app.post('/users', Users.create);
app.put('/users/:id', Users.update);
app.delete('/users/:id', Users.delete);

app.post('/signin', Users.signin);
app.post('/signup', Users.signup);
});
//************END routes for users****************

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });

  // ORDERS
  app.get('/orders', Order.index);
  app.get('/orders/recent', Order.recent);
  app.post('/orders/:productId/:customerId', Order.create);
  app.get('/orders/:id', Order.show);
  app.delete('/orders/:id', Order.delete);

  // PRODUCTS
  app.get('/products', Product.index);
  app.post('/products', Product.create);
  app.delete('/products/:id', Product.delete);

  // CUSTOMERS
  app.get('/customers', Customer.index);
  app.get('/customers/recent', Customer.recent);
  app.post('/customers', Customer.create);
  app.delete('/customers/:id', Customer.delete);
}
