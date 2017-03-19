module.exports = function Route(app){
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
	 res.render("index");
	})
	// post route for adding a data from a survey
	app.post('/users', function(req, res) {
		submitted_info = {
			name: req.body.name,
			dojo_location: req.body.dojo_location,
			favorite_language: req.body.favorite_language,
			comment: req.body.comment
		};
	 	res.render("results",{user_data: submitted_info});
	})
};
