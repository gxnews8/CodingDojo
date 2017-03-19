var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
	_discussion: {type: Schema.ObjectId, ref: 'discussions'},
	_user: {type: Schema.ObjectId, ref: 'users'},
	text: String,
	created_at: {type: Date, default: new Date}
})

var Messages = mongoose.model('messages', messageSchema);
