var session = require('./../controllers/session.js');
// var User = mongoose.model('User');
// console.log(User);
module.exports = (function(req, res){
console.log(req.body, 'in routes', session);
// return {
//   login:function(req, res){
//     User.findOne({name: req.body.name}, function(err, user){
//       if(!user){
//         var user = new User(req.body);
//         user.save();
//         console.log('user created');
//       }
//       else
//       {
//         console.log('user not created');
//         var user = data;
//       }
//       req.session.user =user
//       req.session.user.save()
//       // console.log(req.session.user);
//       return res.json(user)
//     })
//   },
    // getUser: function(req, res){
    //   session.getUser(req, res)
    // }
    // logout: function(req, res){
    //   req.session.clear()
    // }
})
