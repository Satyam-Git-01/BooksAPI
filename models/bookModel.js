const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    reuired: true,
  },
  author: {
    type: String,
    reuired: true,
  },
  genere: {
    type: String,
    reuired: true,
  },
  publicationDate: {
    type: String,
    required: true,
  },
});
const bookModel = model("books", bookSchema);
module.exports = {
  bookModel,
};
