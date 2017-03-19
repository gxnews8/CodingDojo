var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var Schema = mongoose.Schema;


var userSchema = new mongoose.Schema({
	discussions: [{type: Schema.Types.ObjectId, ref: 'discussions'}],
	messages: [{type: Schema.Types.ObjectId, ref: 'messages'}],
	name: String,
	username: String,
	password: String,
	created_at: {type: Date, default: new Date}
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	
};
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var Users = mongoose.model('users', userSchema);
