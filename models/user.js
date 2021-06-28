var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {
        first: String,
        last: String
    },
    age: Number,
    isMarried: Boolean,
    family: [
        {
            name: String,
            relation: String
        }
    ],
    friends: [String]
  },
  {
      timestamps: true
  }
);
//Export model
module.exports = mongoose.model('pony', UserSchema);

