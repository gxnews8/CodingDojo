var mongoose = require("mongoose");
var Users = mongoose.model("users");
var Discussions = mongoose.model("discussions");
var Messages = mongoose.model("messages");

module.exports = {
	create: function(req,res){
		console.log(req.body,10);
		var discussion = new Discussions(req.body);
		Users.findById(req.body._user, function(err,response){
			if(response){
				response.discussions.push(discussion._id);
				discussion.save(function(err){
					response.save(function(err){
						if(err){
							res.send("Error. Could not create new discussion.");
						} else {
							res.json(discussion);
						}
					});
				});
			} else {
				res.send("Error. User must be signed in to create a new discussion.");
			}
		});
	},
	addMessage: function(req,res){
		Discussions.findById(req.body._discussion, function(err,Discussion){
			Users.findById(req.body._user, function(err,User){
				var Message = new Messages({text: req.body.text});
				Message._discussion = Discussion._id;
				Message._user = User._id;
				Discussion.messages.push(Message._id);
				User.messages.push(Message._id);
				Message.save(function(err){
					Discussion.save(function(err){
						User.save(function(err){
							if(err){
								console.log(err);
							} else {
								console.log("It's all good!");
							}
						});
					});
				});
			});
		});
	},
	get_category: function(req,res){
		Discussions.find({category: req.params.category}, function(err,results){
			if(err) {
				console.log(err);
			} else {
				res.json(results);
			}
		});
	},
	get_discussion: function(req,res){						
		Discussions.find({_id: req.params.id}, function(err,results){
			if(err){
				console.log(err);
			} else {
				console.log(results);
				res.json(results);
			}
		});
	},
	getUserDiscussions: function(req,res){
		var userDiscussions = [];
		for(var i = 0; i<req.body.discussions.length; i++){
			Discussions.findById({_id: req.body.discussions[i]}, function(err,response){
				if(response){
					userDiscussions.push(response[i]);
				} else {
					res.send("Error. Could not retrieve User's Discussions.");
				}
			});
		}
		var discussions = {};
		discussions.Discussions = userDiscussions;
		res.json(discussions);
	},
	discussion_user: function(req,res){
		Users.findById(req.params.user, function(err,User){
			if(err){
				console.log(err);
			} else {
				res.json(User);
			}
		});
	},
	search: function(req,res){
		console.log(req.params);
		Discussions.find({title: { $regex: req.params.search, $options:"$i" }}, function(err,Discussions){
			console.log(Discussions);
			if(err){
				console.log(err);
			} else {
				res.json(Discussions);
			}
		});
	},
	populate: function(req,res){
		console.log(req.params.discussion);
		Discussions.findById(req.params.discussion)
			.populate({
				path: 'messages',
				populate: { path: '_user'}
			}).exec(function(err, Messages){
				console.log(Messages);
				res.json(Messages);
			})
	},
	profileName: function(req,res){
		console.log(req.params);
		Users.findById(req.params.id, function(err,User){
			if(err){
				console.log(err);
			} else {
				name = User.name;
				res.json({name: name});
			}
		});
	},
	countMessages: function(req,res){
		console.log(req.params);
		Users.findById(req.params.id, function(err,User){
			console.log(User);
			if(err){
				console.log(err);
			} else {
				if(User.messages.length > 0){
					number = User.messages.length;
				} else {
					number = 0;
				}
				res.json({number: number});
			}
		});
	},
	countDiscussions: function(req,res){
		console.log(req.params);
		Users.findById(req.params.id, function(err,User){
			console.log(User);
			if(err){
				console.log(err);
			} else {
				if(User.discussions[0]){
					number = User.discussions.length;
				} else {
					number = 0;
				}
				res.json({number: number});
			}
		});
	},
	featDiscussions: function(req,res){
		Discussions.find({},null,{sort: {__v: -1}}, function(err,discussions){
			res.json(discussions);
		});
	},
	newDiscussions: function(req,res){
		Discussions.find({},null,{sort: {created_at: -1}}, function(err,discussions){
			res.json(discussions);
		});
	}
}