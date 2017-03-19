// Player
var mongoose = require("mongoose")
, Schema = mongoose.Schema;

var PlayerSchema = new mongoose.Schema({
	_Team: {type: Schema.ObjectId, ref: 'teams'},
  name: String
});

var Player = mongoose.model('players', PlayerSchema);
