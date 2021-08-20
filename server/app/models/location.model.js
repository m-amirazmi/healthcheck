const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  latitude: {
    type: String,
    required: true,
    maxlength: 100,
  },
  longitude: {
    type: String,
    required: true,
    maxlength: 100,
  },
  address: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  postcode: {
    type: String,
    required: true,
    maxlength: 10,
  },
  city: {
    type: String,
    required: true,
    maxlength: 100,
  },
  state: {
    type: String,
    required: true,
    maxlength: 100,
  },
  country: {
    type: String,
    required: true,
    maxlength: 100,
  }
}, { timestamps: true })

module.exports = mongoose.model('Location', LocationSchema)