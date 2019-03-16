const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  userCreated: {
    type: Boolean,
    required: true
  },
  
});

module.exports = Service = mongoose.model('services', ServiceSchema);
