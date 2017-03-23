var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var bcrypt = require('bcryptjs');

var CustomerSchema = new Schema({
  _user: { type : ObjectId, ref : 'User' },
  first_name: { type: String, default: 'Coding' },
  last_name: { type: String, default: 'Dojo' },
  email: { type: String, default: 'coding@dojo.com' },
  password: { type: String, default: 'Dojo#2016' },
  birthday: String,
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

CustomerSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
CustomerSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

CustomerSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

module.exports = mongoose.model("Customer", CustomerSchema);
