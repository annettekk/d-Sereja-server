const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoSchema = new Schema({
  title: String,
  photoSrc: String,
  model: String,
  description: String,
  liked: Number,
  faved: Boolean,
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
