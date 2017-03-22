var User = require('../models/user');
var Order = require('../models/order');

module.exports = {
  index: function(req, res){
    User.find({}, function(err, users){
    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json(users);
    	}
    });
  },
  create: function(req, res){
    User.create(req.body, function(err){
      if (err) { return res.json(err); }
      return res.json(true);
    });
  },
  delete: function(req, res){
    // Remove all orders w/ that user
    Order.removeOrdersByUserId(req.params.id, function(err){
      if (err) { return res.json(err); }
      User.remove({ _id: req.params.id }, function(err){
        if (err) { return res.json(err); }
        return res.json(true);
      });
    });
  },
  recent: function(req, res){
    User.find({})
      .sort('-created_at')
      .limit(3)
      .exec(function(err, results){
        res.json(results)
      })
  },
  login: function(req, res){
    User.findOne({email: req.body.email}, function(err, data){
      if(!data){
        var user = new User(req.body)
        user.save(function(err){
          req.session.user = user;
          req.session.save();
          console.log(req.session.user);
          res.json({status: true})
        })
      }else{
        req.session.user = data;
        req.session.save();
        console.log(req.session.user);
        res.json({status: true})
      }
    })
  },
  getCurUser: function(req, res){
    if(!req.session.user || req.session.user == null){
      res.send(null)
    }else{
      res.send(req.session.user)
    }
  },
  logOut: function(req, res){
    req.session.destroy()
    res.redirect('/')
  }
}
