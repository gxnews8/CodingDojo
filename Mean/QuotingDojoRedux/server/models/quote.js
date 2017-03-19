// Quote
var mongoose = require("mongoose")
, Schema = mongoose.Schema;

var QuoteSchema = new mongoose.Schema({
  _Comment: {type: Schema.ObjectId, ref: 'comments'},
	_User: {type: Schema.ObjectId, ref: 'users'},
  Quote: String,
  CreatedAt: {type: Date, default: new Date},
  UpdatedAt: {type: Date, default: new Date}
});

var Quote = mongoose.model('quotes', QuoteSchema);
