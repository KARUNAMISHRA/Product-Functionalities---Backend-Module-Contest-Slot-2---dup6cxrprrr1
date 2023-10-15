 const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  //name will be a string with required true
  //price will be a Number with required true
  // quantity will be a number with required true
});

module.exports = mongoose.model('Product', productSchema);

// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   quantity: {
//     type: Number,
//     required: true
//   }
// });

// module.exports = mongoose.model('Product', productSchema);
