var mongoose = require('mongoose')
, Schema = mongoose.Schema
, UserSchema = new Schema({
  // name: {type:String, required: true, maxlength: 30. ,minlength:2}
  name: String
})

mongoose.model('User', UserSchema);
console.log(mongoose);
