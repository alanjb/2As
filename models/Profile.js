const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  location: {
    type: String
  },

  bio: {
    type: String,
    required: true
  },

  skills: {
    type: [String],
    required: true
  },

  services: [{
    name: String
  }],

  items: [{
    name: String
  }],

});
