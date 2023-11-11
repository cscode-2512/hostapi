const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ID: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  review:{
    type: Number,
    default: 40,
  },
  star:{
    type: Number,
    default: 4.0,
  },

  company: {
    type: String,

  },
  color: {
    type: Array,

  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  stock: {
    type: Number,
    default:6,
  },

});

module.exports = mongoose.model("Product", productSchema);