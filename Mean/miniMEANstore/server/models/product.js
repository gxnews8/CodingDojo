var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ProductSchema = new Schema({
  _user: { type : ObjectId, ref : 'User' },
  name: { type: String, default: 'Apple' },
  img: { type: String, default: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTM2G-meTLxeO8GK93DpHNiRW23RJ72KRfN3LH5XXpNu1aoVqL9oA' },
  description: { type: String, default: 'This is apple.' },
  quantity: { type: Number, default: 50 },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

ProductSchema.statics.isQuantityAvailable = function(productId, quantityRequested, cb) {
  this.findById(productId, function(err, product){
    if (err) { return cb(err); }
    var result = (product.quantity >= quantityRequested);
    return cb(result, product);
  })
};

ProductSchema.methods.decrementQuantity = function(quantity, cb) {
  this.quantity -= quantity;
  this.save(function(err){
    cb(err);
  });
};

module.exports = mongoose.model("Product", ProductSchema);
