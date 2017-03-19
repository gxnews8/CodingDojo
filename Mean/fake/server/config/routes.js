var mongoose = require('mongoose');
var Users = require('./../controllers/users.js');
//************RESTful routes for users************
module.exports = (function(app){
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/users', Users.index);
app.get('/users/:_id', Users.show);
// app.post('/users', Users.create);
// app.put('/users/:id', Users.update);
// app.delete('/users/:id', Users.delete);
});
//************END routes for users****************
