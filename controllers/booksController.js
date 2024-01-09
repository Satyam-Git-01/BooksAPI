const { bookModel } = require("../models/bookModel");
const getBooks = async (req, res) => {
  const data = await bookModel.find({});
  return res.send(data);
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await bookModel.findOne({ _id: id });
    if(data==null){
      console.log('reached')
      return res.status(500)
    }
    return res.send(data);
  } catch (error) {
    return res.status(500).send("Error");
  }
};

const insertBook = async (req, res) => {
  try {
    const { title, author, genere, publicationDate } = req.body;
    const book = { title, author, genere, publicationDate };
    const result = await bookModel.create(book);
    return res.status(200).send("Created Successfully");
  } catch (err) {
    return res.status(500);
  }
};
const updateBookById = async (req, res) => {
  const { id } = req.params;
  const { title, author, genere, publicationDate } = req.body;
  console.log(id);
  const result = await bookModel.updateOne(
    { _id: id },
    { $set: { title, author, genere, publicationDate } }
  );
  return res.send("Updated");
};
const deleteBookById = async (req, res) => {
  const { id } = req.params;
  const result = await bookModel.deleteOne({ _id: id });
  return res.send("Deleted");
};

module.exports = {
  getBooks,
  getBookById,
  updateBookById,
  insertBook,
  deleteBookById,
};
