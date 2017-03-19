// User
var mongoose = require("mongoose")
, bcrypt = require("bcrypt-nodejs")
, Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  _Quote: [{type: Schema.Types.ObjectId, ref: 'quotes'}],
	_Comment: [{type: Schema.Types.ObjectId, ref: 'comments'}],
  FirstName: String,
  LastName: String,
  Email: String,
  Password: String,
  CreatedAt: {type: Date, default: new Date},
  UpdatedAt: {type: Date, default: new Date}
})

UserSchema.methods.generateHash = function(Password) {
	return bcrypt.hashSync(Password, bcrypt.genSaltSync(8), null);

};
UserSchema.methods.validPassword = function(Password) {
    return bcrypt.compareSync(Password, this.Password);
};

var User = mongoose.model('users', UserSchema);
