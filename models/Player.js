const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  favorite_things: {
    type: [String],
    default: []
  },

  answers: {
    type: [Number],
    default: []
  },

  img_src: {
    type: String,
    required: true
  }
})

module.exports = Player = mongoose.model('Player', PlayerSchema)