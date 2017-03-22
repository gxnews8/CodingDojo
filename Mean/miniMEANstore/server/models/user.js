var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var bcrypt = require('bcryptjs');

var USerSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  birthday: String,
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

USerSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
USerSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

USerSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

module.exports = mongoose.model("User", USerSchema);
