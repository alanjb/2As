//https://codingsans.com/blog/mongoose-models-using-typescript-classes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create UserSchema
const PostSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    text: {
      type: String, 
      required: true
    }
});
