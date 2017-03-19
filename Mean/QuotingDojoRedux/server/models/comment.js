// Comment
var mongoose = require("mongoose")
, Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  _User: {type: Schema.ObjectId, ref: 'users'},
	_Quote: [{type: Schema.Types.ObjectId, ref: 'quotes'}],
  Comment: String,
  CreatedAt: {type: Date, default: new Date},
  UpdatedAt: {type: Date, default: new Date}
});

var Comment = mongoose.model('comments', CommentSchema);
