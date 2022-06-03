const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for the post
let Post = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  wallheight: {
    type: String
  },
  wallwidth: {
    type: String
  },
  floorwidth: {
    type: String
  },
  floorlength: {
    type: String
  },
  tilesizewallwidth: {
    type: String
  },
  tilesizewalllength: {
    type: String
  },
  tilesizefloorwidth: {
    type: String
  },
  tilesizefloorlength: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
  
  
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);