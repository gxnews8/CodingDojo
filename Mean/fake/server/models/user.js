//basic model
var mongoose = require('mongoose');
var userSchema= new mongoose.Schema({
  name:String,
  username:String,
  email:String,
  address:{},
  phone:String,
  website:String,
  company:{},
  posts:Array,
  accountHistory:{},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

mongoose.model('users', userSchema);
/*
types:
var schema = new Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array:      [],
  ofString:   [String],
  ofNumber:   [Number],
  ofDates:    [Date],
  ofBuffer:   [Buffer],
  ofBoolean:  [Boolean],
  ofMixed:    [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  }
})
required validator examples:
var s = new Schema({ born: { type: Date, required: true })
var s = new Schema({ born: { type: Date, required: 'Born is required!' })
custom validation:
(for more see http://mongoosejs.com/docs/validation.html)
function validator (val) {
  return val == 'something';
}
new Schema({ name: { type: String, validate: validator }});
// with a custom error message
var custom = [validator, 'Uh oh, {PATH} does not equal "something".']
new Schema({ name: { type: String, validate: custom }});
// adding many validators at a time
var many = [
  { validator: validator, msg: 'uh oh' }
, { validator: anotherValidator, msg: 'failed' }
]
new Schema({ name: { type: String, validate: many }});
unique:
var s = new Schema({ name: { type: Date, unique: true })
returns an E11000 error not validation error
customize return using get:
function obfuscate (cc) {
  return '****-****-****-' + cc.slice(cc.length-4, cc.length);
}
var AccountSchema = new Schema({
  creditCardNumber: { type: String, get: obfuscate }
});
*/
