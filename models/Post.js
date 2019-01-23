const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create UserSchema
const PostSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    text: {

    }
});
