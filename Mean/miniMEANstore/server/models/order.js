var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderSchema = new Schema({
  _user: { type : ObjectId, ref : 'User' },
  _customer: { type : ObjectId, ref : 'Customer' },
  _product: { type : ObjectId, ref : 'Product' },
  quantity: { type: Number, default: 1 },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});


OrderSchema.statics.removeOrdersByUserId = function(customerId, cb) {
  // Still need to add pending quantities back to orders...
  this.remove({ _customer: customerId}, function(err){
    return cb(err);
  })
};

OrderSchema.statics.removeOrdersByCustomerId = function(customerId, cb) {
  // Still need to add pending quantities back to orders...
  this.remove({ _customer: customerId}, function(err){
    return cb(err);
  })
};

OrderSchema.statics.removeOrdersByProductId = function(productId, cb) {
  // Still need to add pending quantities back to orders...
  this.remove({ _product: productId}, function(err){
    return cb(err);
  })
};

module.exports = mongoose.model("Order", OrderSchema);