import * as mongoose from 'mongoose';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
// https://codingsans.com/blog/mongoose-models-using-typescript-classes
class User extends Typegoose {
  @prop({ required: true }){
    name: string;
  }
}

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   avatar: {
//     type: String
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
// });

// module.exports = User = mongoose.model('users', UserSchema);
