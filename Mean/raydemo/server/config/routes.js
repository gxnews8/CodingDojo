module.export = function(app){
  app.post('/login', function(req, res){
    console.log(req.body, "Cat is here.");
  })
  app.get('/getuser', function(req, res){
    session.getUser(req, res)
  })
  app.get('/login', function(req, res){
    session.login(req, res)
  })
  app.get('/logout', function(req, res){
    session.logout(req, res)
  })
}
var session = require('./../controllers/session.js');
module.exports = function(req, res){
// console.log(req.body, 'in routes', session);
console.log(req, res);
}
