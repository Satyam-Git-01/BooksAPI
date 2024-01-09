const {
  getBooks,
  getBookById,
  updateBookById,
  insertBook,
  deleteBookById,
} = require("../controllers/booksController.js");
const bookRouter = require("express").Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBookById);
bookRouter.post("/", insertBook);
bookRouter.put("/:id", updateBookById);
bookRouter.delete("/:id", deleteBookById);

module.exports = {
  bookRouter,
};
