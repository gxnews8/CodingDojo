// Association
var mongoose = require("mongoose")
, Schema = mongoose.Schema;

var AssociationSchema = new mongoose.Schema({
	_Player: {type: Schema.ObjectId, ref: 'players'},
  _Team: {type: Schema.ObjectId, ref: 'teams'},
  name: String,
  team: String
});

var Association = mongoose.model('associations', AssociationSchema);
