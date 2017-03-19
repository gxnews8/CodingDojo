var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var discussionSchema = new mongoose.Schema({
	_user: {type: Schema.ObjectId, ref: 'users'},
	messages: [{type: Schema.Types.ObjectId, ref: 'messages'}],
	title: String,
	description: String,
	category: String,
	created_at: {type: Date, default: new Date}
})

var Discussions = mongoose.model('discussions', discussionSchema);
