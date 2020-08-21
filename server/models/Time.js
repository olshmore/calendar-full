const mongoose = require('mongoose');

const TimeSchema = new mongoose.Schema({
  opDate: {
    type: String,
    required: true
  },
  opTime: {
    type: String,
    required: true
  },
  opMaster: {
    type: String,
    required: true
  },
  isBooked: {
    type: Boolean,
    default: false
  },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Time', TimeSchema);
