// Team
var mongoose = require("mongoose")
, Schema = mongoose.Schema;

var TeamSchema = new mongoose.Schema({
	_Player: {type: Schema.ObjectId, ref: 'players'},
  name: String
});

var Team = mongoose.model('teams', TeamSchema);
