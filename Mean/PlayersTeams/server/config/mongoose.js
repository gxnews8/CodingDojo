var mongoose = require('mongoose')
, fs = require('fs')
, path = require('path')
, mongoUri = 'mongodb://localhost/team'
, models_path = path.join(__dirname, './../models');
mongoose.connect(mongoUri);
fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		require(models_path + '/' + file);
	}
});
