var Discussions = require("../controllers/discussions.js");
var authenticate = require('./auth.js');

module.exports = function(app, flash, passport){

	app.get('/users/current', isLoggedIn, function(req,res){
		console.log(req.user);
		res.json(req.user);
	});

	app.post("/users/create", passport.authenticate('sign-up'),
		function(req,res){
			if(req.user){
				res.json(200);
			} else {
				res.redirect("/users/bad");
			}
		}
	);

	app.post("/users/login", passport.authenticate('login'),
		function(req,res){
			if(req.user){
				res.json(200);
			} else {
				res.redirect("/users/bad");
			}
		}	
	);

	app.get("/users/bad", function(req,res){
		res.json(401);
	});

	app.post("/users/logout", function(req,res){
		req.session.destroy();
		res.json(200);
	});

	app.get("/users/user-discussions", function(req,res){
		Discussions.getUserDiscussions(req,res);
	})

	app.post("/discussions/create", function(req,res){
		Discussions.create(req,res);
	});

	app.get("/discussions/:id", function(req,res){
		Discussions.get_discussion(req,res);
	});

	app.post("/discussions/add_message", function(req,res){
		Discussions.addMessage(req,res);
	});

	app.get("/discussions/category/:category", function(req,res){
		Discussions.get_category(req,res);
	});

	app.get("/discussions/discussion/:user", function(req,res){
		Discussions.discussion_user(req,res);
	});

	app.get("/discussions/get/popular", function(req,res){
		Discussions.get_popular(req,res);
	});

	app.get("/discussions/search/:search", function(req,res){
		Discussions.search(req,res);
	})

	app.get("/discussions/populate/:discussion", function(req,res){
		Discussions.populate(req,res);
	});

	app.get("/users/get/name/:id", function(req,res){
		Discussions.profileName(req,res);
	});

	app.get("/users/count/discussions/:id", function(req,res){
		Discussions.countDiscussions(req,res);
	});

	app.get("/users/count/messages/:id", function(req,res){
		Discussions.countMessages(req,res);
	});

	app.get("/discussions/home/featured", function(req,res){
		Discussions.featDiscussions(req,res);
	});

	app.get("/discussions/home/new", function(req,res){
		Discussions.newDiscussions(req,res);
	});

}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    } else {
    	res.redirect('/');
    }
}
