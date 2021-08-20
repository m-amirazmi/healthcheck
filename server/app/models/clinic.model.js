const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const ClinicSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  location: {
    type: ObjectId,
    ref: 'Location',
    required: true
  },
  symptomsHandled: [{
    type: ObjectId,
    ref: 'Symptom',
    required: true
  }],
  serviceOffered: [{
    type: ObjectId,
    ref: 'Service',
    required: true
  }]
}, { timestamps: true })

module.exports = mongoose.model('Clinic', ClinicSchema)