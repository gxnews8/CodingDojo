var mongoose = require('mongoose');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var MongoStore = require('connect-mongo')(session);
var Users = mongoose.model("users");

module.exports = function(app, flash, passport) {

	var uristring = 'mongodb://127.0.0.1:27017/slack';

	app.use(session({
		store: new MongoStore({
			mongooseConnection: mongoose.connection,
			url: uristring
		}),
		secret: 'Secret',
		resave: true,
		saveUninitialized: true
	}));

	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

	 passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        Users.findById(id, function(err, user) {
            done(err, user);
        });
    });

	passport.use('sign-up', new LocalStrategy({

		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},
		function (req, username, password, done) {

			var newUser = req.body;

			Users.findOne({username: newUser.username}, function(err, response){
				if(!response){
					var user = new Users(newUser);
					user.password = user.generateHash(user.password);
					user.save(function(err, result){
						if(err){
							console.log('ERROR');
							return done(err);
						} else {
							console.log('GOOD');
							return done(null, user);
						}
					});
				} else {
					console.log('Email taken');
					return done(null);
				}
			});
		}
	));

	passport.use('login', new LocalStrategy({

		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},
		function (req, username, password, done) {

			Users.findOne({ username: req.body.username }, function(err, user){
				if(err) {
					console.log('Could not find');
					return done(err);
				}
				if(!user) {
					console.log('No User');
					return done(null);
				}
				if(!user.validPassword(req.body.password)){
					console.log('Invalid password');
					return done(null);
				}
				else {
					console.log("good");
					return done(null, user);
				}
			});
		}
	));

}
