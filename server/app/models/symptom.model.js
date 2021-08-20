const mongoose = require('mongoose')

const SymptomSchema = new mongoose.Schema({
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
}, { timestamps: true })

module.exports = mongoose.model('Symptom', SymptomSchema)